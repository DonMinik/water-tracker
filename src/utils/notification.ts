import useLocalStorage from '@/utils/useLocalStorage'
import {HistoryEntry} from '@/utils/model'


export function initNotification(currentNotificationRunnerId?: number) {
  console.log('attempting to clear interval', currentNotificationRunnerId);
  clearInterval(currentNotificationRunnerId);
  let notificationRunnerId;
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    startNotificationRunner()
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        startNotificationRunner()
      }
    });
  }
  
  function startNotificationRunner() {
    const interval = useLocalStorage('notification-interval', 60)
    
    console.log('start notification with interval', interval.value.value)
    notificationRunnerId = setInterval(createNotification, interval.value.value * 60 * 1000);
    console.log('started notification runner', notificationRunnerId)
  }

  function createNotification() {
    console.log('create notification')
    const goal = useLocalStorage('goal', 2000)
    const history = useLocalStorage('history', []);
    const today = new Date(Date.now());
    const isReachedGoal = history.value.find((entry: HistoryEntry) => entry.date === today.toDateString())?.water >= goal.value;
    if(!isReachedGoal) {
      console.log('notify')
      new Notification("Drank enough? ;)")
    }
  }

  return notificationRunnerId;
}

