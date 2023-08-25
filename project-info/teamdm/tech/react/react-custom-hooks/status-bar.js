import UseOnlineStatus from './use-online-status';

function StatusBar() {
  const isOnline = UseOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

export default StatusBar;