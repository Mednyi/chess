import chai from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);
const expect = chai.expect;
describe('REQRES API test', () => {
   const reqresAPI = 'https://reqres.in/api';
   describe('Users endpoint', () => {
       it('GET users', done => {
           chai.request(reqresAPI).get('/users?page=2').end((err, res) => {
               expect(err).to.be.equal(null);
               expect(res).to.have.status(200);
               expect(res.body).to.be.an('Object');
               expect(res.body.page).to.be.equal(2);
               expect(res.body).to.have.property('data');
               expect(res.body.data).to.be.an('Array');
               done();
           })
       })
       it('GET user', done => {
           chai.request(reqresAPI).get('/users/2').end((err, res) => {
               expect(err).to.be.equal(null);
               expect(res).to.have.status(200);
               expect(res.body).to.be.an('Object');
               expect(res.body).to.have.property('data');
               expect(res.body.data).to.be.an('Object');
               done();
           })
       })
       it('Create user', done => {
           const user = {
               "name": "morpheus",
               "job": "leader"
           };
           chai.request(reqresAPI).post('/users').send(user).then(res => {
               expect(res).to.have.status(201);
               expect(res.body).to.be.an('Object');
               expect(res.body.name).to.be.equal(user.name);
               expect(res.body.job).to.be.equal(user.job);
               done();
           }).catch(err => {
               expect(err).to.be.equal(null);
               throw err;
               console.log(err);
               done();
           })
       })
       it('Update user', done => {
           const user = {
               "name": "neo",
               "job": "leader"
           };
           chai.request(reqresAPI).put('/users').send(user).then(res => {
               expect(res).to.have.status(200);
               expect(res.body).to.be.an('Object');
               expect(res.body.name).to.be.equal(user.name);
               expect(res.body.job).to.be.equal(user.job);
               done();
           }).catch(err => {
               expect(err).to.be.equal(null);
               throw err;
               console.log(err);
               done();
           })
       })
       it('Delete user', done => {
           chai.request(reqresAPI).delete('/users/2').send().then(res => {
               expect(res).to.have.status(204);
               done();
           }).catch(err => {
               expect(err).to.be.equal(null);
               throw err;
               console.log(err);
               done();
           })
       })
   });
});
export default {}
