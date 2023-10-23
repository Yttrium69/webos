from flask import Flask, request, jsonify
import paramiko

app = Flask(__name__)

# SSH server information
SSH_HOST = '165.246.44.97'
SSH_PORT = 22
SSH_USERNAME = 'lilmae'
SSH_PASSWORD = '970512'

@app.route('/', methods=['GET', 'POST'])
def send_ssh_message():
    import paramiko
    import getpass

    # SSH server information
    SSH_HOST = '192.158.0.168'
    SSH_PORT = 22  # Default SSH port
    ID = "lilmae"
    PASSWORD = "970512"

    try:
        # Create an SSH client
        ssh_client = paramiko.SSHClient()
        ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

        # Connect to the SSH server
        ssh_client.connect(SSH_HOST, SSH_PORT, username=ID, password=PASSWORD)

        command = ' mkdir ./gogo'
        stdin, stdout, stderr = ssh_client.exec_command(command)
        command_output = stdout.read().decode('utf-8')
        print(command_output)

        print(f'Successfully connected to {SSH_HOST} on port {SSH_PORT}')
    except Exception as e:
        print(f'Failed to connect to {SSH_HOST} on port {SSH_PORT}: {str(e)}')
    finally:
        ssh_client.close()  # Close the SSH connection
    return '<script>alert("good"); location.href="http://localhost:5000"</script>'

if __name__ == '__main__':
    app.run(debug=True, port=2000)






