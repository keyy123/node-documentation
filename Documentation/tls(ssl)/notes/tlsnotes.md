What is TLS/SSL?

protocols (a pair) that rely on public key infrastructure (PKI) to enable secure communication between a client and server. 

Common usage: Each server has its own private key.

How do we generate a RSA private key with 2048 bits using OpenSSL CLI?

 openssl genrsa -out [name].pem [bits]


What is required for all servers using TLS/SSL protocol?

A certificate/public key that links to a private key which are digitally signed by a certificate authority (CA) or the private keys owner (self-signed)

What is the 1st step to getting a certificate?

WE HAVE TO MAKE a Certificate Signing Request(CSR) file.

How do we make a certificate sigining request file with OpenSSL CLI?

openssl req -new -sha256 -key [privatekey.ext] -out [name].pem


What can we do with a CSR file?

We can either send it to a CA (Cert. Authority) or sign it ourselves


How do we sign our CSR ourselves using OpenSSL CLI?

openssl x509 -req -in [certificate.pem] -signkey [privatekey.pem] -out [self-signed-cert.pem]

