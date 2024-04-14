# systemd Persistence

### Description

This method relies on the `systemd` service manager to run the payload as the root user. Compared to normal `systemd` usage, this method will attempt to mask itself as a legitimate service that are common on most distributions but may be missing on the target system.

Services defined in Nekrosis' [systemd.py](https://github.com/Nekrosis-ISS-Capstone/Nekrosis/blob/main/nekrosis/support/linux_utilities/systemd.py):

::: details Services and Descriptions

| Service | Description |
| :------ | :---------- |
| acpid | Advanced Configuration and Power Interface event daemon |
| anacron | Anacron is like cron, but it does not assume that the machine is running continuously. Hence, it can be used on machines that aren’t running 24 hours a day, to control daily, weekly, and monthly jobs that are usually controlled by cron. |
| apmd | Advanced Power Management Subsystem (old system). If the server is capable of ACPI support, disable this service |
| auditd | The Linux Auditing System |
| atd | atd runs jobs queued by at |
| autofs | The automount(8) program is used to manage mount points for autofs, the inlined Linux automounter. You can mount NFS, USB, DVD/CD, and CIFS via /etc/fstab. |
| avahi-daemon | The Avahi mDNS/DNS-SD daemon implementing Apple’s ZeroConf architecture (also known as “Rendezvous” or “Bonjour”). |
| bluetooth | Bluetooth services for service discovery, authentication, Human Interface Devices (hidd), etc |
| cpuspeed | This service monitors the system’s idle percentage and reduces or raises the CPUs’ clock speeds and voltages accordingly to minimize power consumption when idle and maximize performance when needed |
| crond | Service to execute scheduled commands via crond daemon. |
| cups | Common unix printing system service |
| dc_client | Startup script for the Distcache SSL Session Cache Client and server proxy. Disable if you do not need cache proxy. |
| dnsmasq | the DNS caching server. Enable if your ISP or remote DNS caching server is pretty slow. |
| dkmdkms_autoinstallers | dkms is a framework which allows kernel modules to be dynamically built for each kernel on your system in a simplified and organized fashion. Disable if possible |
| firstboot | RHLE specific service. It does a few configuration following successful installation of the operating system. |
| gpm | A cut and paste utility and mouse server service for virtual consoles. |
| haldaemon | This service is used for collecting and maintaing information about hardware from several sources. This is only used for X and desktop apps. Disable it on servers. |
| hplip | A service for non-PostScript HP printer. Disable it on servers. |
| irda | IrDA(TM) (Infrared Data Association) is an industry standard for wireless, infrared communication between devices. IrDA speeds range from 9600 bps to 4 Mbps, and IrDA can be used by many modern devices including laptops, LAN adapters, PDAs, printers, and mobile phones. Disable if possible |
| iscsi | iscsi service logs into iSCSI targets needed at system startup (i.e. iscsi client). iscsid will start and stop iSCSI daemon. Use this if you’ve iscsi based storage. Disable if possible |
| iptables | IPv4 and IPv6 firewall service. |
| irqbalance | The irqbalance service will distribute interrupts across the cpus on a multiprocessor system with the purpose of spreading the load. |
| isdn | Provides the Internet connectivity using an ISDN modem. Disable if not using an ISDN modem. |
| kdump | Kernel crash dump analyzer. This service is useful for kernel hackers and device driver development or testing new kernel feature. Dsable the service on production boxes. |
| kudzu | RHEL specific hardware detection service. This is required on desktop or laptop where end users can add a new hardware but not on servers. |
| lm_sensors | lm_sensors is used for monitoring motherboard sensor values. |
| lvm2-monitor | Starts and stops dmeventd monitoring for lvm2. If you are not using LVM2 (Linux volume manager) based storage disable it. |
| mcstrans | Starts the SELinux Context Translation System daemon. This is site specific SELinux requirements. Disable if possible |
| mdmonitor | software RAID monitoring and management service. If you are not using software RAID disable it. This is not required for hardware RAID setup as they comes with their own programs. Disable if possible |
| messagebus | This service broadcasts notifications of system events and other messages (D-bus). Turn it on for bluetooth, X Windows and desktop systems. |
| microcode_ctl | Script to apply cpu microcode for Intel IA32 processor. If you are not using Intel IA32 processor disable it. |
| netfs | Mount and configure Linux network network filesystems (NFS). If you are not using NFS client/server technology disable it. |
| network | A service to activates/deactivates all network interfaces configured to start at boot time. |
| pcscd | The PC/SC smart card sevice is a resource manager for the PC/SC lite and Musclecard frameworks. It coordinatescommunications with smart card readers, smart cards, and cryptographic tokens that are connected to the system.If Smart Cards are not in use on the system, disable this service: |
| readahead_early | This sevice provide one-time caching of files belonging to a few boot services. It does not provide any boosting. Just disable it. |
| readahead_later | This sevice provide one-time caching of files belonging to a few boot services. It does not provide any boosting. Just disable it. |
| restorecond | This service restores the correct security context for SELinux. |
| rhnsd | This service handles the task of connecting periodically to the RHN servers to check for updates, notifications and perform system monitoring tasks according to the service level that your server is subscribed for. Disable this service and use yum-updatesd service. |
| sendmail | Use to start sendmail server. |
| smartd | Self Monitoring and Reporting Technology (SMART) Daemon for hard disks. |
| setroubleshoot | This service starts the SELinux Troubleshooting daemon. It will send notification tothe desktop user of SELinux access denied messages in a user-friendly fashion. |
| sshd | The openssh server. If you need remote login enable it. You must enable this on all servers so that you can login and configure everything. |
| syslog | Syslog is the facility by which many other Linux daemons use to log messages to various system log files. It is a good idea to always run syslog. |
| xfs | X Windows font server. Disable it on servers. |
| yum-updatesd | Update notification daemon for system packages. |

:::

### Available Method

| Method                   | Requires      | Runs As      |
|:-------------------------|:--------------|:-------------|
| `SystemdService`         | Root          | Root         |

### Demo:

#### - systemd Persistence

::: code-group

```shell [Command Line]
nekrosis --payload /path/to/payload --method "SystemdService"
```

```python [Python API]
from nekrosis import Nekrosis

nekrosis_obj = Nekrosis(
  payload="/path/to/malware",
  custom_method="SystemdService"
)
nekrosis_obj.install()
```

:::


![](/public/Linux%20Persistence%20Methods/systemd.png)