process.stdout.write('Welcome to Holberton School, what is your name?\n');

/**
 * To show/display the message
 * "Welcome to Holberton School, what is your name?"
 * @author Graham S. Paul < gpaul988@gmail.com>
 */
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});