const dns = require('node:dns');
const { hostname } = require('node:os');

// DNS Lookup

// dns.lookup('isekaiscan.com', (err, address, family) => {
//     if(err){
//         throw err
//     }
//     console.log('address: %j family: IPv%s', address, family)
// });

// %j = first variable 
// %s = second variable
//  other letters cause errors

/* All other DNS fxns link to an actual DNS server to do name resolution 

What is name resolution?

What is a DNS server?

dns.lookup uses /etc/hosts files to as config defaults

*/



// dns.resolve4 
// What is the importance of IPv4 addresses?
// What does dns.reverse do? Turn ipv4/6 address to hostname (32.313.221.22 => google.com)
// by reverse query

// dns.resolve4('hulu.com', (error, ipv4) => {
//     if(error){
//         throw error;
//     }
//     console.log(ipv4);
//     ipv4.forEach((address)=>{
//         dns.reverse(address, (err, hostnames) => {
//             if(err){
//                 throw err;
//             }
//             console.log(`reverse query for ${address}: ${JSON.stringify(hostnames)}`)
//         })
//     });
// });

// dns resolver class

const resolver = new dns.Resolver();

// resolver.setServers(['8.8.8.8', '4.4.4.4']);

// resolver.resolve4('hulu.com', (error, ipv4)=>{
//     if(error) throw error;

//     console.log(ipv4);
// });


/* Unsuprisingly, Each resolver instance has its own methods */


// What happens if I set the resolver's address to '0.0.0.0'?


// resolver.setLocalAddress('0.0.0.0')

// Returns my PC's ip address
// console.log(resolver.getServers());


// dns.lookupService

//  Turn IP addresses into there hostnames

// dns.lookupService('104.76.213.98', 22, (err, hostname, protocol) => {
//  if(err) throw err;
// console.log(hostname, protocol);
// });


// dns.resolve

// Turns a hostname (i.e., google.com) into records
// of a certain record type (A === 'IPv4') *See notes for records*

// dns.resolve('hulu.com', 'ANY', (error, records) => {
//     if(error) throw error;

//     console.log(records);
// });

/*
What is important to know here is the resolve
methods are straightforward to understand. Always refer to
node docs when using them and look at the table with the 
resource record types to see which one you need and
which resolve method returns them.
*/


// dns.reverse

// turns an ip address (4 || 6) to many hostname

dns.reverse('23.15.241.72', (error, hostnames)=>{
    if(error) throw error;
    console.log(hostnames);
});

// challenge: implement the async versions of these methods 

