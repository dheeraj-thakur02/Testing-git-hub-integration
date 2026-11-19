const REMINDER_DELAY_HOURS = 24;

export function dueReminders(failedPayments, sent, now = new Date()) {
  return failedPayments.filter((payment) => {
    if (sent.has(payment.id)) return false;
    const hours = (now.getTime() - payment.failedAt.getTime()) / 3600000;
    return hours >= REMINDER_DELAY_HOURS;
  });
}

export function reminderMessage(payment) {
  return {
    to: payment.memberEmail,
    subject: 'Update your card',
    body: `Your last payment of ${payment.amount} failed. Please update your card.`,
  };
}

export function markSent(sent, reminders) {
  const next = new Set(sent);
  reminders.forEach((reminder) => next.add(reminder.id));
  return next;
}
