What are the 4 types of streams in node? What does 
each do?

Writable Streams - streams where you can add/write data (fs.createWriteStream)

Readable Streams - streams where you can read data
(fs.createReadStream)

Duplex Streams - streams where you can read and write
data (net.Socket)

Transform Streams - Duplex streams that can change
data as it is written and read (zlib.createDeflate)

/////////////////////////////////////////////////

What are the utility functions within node's stream module?

pipeline(), finished(), Readable.from() and addAbortSignal()

note: There is a promisified version of node's stream APIs

///////////////////////////////////////////////////

What is object mode within a stream?


