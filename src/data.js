// data.js
// Static data for IoT Laboratory Experiments

const experiments = [
  {
    id: 1,
    name: "Experiment 1: Installation of Arduino IDE and execution of blink program and Analog-read serial program using ESP32",
    aim: "To install Arduino IDE for Windows and to execute blink program and analog read serial program using ESP32 board.",
    components: ["ESP32 Board", "USB Cable", "Computer with Windows OS", "Arduino IDE"],
    procedure: [
      "Installation of Arduino IDE for Windows",
      "Initially, download the MSI installer file for Windows OS from the Arduino website → Download option from any web browser.",
      "On clicking the Windows option before downloading, the webpage moves to a support page for a premium option. Just click the Download option.",
      "Once downloaded, open the installer and install Arduino IDE by accepting the terms and conditions.",
      "Once installation is completed, open the Arduino IDE and wait until all the required files and packages are installed.",
      "For downloading all the necessary file packages, click File → Preferences. A panel opens with an empty space for Additional Board Manager URLs.",
      "Paste the following URL in the box to download the packages for ESP32: https://dl.espressif.com/dl/package_esp32_index.json",
      "Click OK after pasting the URL.",
      "The next step is to select the board.",
      "For selecting the board, click Tools → Board → Boards Manager → type 'ESP32' in the search bar.",
      "Install the package named 'esp32 by Espressif Systems'.",
      "Once the installation is complete, select the board by clicking Tools → Board → ESP32 Arduino → NodeMCU-32S (or your ESP32 model).",
      "Next, select the port.",
      "Open the Device Manager from the PC and select Ports (COM & LPT). The available port will be shown as Silicon Labs CP210x USB to UART Bridge (COM 4) or similar.",
      "If the driver is not available, download the CP210x USB to UART driver for Windows from the official Silicon Labs website.",
      "Open the downloaded installer, click Extract All Files, accept the agreement, and install the package.",
      "Refresh the device manager, and the COM port (e.g., COM4) will be displayed.",
      "To select the required port in Arduino IDE, click Tools → Port → COM4.",
      "Check if the desired node (e.g., NodeMCU-32S) and port (COM4) are connected at the bottom of the page before performing any operation.",
      "Once connected, the Arduino IDE is ready for performing the operation.",
      "Blink program execution on ESP32",
      "For performing the operation, we can directly select the code from File → Examples → 01.Basics → Blink.",
      "The code for the implementation of blink will be opened in the IDE.",
      "By default, the onboard LED of ESP32 is connected to GPIO 2, so modify the LED pin in the program if necessary.",
      "Once all these processes are done, run (upload) the program.",
      "The LED connected to GPIO 2 on the ESP32 will start blinking, and the output is verified.",
      "Analog Read Serial implementation on ESP32",
      "For performing the operation of reading the analog input on pin GPIO34 and printing the result on the serial monitor, we can directly copy the code from File → Examples → 01.Basics → AnalogReadSerial.",
      "The code is copied into IDE and click the Upload option to verify the output.",
      "The output can be verified in both the Serial Monitor and Serial Plotter, which show the analog signal readings from the ESP32 board."
    ],
    program: [
      {
        title: "Blink Program",
        code: `void setup() {
  pinMode(2, OUTPUT);
}

void loop() {
  digitalWrite(2, LOW);
  delay(1000);
  digitalWrite(2, HIGH);
  delay(2000);
}`
      },
      {
        title: "Analog Read Serial Program",
        code: `void setup() {
  Serial.begin(9600);
}

void loop() {
  int value = analogRead(34);
  Serial.println(value);
  delay(1000);
}`
      }
    ],
    images: ["esp32 pin config.jpg"],
    output: "Thus, the implementation of Blink program and Analog Read Serial program was successfully verified on the ESP32 board."
  },
  {
    id: 2,
    name: "Experiment 2: Traffic Light Control Using ESP32",
    aim: "To implement a traffic light controller using the ESP32 development board.",
    components: [
      "ESP32 Development Board (1)",
      "Breadboard (1)",
      "Jumper Wires (11)",
      "LEDs (Red, Yellow, Green) (9)",
      "Computer with Arduino IDE installed (1)",
      "Micro USB Cable (1)"
    ],
    procedure: [
      "Connect the ESP32 board to the computer using a micro USB cable.",
      "Open the Arduino IDE and select Tools → Board → ESP32 Arduino → NodeMCU-32S (or your ESP32 model).",
      "Select the Port (e.g., COM4) from Tools → Port after ensuring the ESP32 is detected.",
      "Connect the 3.3V pin and GND pin of ESP32 to the power and ground rails of the breadboard.",
      "Define digital pins for all LED connections.",
      "Connect the LEDs in the breadboard and wire them as follows:",
      "Red LEDs → GPIO13, GPIO27, GPIO33",
      "Yellow LEDs → GPIO12, GPIO26, GPIO32",
      "Green LEDs → GPIO14, GPIO25, GPIO15",
      "In Arduino, create a program that controls three sets of traffic lights sequentially (each with red, yellow, and green LEDs).",
      "Upload the program to the ESP32 and observe the LED changes on the breadboard."
    ],
    program: [
      {
        title: "Traffic Light Control Program (3 Sets)",
        code: `// Traffic Light Control using ESP32

// Signal 1
const int R1 = 13;
const int Y1 = 12;
const int G1 = 14;

// Signal 2
const int R2 = 27;
const int Y2 = 26;
const int G2 = 25;

// Signal 3
const int R3 = 33;
const int Y3 = 32;
const int G3 = 15;

void setup() {
  // Set all pins as OUTPUT
  int pins[] = {R1, Y1, G1, R2, Y2, G2, R3, Y3, G3};
  for (int i = 0; i < 9; i++) {
    pinMode(pins[i], OUTPUT);
    digitalWrite(pins[i], LOW); // Start with all OFF
  }
}

void loop() {
  signalCycle(R1, Y1, G1, R2, Y2, G2, R3, Y3, G3);
}

void signalCycle(int R1, int Y1, int G1, int R2, int Y2, int G2, int R3, int Y3, int G3) {
  // Signal 1: GREEN, Signal 2 & 3: RED
  setSignal(G1, Y1, R1, HIGH, LOW, LOW);
  setSignal(G2, Y2, R2, LOW, LOW, HIGH);
  setSignal(G3, Y3, R3, LOW, LOW, HIGH);
  delay(5000);

  // Signal 1: YELLOW
  setSignal(G1, Y1, R1, LOW, HIGH, LOW);
  delay(2000);
  setSignal(G1, Y1, R1, LOW, LOW, HIGH);

  // Signal 2: GREEN
  setSignal(G2, Y2, R2, HIGH, LOW, LOW);
  delay(5000);
  setSignal(G2, Y2, R2, LOW, HIGH, LOW);
  delay(2000);
  setSignal(G2, Y2, R2, LOW, LOW, HIGH);

  // Signal 3: GREEN
  setSignal(G3, Y3, R3, HIGH, LOW, LOW);
  delay(5000);
  setSignal(G3, Y3, R3, LOW, HIGH, LOW);
  delay(2000);
  setSignal(G3, Y3, R3, LOW, LOW, HIGH);
}

void setSignal(int greenPin, int yellowPin, int redPin, bool green, bool yellow, bool red) {
  digitalWrite(greenPin, green);
  digitalWrite(yellowPin, yellow);
  digitalWrite(redPin, red);
}`
      },
      {
        title: "Alternate Program (Single 4-pin RGB LED Simulation)",
        code: `const int redPin = 2;
const int yellowPin = 4;
const int greenPin = 5;
const int commonPin = 16; // Common pin for the 4-pin LED

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(yellowPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(commonPin, OUTPUT);
  digitalWrite(commonPin, HIGH); // Common pin usually pulled high
}

void loop() {
  // Red light
  digitalWrite(redPin, HIGH);
  digitalWrite(yellowPin, LOW);
  digitalWrite(greenPin, LOW);
  delay(3000);

  // Red + Yellow
  digitalWrite(redPin, HIGH);
  digitalWrite(yellowPin, HIGH);
  digitalWrite(greenPin, LOW);
  delay(1000);

  // Green light
  digitalWrite(redPin, LOW);
  digitalWrite(yellowPin, LOW);
  digitalWrite(greenPin, HIGH);
  delay(3000);

  // Yellow light
  digitalWrite(redPin, LOW);
  digitalWrite(yellowPin, HIGH);
  digitalWrite(greenPin, LOW);
  delay(1000);
}`
      },
      {
        title: "6-Signal Traffic Light Control Program",
        code: "#define redPin1 2
#define yellowPin1 4
#define greenPin1 5
#define redPin2 12
#define yellowPin2 13
#define greenPin2 14
#define redPin3 15
#define yellowPin3 16
#define greenPin3 17
#define redPin4 18
#define yellowPin4 19
#define greenPin4 21
#define redPin5 22
#define yellowPin5 23
#define greenPin5 25
#define redPin6 26
#define yellowPin6 27
#define greenPin6 32

void setup() {
  pinMode(redPin1, OUTPUT);
  pinMode(yellowPin1, OUTPUT);
  pinMode(greenPin1, OUTPUT);
  pinMode(redPin2, OUTPUT);
  pinMode(yellowPin2, OUTPUT);
  pinMode(greenPin2, OUTPUT);
  pinMode(redPin3, OUTPUT);
  pinMode(yellowPin3, OUTPUT);
  pinMode(greenPin3, OUTPUT);
  pinMode(redPin4, OUTPUT);
  pinMode(yellowPin4, OUTPUT);
  pinMode(greenPin4, OUTPUT);
  pinMode(redPin5, OUTPUT);
  pinMode(yellowPin5, OUTPUT);
  pinMode(greenPin5, OUTPUT);
  pinMode(redPin6, OUTPUT);
  pinMode(yellowPin6, OUTPUT);
  pinMode(greenPin6, OUTPUT);
}

void loop() {
  // Road 1 Green, Others Red
  digitalWrite(greenPin1, HIGH);
  digitalWrite(redPin2, HIGH);
  digitalWrite(redPin3, HIGH);
  digitalWrite(redPin4, HIGH);
  digitalWrite(redPin5, HIGH);
  digitalWrite(redPin6, HIGH);
  delay(5000);

  // Road 1 Yellow
  digitalWrite(greenPin1, LOW);
  digitalWrite(yellowPin1, HIGH);
  delay(2000);

  // Road 2 Green, Others Red
  digitalWrite(yellowPin1, LOW);
  digitalWrite(redPin1, HIGH);
  digitalWrite(greenPin2, HIGH);
  digitalWrite(redPin3, HIGH);
  digitalWrite(redPin4, HIGH);
  digitalWrite(redPin5, HIGH);
  digitalWrite(redPin6, HIGH);
  delay(5000);

  // Road 2 Yellow
  digitalWrite(greenPin2, LOW);
  digitalWrite(yellowPin2, HIGH);
  delay(2000);

  // Road 3 Green, Others Red
  digitalWrite(yellowPin2, LOW);
  digitalWrite(redPin2, HIGH);
  digitalWrite(greenPin3, HIGH);
  digitalWrite(redPin4, HIGH);
  digitalWrite(redPin5, HIGH);
  digitalWrite(redPin6, HIGH);
  delay(5000);

  // Road 3 Yellow
  digitalWrite(greenPin3, LOW);
  digitalWrite(yellowPin3, HIGH);
  delay(2000);

  // Road 4 Green, Others Red
  digitalWrite(yellowPin3, LOW);
  digitalWrite(redPin3, HIGH);
  digitalWrite(greenPin4, HIGH);
  digitalWrite(redPin5, HIGH);
  digitalWrite(redPin6, HIGH);
  delay(5000);

  // Road 4 Yellow
  digitalWrite(greenPin4, LOW);
  digitalWrite(yellowPin4, HIGH);
  delay(2000);

  // Road 5 Green, Others Red
  digitalWrite(yellowPin4, LOW);
  digitalWrite(redPin4, HIGH);
  digitalWrite(greenPin5, HIGH);
  digitalWrite(redPin6, HIGH);
  delay(5000);

  // Road 5 Yellow
  digitalWrite(greenPin5, LOW);
  digitalWrite(yellowPin5, HIGH);
  delay(2000);

  // Road 6 Green, Others Red
  digitalWrite(yellowPin5, LOW);
  digitalWrite(redPin5, HIGH);
  digitalWrite(greenPin6, HIGH);
  delay(5000);

  // Road 6 Yellow
  digitalWrite(greenPin6, LOW);
  digitalWrite(yellowPin6, HIGH);
  delay(2000);

  // All Red for a moment
  digitalWrite(yellowPin6, LOW);
  digitalWrite(redPin1, HIGH);
  digitalWrite(redPin2, HIGH);
  digitalWrite(redPin3, HIGH);
  digitalWrite(redPin4, HIGH);
  digitalWrite(redPin5, HIGH);
  digitalWrite(redPin6, HIGH);
  delay(1000);
}`
      }
    ],
    images: ["esp32 pin config.jpg"],
    output: "Thus, the traffic signal controller was successfully implemented and verified using the ESP32 development board."
  },
  {
    id: 3,
    name: "Experiment 3: IoT Cloud Data Logging using ThingSpeak and ESP32",
    aim: "To interface the ESP32 with the ThingSpeak cloud platform and upload real-time sensor data using Wi-Fi connectivity.",
    components: [
      "ESP32 Development Board (1)",
      "Breadboard (1)",
      "Jumper Wires (5)",
      "Potentiometer / LDR Sensor (1)",
      "Computer with Arduino IDE Installed (1)",
      "Micro USB Cable (1)"
    ],
    procedure: [
      "Circuit Connection:",
      "Connect the ESP32 board to your computer using a Micro USB cable.",
      "Connect the sensor (e.g., LDR or potentiometer) to the analog pin A0 (GPIO 34) of the ESP32.",
      "Connect 3.3V and GND pins of the ESP32 to power the sensor through the breadboard.",
      "ThingSpeak Setup:",
      "Create an account on ThingSpeak.",
      "Create a new channel and enable Field 1 for data entry.",
      "Copy the Write API Key from the API Keys tab of the channel.",
      "Arduino IDE Setup:",
      "Open Arduino IDE and select ESP32 Dev Module from Tools → Board.",
      "Connect your ESP32 and select the correct COM port.",
      "Install the required libraries: WiFi.h (comes by default with ESP32) and ThingSpeak.h",
      "Upload the Code:",
      "Paste the below program.",
      "Replace the WiFi SSID, password, and ThingSpeak API key with your own details.",
      "Upload the program to the ESP32.",
      "Open the Serial Monitor (9600 baud) to verify WiFi connection and data updates."
    ],
    program: [
      {
        title: "ThingSpeak Data Logging Program",
        code: `#include <WiFi.h>
#include <ThingSpeak.h>

const char* ssid = "Your_SSID";       // Replace with your WiFi name
const char* password = "Your_PASSWORD"; // Replace with your WiFi password

WiFiClient client;

unsigned long myChannelNumber = 123456;     // Replace with your ThingSpeak Channel ID
const char* myWriteAPIKey = "XXXXXXXXXXXXXXX"; // Replace with your Write API Key

int sensorPin = 34; // Analog input pin for sensor
int sensorValue = 0;

void setup() {
  Serial.begin(9600);
  WiFi.begin(ssid, password);

  Serial.println("Connecting to WiFi...");
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting...");
  }

  Serial.println("WiFi Connected!");
  ThingSpeak.begin(client);
}

void loop() {
  sensorValue = analogRead(sensorPin);
  Serial.print("Sensor Value: ");
  Serial.println(sensorValue);

  int statusCode = ThingSpeak.writeField(myChannelNumber, 1, sensorValue, myWriteAPIKey);

  if (statusCode == 200) {
    Serial.println("Data uploaded successfully to ThingSpeak!");
  } else {
    Serial.println("Error uploading data. HTTP code: " + String(statusCode));
  }

  delay(20000); // ThingSpeak allows updates every 15 seconds or more
}`
      }
    ],
    images: ["esp32 pin config.jpg"],
    output: "The sensor data (analog values) are successfully read by ESP32 and sent to ThingSpeak at regular intervals. The ThingSpeak channel graph updates in real-time, showing continuous sensor data values. Thus, the sensor data was successfully uploaded to the ThingSpeak IoT Cloud using the ESP32 microcontroller."
  },
  {
    id: 4,
    name: "Experiment 4: Working with Cooja Simulator",
    aim: "To work with Cooja Simulator for creating an IoT scenario and sending data between client and server.",
    components: [
      "Computer with Contiki OS",
      "Cooja Simulator (from GitHub)",
      "Command Prompt/Terminal",
      "Contiki-ng framework"
    ],
    procedure: [
      "Download the contiki OS from the browser.",
      "Open GitHub and download the code. It will be in the zip format. To make it as normal folder extract the downloaded file.",
      "Open command prompt window and change the directory to download using the command 'cd downloads'",
      "Use the command ls to list all the files present in the downloads.",
      "In downloads open the downloaded contiki file using the command 'cd Contiki-ng-develop'",
      "Then use the following commands step by step in the command prompt 'ls', 'cd tools', 'ls', 'cd cooja' and 'ls'.",
      "Cooja is the graphical user interface used for this simulation experiment.",
      "Open GitHub, select Tools folder, then select Cooja 3945 folder and again download the code in that particular folder and extract it.",
      "Rename the downloaded file as Cooja and make a copy of the file.",
      "In files, open contiki-ng sender location. In that, select tools folder and delete the Cooja file already present in the Tools folder and paste the Cooja folder that was downloaded from GitHub.",
      "Open the command prompt and give the command 'ls'. Now it will list all the items.",
      "Then use the command 'cd..' twice to get out of the present directory and use the command 'ls' to list the items.",
      "Use the command 'cd tools/cooja' and then 'ls' and then give the command './gradlew run'",
      "This command will open the page where we can create files, simulation and motes.",
      "Click File > New Simulation, name it and click motes > add motes > create new mote type > select cooja mote > browse > HelloWorld.",
      "Run the HelloWorld file, compile, create and add the number of motes needed. Then click Start/Pause. Motes will be created and save the file in the desktop or in any other folder.",
      "Again repeat the same steps to compile the examples folder.",
      "Create new file New Simulation, name it like motes, add motes, create new mote type, cooja mote > browse > click examples folder.",
      "In examples folder, click udp folder and in it, select server file, compile it and click add number of motes and Start/Pause.",
      "Now repeat the same steps from creating a file New Simulation upto udp folder in examples folder.",
      "In udp folder, now validate client file and compile > create and then add number of motes and then click Start/Pause and the output will be displayed as client and server were contacting.",
      "Save the file in the desktop folder.",
      "Again create a file New Simulation for multicast, create new mote type > cooja mote > browse then click examples folder. In that, open multicast folder.",
      "In multicast folder, select root, compile, create and add number of motes.",
      "Now open the sink file, compile, create and add number of motes.",
      "Repeat the same steps and open multicast folder and open and add number of motes to it.",
      "Then click Start/Pause and the output will be shown as root, sink and intermediate will transfer data.",
      "Root and sink will transfer data using intermediate motes created.",
      "Then, save the file in desktop folder."
    ],
    program: [],
    output: "Thus, the working with Cooja Simulator for creating an IoT scenario and sending data between client and server was implemented successfully."
  },
  {
    id: 5,
    name: "Experiment 5: Web Page Interaction with Raspberry Pi",
    aim: "To program basic LED control, switch operations, and web page interaction using a Raspberry Pi board.",
    components: [
      "Raspberry Pi board",
      "Breadboard",
      "Resistors",
      "LED light",
      "Jumper wires",
      "Push button switch (for part 2)",
      "Computer with Thonny IDE"
    ],
    procedure: [
      "Part 1: Basic LED Control",
      "Connect the keyboard and mouse with the Raspberry Pi board. Also, connect the computer with the Raspberry Pi.",
      "Connect the power supply to the Raspberry Pi board, ensuring the setup is done correctly.",
      "Connect the resistor, LED light to the breadboard, and give VCC and GND connections from the Raspberry Pi board.",
      "Ensure the connections are correct and provide power supply to the Raspberry Pi board.",
      "The Raspberry Pi OS will load on the computer.",
      "Open Thonny and run the code after saving it.",
      "",
      "Part 2: Switch ON/OFF Execution",
      "Connect the keyboard, mouse, and computer to the Raspberry Pi board after disconnecting it from the CPU.",
      "Connect the LED in the breadboard.",
      "Give GND and VCC connections to the LED from the Raspberry Pi board.",
      "Connect the input wire from the switch to the Raspberry Pi board.",
      "Connect the output wire from Raspberry Pi to the LED in the breadboard.",
      "After ensuring the correct setup of the connections, provide power supply to Raspberry Pi. Open Thonny and run the code.",
      "",
      "Part 3: Web Page Interaction",
      "Connect the keyboard, mouse, and computer with the Raspberry Pi board.",
      "Connect a resistor and LED to the breadboard.",
      "Using jumper wires, give connections of VCC, GND, and output pins to the breadboard.",
      "Two codes will be available to do this experiment. One is from a webpage to give input to the Raspberry Pi.",
      "Save both files in Python and run.",
      "It will redirect to the HTML web page where the user can give input.",
      "If the 'ON' button is pressed, the light will glow in the breadboard, and the opposite action will be made if the 'OFF' button is pressed in the webpage."
    ],
    program: [
      {
        title: "Part 1: Basic LED Blinking Program",
        code: `import time

import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)
while True:
    GPIO.output(18, GPIO.HIGH)
    time.sleep(1)
    GPIO.output(18, GPIO.LOW)
    time.sleep(1)`
      },
      {
        title: "Part 2: Switch Controlled LED Program",
        code: `import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setup(17, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(18, GPIO.OUT)
while True:
    if GPIO.input(17):
        print("Button Pressed")
        GPIO.output(18, GPIO.HIGH)
    else:
        print("Button Released")
        GPIO.output(18, GPIO.LOW)`
      },
      {
        title: "Part 3: Flask Web Server for LED Control",
        code: `from flask import Flask
from flask import render_template
import RPi.GPIO as rpi
import time
app = Flask(__name__)
rpi.setmode(rpi.BCM)
rpi.setup(18, rpi.OUT)
print("Done")

@app.route('/')
def index():
    return render_template("webpage.html")

@app.route('/1')
def led_on():
    rpi.output(18, rpi.HIGH)
    return render_template("webpage.html")

@app.route('/0')
def led_off():
    rpi.output(18, rpi.LOW)
    return render_template("webpage.html")
    

if __name__=="__main__":
  print("Start")
  app.run(debug=True, host='0.0.0.0')`
      },
      {
        title: "webpage.html Template",
        code: `<!DOCTYPE html>
<html>
<head>
    <title>Raspberry Pi LED Control</title>
</head>
<body>
    <h1>Raspberry Pi LED Control</h1>
    <a href="/1">Turn LED ON</a>
    <br><br>
    <a href="/0">Turn LED OFF</a>
    <br><br>
    <p>Click the links above to control the LED connected to your Raspberry Pi!</p>
</body>
</html>`
      }
    ],
    images: ["raspberry-pi-4.png"],
    output: "Part 1: Basic LED blinking execution was performed using the Raspberry Pi board. Part 2: The switch ON and OFF operation in LED using Raspberry Pi was performed. Part 3: A web interaction with Raspberry Pi was created successfully."
  },
  {
    id: 6,
    name: "Experiment 6: Sending images and videos with Gmail",
    aim: "To send images and videos via Gmail using Raspberry Pi board and PIR sensor.",
    components: [
      "Raspberry Pi board",
      "PIR sensor",
      "Webcam",
      "Gmail account",
      "Jumper wires"
    ],
    procedure: [
      "Login to your email account and enable 2-step verification.",
      "Generate an app password and save it.",
      "Connect the PIR sensor to Raspberry Pi as per the given instructions:",
      "GND of PIR sensor to GND of Raspberry Pi.",
      "VCC to 5V of Raspberry Pi.",
      "Output pin to 13th pin of Raspberry Pi.",
      "Load the given Python code, update the username and password.",
      "Save the code and run it. The script will detect motion and print 'Motion detected'.",
      "Connect the webcam to Raspberry Pi and run the script again.",
      "The captured image from the webcam will be sent successfully to the email ID specified in the to address variable."
    ],
    program: [
      {
        title: "Motion Detection and Email Notification Program",
        code: `import cv2
import time
import smtplib
from email.message import EmailMessage
import RPi.GPIO as GPIO

import os

# Setup PIR sensor
PIR_PIN = 18 # Set GPIO pin for PIR sensor
GPIO.setmode(GPIO.BOARD)
GPIO.setup(PIR_PIN, GPIO.IN)
# Email Configuration
username = "your_email@gmail.com"
password = "your_app_password"
toaddr = "recipient_email@gmail.com"
# Function to capture image
def capture_image(filename):
    cap = cv2.VideoCapture(0) # Open USB camera
    if not cap.isOpened():
        print("Error: Could not open camera")
        return None
    ret, frame = cap.read()
    if ret:
        cv2.imwrite(filename, frame)
        print(f"Image Captured: {filename}")
    else:
        print("Error: Could not capture image")
    cap.release()
# Function to send email
def send_email(image_path):
    msg = EmailMessage()
    msg["Subject"] = "Motion Detected - Image Captured"
    msg["From"] = username
    msg["To"] = toaddr
    msg.set_content("Motion detected! See the attached image.")
    # Attach the image
    with open(image_path, "rb") as img_file:
        img_data = img_file.read()
        msg.add_attachment(img_data, maintype="image", subtype="jpeg",
                          filename=os.path.basename(image_path))
    # Send the email
    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(username, password)
            server.send_message(msg)
        print("Email sent successfully!")
    except Exception as e:
        print(f"Error: An error occurred: {e}")
# Main Loop
try:
    print("Waiting for motion...")

    while True:
        if GPIO.input(PIR_PIN): # Motion detected
            print("Motion detected!")
            timestamp = time.strftime("%Y-%m-%d_%H-%M-%S")
            image_filename = f"motion_{timestamp}.jpeg"
            capture_image(image_filename)
            send_email(image_filename)
            time.sleep(10) # Wait 10 seconds before detecting again
except KeyboardInterrupt:
    print("Program stopped by user.")
finally:
    GPIO.cleanup()`
      }
    ],
    images: ["raspberry-pi-4.png"],
    output: "The image was successfully sent via Gmail using Raspberry Pi and PIR sensor upon detecting motion."
  },
  {
    id: 7,
    name: "Experiment 7: Creating and Exploring EC2 Instances in AWS",
    aim: "To create and explore EC2 instances in AWS.",
    components: [
      "AWS Account",
      "Amazon EC2 Console Access",
      "Amazon EFS File System",
      "Key Pair for SSH Access",
      "Security Group Configuration"
    ],
    procedure: [
      "To launch the EC2 instance and mount an EFS file system",
      "1. Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/.",
      "2. Choose Launch Instance.",
      "3. In Step 1: Choose an Amazon Machine Image (AMI), find an Amazon Linux 2 AMI at the top of the list and choose Select.",
      "4. In Step 2: Choose an Instance Type, choose Next: Configure Instance Details.",
      "5. In Step 3: Configure Instance Details, provide the following information:",
      "● Leave Number of instances at one.",
      "● Leave Purchasing option at the default setting.",
      "● For Network, choose the entry for the same VPC that you noted when you created your EFS file system in Step 1: Create your Amazon EFS file system.",
      "● For Subnet, choose a default subnet in any Availability Zone.",
      "● For File systems, make sure that the EFS file system that you created in Step 1: Create your Amazon EFS file system is selected. The path shown next to the file system ID is the mount point that the EC2 instance will use, which you can change.",
      "● The User data automatically includes the commands for mounting your Amazon EFS file system.",
      "6. Choose Next: Add Storage.",
      "7. Choose Next: Add Tags.",
      "8. Name your instance and choose Next: Configure Security Group.",
      "9. In Step 6: Configure Security Group, set Assign a security group to Select an existing security group. Choose the default security group to make sure that it can access your EFS file system.",
      "10. Choose Review and Launch.",
      "11. Choose Launch.",
      "12. Select the check box for the key pair that you created, and then choose Launch Instances.",
      "Once the EC2 instance is created and becomes available, it will be mounted to your EFS file system. At this point, you will be able to transfer files to your EFS file system."
    ],
    program: [],
    output: "EC2 Instance has been created and been successfully explored in AWS."
  },
  {
    id: 8,
    name: "Experiment 8: Exploring AWS S3 Bucket Service",
    aim: "To explore the AWS S3 bucket service.",
    components: [
      "AWS Account",
      "Amazon S3 Console Access",
      "Files to upload (e.g., images, HTML files)",
      "Web browser for testing"
    ],
    procedure: [
      "Sign in to the AWS Management console. After sign in, the screen appears is shown below:",
      "Move to the S3 services. After clicking on S3, the screen appears is shown below:",
      "To create an S3 bucket, click on the 'Create bucket'. On clicking the 'Create bucket' button, the screen appears is shown below:",
      "Enter the bucket name which should look like DNS address, and it should be resolvable. A bucket is like a folder that stores the objects. A bucket name should be unique. A bucket name should start with the lowercase letter, must not contain any invalid characters. It should be 3 to 63 characters long.",
      "Click on the 'Create' button. Now, the bucket is created.",
      "We have seen from the above screen that bucket and its objects are not public as by default, all the objects are private.",
      "Now, click on the 'javatpointbucket' to upload a file in this bucket. On clicking, the screen appears is shown below:",
      "Click on the 'Upload' button to add the files to your bucket.",
      "Click on the 'Add files' button.",
      "Add the jtp.jpg file.",
      "Click on the 'upload' button.",
      "From the above screen, we observe that the 'jtp.jpg' has been successfully uploaded to the bucket 'java point'.",
      "Move to the properties of the object 'jtp.jpg' and click on the object URL to run the file appearing on the right side of the screen",
      "● Choose Properties.",
      "● Under Static website hosting, choose Edit.",
      "● Choose Use this bucket to host a website.",
      "● Under Static website hosting, choose Enable.",
      "● In Index document, enter the file name of the index document, typically index.html.",
      "The index document name is case sensitive and must exactly match the file name of the HTML index document that you plan to upload to your S3 bucket. When you configure a bucket for website hosting, you must specify an index document. Amazon S3 returns this index document when requests are made to the root domain or any of the subfolders. For more information, see Configuring an index document.",
      "● To provide your own custom error document for 4XX class errors, in Error document, enter the custom error document file name.",
      "The error document name is case sensitive and must exactly match the file name of the HTML error document that you plan to upload to your S3 bucket. If you don't specify a custom error document and an error occurs, Amazon S3 returns a default HTML error document. For more information, see Configuring a custom error document.",
      "● (Optional) If you want to specify advanced redirection rules, in Redirection rules, enter JSON to describe the rules.",
      "For example, you can conditionally route requests according to specific object key names or prefixes in the request. For more information, see Configure redirection rules to use advanced conditional redirects.",
      "● Choose Save changes.",
      "Amazon S3 enables static website hosting for your bucket. At the bottom of the page, under Static website hosting, you see the website endpoint for your bucket.",
      "● Under Static website hosting, note the Endpoint.",
      "The Endpoint is the Amazon S3 website endpoint for your bucket. After you finish configuring your bucket as a static website, you can use this endpoint to test your website."
    ],
    program: [
      {
        title: "Sample index.html for Static Website Hosting",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My AWS S3 Static Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            color: white;
        }
        .container {
            background: rgba(255, 255, 255, 0.1);
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            text-align: center;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        h1 {
            font-size: 3em;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        p {
            font-size: 1.2em;
            margin-bottom: 30px;
        }
        .image-container {
            margin: 20px 0;
        }
        img {
            max-width: 300px;
            border-radius: 10px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        .footer {
            margin-top: 30px;
            font-size: 0.9em;
            opacity: 0.8;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to My S3 Website!</h1>
        <p>This static website is hosted on Amazon S3</p>

        <div class="image-container">
            <img src="jtp.jpg" alt="Sample Image from S3">
        </div>

        <div class="footer">
            <p>Hosted on AWS S3 | Kongu Engineering College IoT Lab</p>
        </div>
    </div>
</body>
</html>`
      }
    ],
    output: "Exploring S3 and Static Website Hosting on AWS Service has been done successfully."
  },
  {
    id: 9,
    name: "Experiment 9: Exploring AWS Lambda Service",
    aim: "To explore the AWS Lambda service.",
    components: [
      "AWS Account",
      "AWS Lambda Console Access",
      "Amazon CloudWatch Access",
      "Basic programming knowledge (Node.js or Python)"
    ],
    procedure: [
      "To create a Lambda function with the console",
      "1. Open the Functions page of the Lambda console.",
      "2. Choose Create function.",
      "3. Select Use a blueprint.",
      "4.",
      "5. Open the Select blueprint dropdown list and search for Hello world function. Select nodejs or python.",
      "6. Enter a Function name.",
      "7. For Execution role, choose Create a new role with basic Lambda permissions.",
      "Lambda creates an execution role that grants the function permission to upload logs to Amazon CloudWatch. The Lambda function assumes the execution role when you invoke your function, and uses the execution role to create credentials for the AWS SDK and to read data from event sources.",
      "Invoke the function",
      "To invoke the function from the console, create a test event.",
      "1. Choose the Test tab.",
      "2. For Test event action, choose Create new event.",
      "3. For Event name, enter a name for the test event.",
      "4. For Event sharing settings, choose Private.",
      "5. For Template, leave the default hello-world option.",
      "6. In the Event JSON, replace value1 with hello, world! Don't change key1 or the event structure. Example:",
      "{",
      "\"key1\": \"hello, world!\",",
      "\"key2\": \"value2\",",
      "\"key3\": \"value3\"",
      "7. }",
      "8. Choose Save, and then choose Test. Lambda invokes the function on your behalf. The function handler receives and then processes the sample event.",
      "9. Review the Execution result. Under Details, you should see the value that you entered in step 6: \"hello, world!\". The execution result also includes the following information:",
      "● The Summary section shows the key information from the REPORT line in the invocation log.",
      "● The Log output section shows the complete invocation log. Lambda writes all invocation logs to Amazon CloudWatch.",
      "10. Choose Test to invoke the function a few more times and gather additional metrics that you can view in the next step.",
      "11. Choose the Monitor tab. This page shows graphs of the metrics that Lambda sends to CloudWatch."
    ],
    program: [],
    output: "Exploring LAMBDA on AWS Service has been done successfully."
  }
];

export default experiments;