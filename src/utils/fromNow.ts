/**
 * Implements all the behaviors of moment.fromNow(). Pass a
 * valid JavaScript Date object and the method will return the
 * time that has passed since that date in a human-readable
 * format. Passes the moment test suite for `fromNow()`.
 * See: https://momentjs.com/docs/#/displaying/fromnow/
 * source: https://gist.github.com/davidrleonard/259fe449b1ec13bf7d87cde567ca0fde
 */
export const fromNow = (date: Date, showDays = false): string => {
  const now = new Date();
  var seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  var years = Math.floor(seconds / 31536000);
  var months = Math.floor(seconds / 2592000);
  var days = Math.floor(seconds / 86400);

  if (showDays) {
    return days + " days";
  }
  if (days > 548) {
    return years + " years ago";
  }
  if (days >= 320 && days <= 547) {
    return "a year ago";
  }
  if (days >= 45 && days <= 319) {
    return months + " months ago";
  }
  if (days >= 26 && days <= 45) {
    return "a month ago";
  }

  var hours = Math.floor(seconds / 3600);

  if (hours >= 36 && days <= 25) {
    return days + " days ago";
  }
  if (hours >= 22 && hours <= 35) {
    return "a day ago";
  }

  var minutes = Math.floor(seconds / 60);

  if (minutes >= 90 && hours <= 21) {
    return hours + " hours ago";
  }
  if (minutes >= 45 && minutes <= 89) {
    return "an hour ago";
  }
  if (seconds >= 90 && minutes <= 44) {
    return minutes + " minutes ago";
  }
  if (seconds >= 45 && seconds <= 89) {
    return "a minute ago";
  }
  if (seconds >= 0 && seconds <= 45) {
    return "a few seconds ago";
  }
  return "";
};
