// Alhamdulliah section****************
let alhamdulliahInitialValue = 0;
let alhamdulliahDisplay = document.getElementById("alhamdulliah-display");
document
  .getElementById("alhamdulliah-increment")
  .addEventListener("click", function () {
    alhamdulliahInitialValue = alhamdulliahInitialValue + 1;
    alhamdulliahDisplay.innerText = alhamdulliahInitialValue;
  });
document
  .getElementById("alhamdulliah-decrement")
  .addEventListener("click", function () {
    if (alhamdulliahInitialValue > 0) {
      alhamdulliahInitialValue -= 1;
      alhamdulliahDisplay.innerText = alhamdulliahInitialValue;
    }
  });

// subhanallah section*******************
let subhanallahDisplay = document.getElementById("subhanallah-display");
let subhanallahInitialValue = 0;
document
  .getElementById("subhanallah-increment")
  .addEventListener("click", function () {
    subhanallahInitialValue += 1;
    subhanallahDisplay.innerText = subhanallahInitialValue;
  });

document
  .getElementById("subhanallah-decrement")
  .addEventListener("click", function () {
    if (subhanallahInitialValue > 0) {
      subhanallahInitialValue -= 1;
      subhanallahDisplay.innerText = subhanallahInitialValue;
    }
  });

// Astagfirullah section**************
let astagfirullahDisplay = document.getElementById("astagfirullah-display");
let astagfirullahInitialValue = 0;
document
  .getElementById("astagfirullah-increment")
  .addEventListener("click", function () {
    astagfirullahInitialValue += 1;
    astagfirullahDisplay.innerText = astagfirullahInitialValue;
  });
document
  .getElementById("astagfirullah-decrement")
  .addEventListener("click", function () {
    if (astagfirullahInitialValue > 0) {
      astagfirullahInitialValue -= 1;
      astagfirullahDisplay.innerText = astagfirullahInitialValue;
    }
  });
