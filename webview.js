module.exports = (Franz) => {
  function getMessages() {
    let direct = 0;
    let indirect = 0;
    const FranzData = document.querySelector('#notifications .badge').innerHTML;
    if (FranzData) {
      direct = FranzData;
    }

    Franz.setBadge(direct, indirect);
  }

  Franz.loop(getMessages);
}