# Computer Network - TCP segment structure

<table>
  <tr align="center">
    <td colspan = "16">16bits Source port</td>
    <td colspan = "16">16bits Destination port</td>
  </tr>
  <tr align="center">
    <td colspan = "32">32bits sequence number</td>
  </tr>
  <tr align="center">
    <td colspan = "32">32bits Acknowledgment number</td>
  </tr>
  <tr align="center">
    <td colspan = "4">4bits<br>data offset</td>
    <td colspan = "4">6bits reserved</td>
    <td>C<br>W<br>R</td>
    <td>E<br>C<br>E</td>
    <td>U<br>R<br>G</td>
    <td>A<br>C<br>K</td>
    <td>P<br>S<br>H</td>
    <td>R<br>S<br>T</td>
    <td>S<br>Y<br>N</td>
    <td>F<br>I<br>N</td>
    <td colspan= "16">16 window size</td>
  </tr>
  <tr align="center">
    <td colspan = "16">16bits Checksum</td>
    <td colspan = "16">16bits Urgent pointer</td>
  </tr>
  <tr align="center">
    <td colspan = "32">options，up to 40byte</td>
  </tr>
</table>

- [options here](#options)

## Sequence Number

- 32bits sequence number
- if [syn flag](#flags) is set,

## Acknowledgement Number

- 32bits acknowledgement number(ack = )

## Data Offset

- 4bits data offset
- specify the size of TCP header

## Reserved



## Flags

> 8bits

8 Flags

- CWR:
- ECE:
- URG: [Urgent pointer](#urgent-pointer) field is significant
- ACK: Acknowledgment field
  - All packets after the initial SYN packet send by client **should have** this flag set
- PSH:
- RST: Reset the connection
- SYN: Synchronize sequence numbers
  - Connection Initialization
  - Synchronization
- FIN: last packet from sender

## Window Size

> 16bits

- specifies the number of window size units
- that the sender of this segment is currently willing to receive

## checksum

> 16bits

- used for error-checking


## urgent pointer

> 16bits

- used to send urgent data byte

## Options

<table>
    <tr>
        <td>kind(1byte)</td>
        <td>length(1byte)</td>
        <td>info(remain byte)</td>
   </tr>
</table>

- kind can be 0~8
