# NOTES FOR THE OSINT PROJECT

# NOTED IDEA'S FROM DISCORD OSINT CHAT:
1. Possibility to use Google Drive or Github to store and hold all necessary data (videos, images, scripts) etc.
2. Implemenation and usage of IPFS -> (Sync data).
3. NAT / CID with IPFS (possible problem identified), Find a method where CID and IP addresses don't change must be static not dynamic.
4. Set programming language for OSINT project is DART.
5. All pre-determined scripts such as "web-crawlers" and scrapers are to be built in Python for convenience. 
6. Some form of custom database to store and backup data (Google Drive or Git).

7. Design, develop and implement "Public" vs "Developer" mode. -> Everyone should have access to OSINT, but people shouldn't be able to change  or alter the information (malware prevention) etc.

8. Some form of A.I. to locate the information necessary.
9. Setting up and creating nodes to send and control the flow of data on firewalled devices? -> How does the information flow?

# OTHER THOUGHT ABOUT IDEAS FOR OSINT DEVELOPMENT:
1. Mounting the data directly to Google drive as the system is distributed?
2. To answer point 1, if we use a method to mount and store data to cloud storage, maybe could consider "terabox"?

3. Maybe creating own file system to handle the A.I. and other segments of the Program to handle certain processes (back-up, staying online) etc?

4. Peer 2 peer storage to store data on network over IPFS (Ghost_In_The_Machine's idea)?

5. If you want to make a change it sends a request to the node that created the information (or stores it as pending if that node is offline).
    If the creator wants to allow the change they sign it and announce it to the network.
    Otherwise it gets rejected (Ghost_In_The_Machine, NBTX).

6. Combining all different types of programming and scripting languages together with Dart API. (NBTX's idea) - Not only is this logical but also offers flexibility.

# POSSIBLE & IDENTIFIED PROBLEMS WITH OSINT PROJECT:
1. IPFS does not have a constant or static IP address as P2P networking shares between multiple devices, we must find a way to change from "dynamic" to "static". 

2. Identify the best storage system out of Google Drive and GitHub so that we can confirm which is best. (GitHub was choosen as more people have it as developers, but Google Drive is more accessible. Could have both but a bit redundent and less time efficent).
