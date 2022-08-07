const LinkedinClient = require('linkedin-client');

export async function scraper(username) {
  const client = new LinkedinClient('AQEDASgCMogEk29vAAABgnVMUmIAAAGCmVjWYk0AoTLSafRtzp_b7HXEBTUp7XgrfDY2SeRIMFOOOOnn806tgzJe9CScXz7RxbuwSreY7wtBuXcYbKbIViBa86aeb7UCIPOl4aB2lQ_5MDsHlBxOTcae');
  const url = "https://www.linkedin.com/in/" + username
  const data = await client.fetch(url);
  console.log(data);
};