function payWithMonnify() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const amount = document.getElementById('amount').value;
  MonnifySDK.initialize({
    amount: amount,
    currency: "NGN",
    reference: "Monn_" + Math.floor((Math.random()* 1000000) + 1),
    customerFullName: name,
    customerEmail: email,
    apiKey: "MK_TEST_P49UUS98XS",
    contractCode: 5623063227,
    paymentDescription: "purchase payment",
    isTestMode: true,
    onComplete: function(response) {
      paymentSuccessful = true;
      if (paymentSuccessful) {
      window.location.href = "success.html"}
      else {
        alert('Transaction not successful')
      }
    },
    onClose: function (data) {
    return;
    }
  });
};
