describe("servers.js tests with setup and tear down", function() {
  describe('submitServerInfo() test1', function () {
    beforeEach(function () {
      // initialization logic
      serverNameInput.value = 'Alice';
    });
    it('should add a new server to allServers on submitServerInfo()', function () {
      submitServerInfo();
      expect(Object.keys(allServers).length).toEqual(1);
      expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });
    afterEach(function () {
      serverNameInput.value = '';
      serverId = 0;
      serverTbody.innerHTML = '';
      allServers = {};
    });
  });
  describe('submitServerInfo test2', function () {
    beforeEach(function () {
      serverNameInput.value = "2022";
    });
    it('should only accept letters in the input', function () {
      expect(() => submitServerInfo()).toThrowError();
    });
    afterEach(function () {
      serverNameInput.value = '';
      serverId = 0;
      serverTbody.innerHTML = '';
      allServers = {};
    });
  });
  describe('updateServerTable() tests', function () {
      beforeEach(function () {
        allServers = {};
      });
      it('should not update the table if allServers object is empty', function () {
        updateServerTable()
        expect(serverTbody.innerHTML).toBe('')
      });
    });
   
});



