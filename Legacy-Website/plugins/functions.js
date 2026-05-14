// Page by Markus Schiffer and Alex Eidt.
// These are plugins, basically global JavaScript functions.

export default (context, inject) => {
  // This function returns true if given a month and year, they are in the
  // current academic year. Otherwise returns false.
  const academicYear = (year, month) => {
    const today = new Date();
    const curr_year = today.getFullYear();
    const curr_month = today.getMonth() + 1;
    // Article in fall, we are in fall, so anything from last fall is old.
    if (month >= 9 && curr_month >= 9) {
      return curr_year === year;
    // Article in fall, we are in the next year, so articles from fall previous year are ok.
    } else if (month >= 9) {
      return curr_year - 1 === year;
    // Article in non-fall, Current month is in the winter, summer, or spring.
    } else if (curr_month < 9) {
      return year === curr_year;
    // Article is in the non-fall, current month is the fall.
    } else {
      return false;
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
