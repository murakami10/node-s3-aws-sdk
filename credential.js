const { defaultProvider } = require('@aws-sdk/credential-provider-node');

(async () => {
  const credential = await defaultProvider()();
  console.log(credential);
})();
