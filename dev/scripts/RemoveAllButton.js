import { SavableObjects } from "./core/SaveSystem.js";
import { createElement } from "./core/Utils.js";
import { removeList } from "./core/ImagePaths.js";
import { notificationManager } from "./main.js";

export class RemoveAllButton {
  static FromExistingElem(button) {
    button.addEventListener("click", () => {
      const confirmBox = ConfirmBox.Create("Are you sure?");
      document.body.appendChild(confirmBox);
      confirmBox.focus();

      confirmBox.onYes(() => {
        for (const tabList of SavableObjects.getTabLists()) tabList.remove();

        notificationManager.newNotification("Everything Removed", removeList);
      });
    });
  }
}

class ConfirmBox {
  static Create(messageText) {
    const confirmBox = createElement("div", "confirm-box");
    confirmBox.tabIndex = 9; //random number, so that div can be focus-able.
    confirmBox.addEventListener("blur", () => {
      confirmBox.remove();
    });

    confirmBox.onYes = function (handler) {
      confirmBox.handler = handler;
    };

    const message = createElement("div", "confirm-box__message");
    message.textContent = messageText;

    const yes = YesButton.Create(() => {
      confirmBox.handler();
      confirmBox.blur();
    });

    const no = NoButton.Create(() => confirmBox.blur());

    const optionContainer = createElement("div", "confirm-box__option-container");
    optionContainer.append(yes, no);

    confirmBox.append(message, optionContainer);
    return confirmBox;
  }
}

class YesButton {
  static Create(handler) {
    const button = createElement("div", "confirm-box__yes");
    button.textContent = "yes";

    button.addEventListener("click", handler);

    return button;
  }
}

class NoButton {
  static Create(handler) {
    const button = createElement("div", "confirm-box__no");
    button.textContent = "no";

    button.addEventListener("click", handler);

    return button;
  }
}
