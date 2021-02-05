module.exports = {
    format_date: date => {
      const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];

    const d = new Date(date);
    // document.write("The current month is " + monthNames[d.getMonth()]);

    return `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

      // return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    format_plural: (word, amount) => {
        if (amount !== 1) {
          return `${word}s`;
        }

        return word;
    },
    format_url: url => {
        return url
          .replace('http://', '')
          .replace('https://', '')
          .replace('www.', '')
          .split('/')[0]
          .split('?')[0];
    }
}