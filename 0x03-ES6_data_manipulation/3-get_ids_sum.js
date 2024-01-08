/**
 * Author: Graham S. Paul
 * 3-get_ids_sum.js
 */
export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce((accumulator, each) => accumulator + each.id, 0);
  }
  return [];
}
