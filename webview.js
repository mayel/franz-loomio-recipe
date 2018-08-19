module.exports = (Franz) => {
  function getMessages() {
    let direct = 0;
    const FranzData = document.querySelector('#notifications .badge').innerHTML;
    if (FranzData) {
      direct = FranzData;
    }

    Franz.setBadge(direct);
  }

  Franz.loop(getMessages);
}