import { create } from 'zustand'

type NotificationType = 'success' | 'error' | 'info' | 'warning'

type Notification = {
  id: string
  message: string
  type: NotificationType
  duration?: number
}

type NotificationState = {
  notifications: Notification[]
  showNotification: (message: string, type: NotificationType, duration?: number) => void
  removeNotification: (id: string) => void
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  showNotification: (message, type, duration = 3000) => {
    const id = Math.random().toString(36).substring(2, 9)
    set((state) => {
      console.log('state', state.notifications);
      return {
        notifications: [...state.notifications, { id, message, type, duration }]
      }
    })
    
    if (duration > 0) {
      setTimeout(() => {
        set((state) => ({
          notifications: state.notifications.filter((notification) => notification.id !== id)
        }))
      }, duration)
    }
  },
  removeNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter((notification) => notification.id !== id)
    }))
  }
}))