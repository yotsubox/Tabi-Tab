import { NotificationBox } from "./NotificationManager/NotificationBox.js";

export class NotificationManager {
  constructor(notificationContainer) {
    this.container = notificationContainer;
  }

  /**
   * Popup a new notification.
   * @param {string} message
   * @param {string} iconPath path to an image for notification box icon (optional)
   * @param {number} duration (in milliseconds) (default is 3000 milliseconds)
   */
  newNotification(message, iconPath = null, duration = 3000) {
    const notificationBox = NotificationBox.Create(message, iconPath);

    this.container.append(notificationBox);

    setTimeout(() => notificationBox.removeWithFadeOutEffect(), duration);
  }
}
