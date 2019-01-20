const TestUtils = {
  timeout: function(completion, time = 4000) {
    return new Promise(resolve => {
      setTimeout(() => {
        completion();
      }, time);
    });
  }
}

export default TestUtils;