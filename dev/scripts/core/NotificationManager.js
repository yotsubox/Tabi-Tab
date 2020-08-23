import { NotificationBox } from "./NotificationManager/NotificationBox.js";

export class NotificationManager {
  constructor(notificationContainer) {
    this.container = notificationContainer;
  }

  /**
   * Popup a new notification.
   * @param {string} message
   * @param {number} duration (in milliseconds)
   * @param {string} iconPath path to an image for notification box icon (optional)
   */
  newNotification(message, duration, iconPath = null) {
    const notificationBox = NotificationBox.Create(message, iconPath);

    this.container.append(notificationBox);

    setTimeout(() => notificationBox.removeWithFadeOutEffect(), duration);
  }
}
