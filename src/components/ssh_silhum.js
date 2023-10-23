const ssh2 = require('ssh2');

function sendToShell(messageToSend, sshConfig) {
  const client = new ssh2.Client();

  client.on('ready', () => {
    console.log('SSH connection established.');

    client.shell((err, stream) => {
      if (err) throw err;

      stream.on('close', (code, signal) => {
        console.log('SSH shell closed with code ' + code);
        client.end();
      });

      stream.on('data', (data) => {
        console.log('Received data from the shell: ' + data);
      });

      // Send your message to the shell
      stream.write(messageToSend + '\n'); // Adding '\n' to simulate pressing Enter

      // Close the shell after sending the message
      stream.end();
    });
  });

  client.on('error', (err) => {
    console.error('SSH connection error: ' + err);
    client.end();
  });

  client.on('close', () => {
    console.log('SSH connection closed.');
  });

  client.connect(sshConfig);
}

// Usage example:
const sshConfig = {
  host: 'your-server-hostname-or-ip',
  port: 22,
  username: 'your-ssh-username',
  password: 'your-ssh-password',
};

const messageToSend = '1'; // The message you want to send
sendToShell(messageToSend, sshConfig);
