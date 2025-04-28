import { useNotificationStore } from '../store/useNotification'

export function useNotification() {
  const { showNotification } = useNotificationStore()
  
  return {
    success: (message: string, duration?: number) => 
      showNotification(message, 'success', duration),
    error: (message: string, duration?: number) => 
      showNotification(message, 'error', duration),
    info: (message: string, duration?: number) => 
      showNotification(message, 'info', duration),
    warning: (message: string, duration?: number) => 
      showNotification(message, 'warning', duration),
  }
}