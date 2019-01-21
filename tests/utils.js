const TestUtils = {
  timeout: function(completion, time = 3000) {
    return new Promise(resolve => {
      setTimeout(() => {
        completion();
      }, time);
    });
  }
};

export default TestUtils;
