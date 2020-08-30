// Page by Markus Schiffer and Alex Eidt.
// These are plugins, basically global JavaScript functions.

export default (context, inject) => {
  // This function returns true if given a month and year, they are in the
  // current academic year. Otherwise returns false.
  const academicYear = (year, month) => {
    const today = new Date();
    const curr_year = today.getFullYear();
    const curr_month = today.getMonth() + 1;
    if (month >= 9 && curr_month >= 9) { // Article in fall, we are in fall, so anything from last fall is old.
      return curr_year === year;
    } else if (month >= 9) {  // artilce in fall, we are in the next year, so articles from fall previous year are ok.
      return curr_year - 1 === year;
    } else {  // article in non-fall, 
      return year === curr_year;
    }
  }

  // Maps the text representation of months to the numeric counterpart.
  const mapMonth = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12
  };

  // Required for plugins to work.
  inject('academicYear', academicYear);
  inject('mapMonth', mapMonth);
}
