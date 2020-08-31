import { createElement } from "../Utils.js";

export class NotificationBox {
  static Create(message, iconPath = null) {
    const notificationBox = createElement("div", "notification-box");
    const icon = iconPath ? Icon.Create(iconPath) : null;
    const contentBox = ContentBox.Create(message);

    addFunctionalities(notificationBox);
    addEventListeners(notificationBox);

    if (icon) notificationBox.appendChild(icon);
    notificationBox.appendChild(contentBox);

    return notificationBox;
  }
}

function addFunctionalities(notificationBox) {
  notificationBox.removeWithFadeOutEffect = function removeWithFadeOutEffect() {
    this.classList.add("notification-box--remove-animation");
  };
}

function addEventListeners(notificationBox) {
  notificationBox.addEventListener("animationend", (e) => {
    if (e.animationName === "notification-box-remove-effect") notificationBox.remove();
  });
}

class Icon {
  static Create(iconPath) {
    if (!iconPath) throw SyntaxError(`Path to icon '${iconPath}' do not exist.`);
    const icon = createElement("img", "notification-box__icon");
    icon.src = iconPath;

    return icon;
  }
}

class ContentBox {
  static Create(message) {
    const contentBox = createElement("div", "notification-box__content-box");
    contentBox.textContent = message;

    return contentBox;
  }
}
