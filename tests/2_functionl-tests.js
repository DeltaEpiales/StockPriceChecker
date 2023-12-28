const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);

describe('Functional Tests', function () {
  let firstStockLikes = 0;

  it('Viewing one stock', async function () {
    const res = await chai.request(app).get('/api/stock-prices').query({ stock: 'AAPL' });

    chai.expect(res).to.have.status(200);
    chai.expect(res.body.stockData).to.have.property('stock');
    chai.expect(res.body.stockData).to.have.property('price');
    chai.expect(res.body.stockData).to.have.property('likes').that.is.a('number');
  });

  it('Viewing one stock and liking it', async function () {
    const res = await chai.request(app).get('/api/stock-prices').query({ stock: 'AAPL', like: true });

    chai.expect(res).to.have.status(200);
    chai.expect(res.body.stockData.likes).to.equal(1);
    firstStockLikes = res.body.stockData.likes;
  });

  it('Viewing the same stock and liking it again', async function () {
    const res = await chai.request(app).get('/api/stock-prices').query({ stock: 'AAPL', like: true });

    chai.expect(res).to.have.status(200);
    chai.expect(res.body.stockData.likes).to.equal(firstStockLikes);
  });

  it('Viewing two stocks', async function () {
    const res = await chai.request(app).get('/api/stock-prices').query({ stock: 'AAPL,GOOGL' });

    chai.expect(res).to.have.status(200);
    chai.expect(res.body).to.be.an('array').that.has.length(2);
    chai.expect(res.body[0].stock).to.equal('AAPL');
    chai.expect(res.body[1].stock).to.equal('GOOGL');
    chai.expect(res.body[0].rel_likes).to.be.a('number');
    chai.expect(res.body[1].rel_likes).to.be.a('number');
  });

  it('Viewing two stocks and liking them', async function () {
    const res = await chai.request(app).get('/api/stock-prices').query({ stock: 'AAPL,GOOGL', like: true });

    chai.expect(res).to.have.status(200);
    chai.expect(res.body).to.be.an('array').that.has.length(2);
    chai.expect(res.body[0].rel_likes).to.be.a('number');
    chai.expect(res.body[1].rel_likes).to.be.a('number');
  });
});
