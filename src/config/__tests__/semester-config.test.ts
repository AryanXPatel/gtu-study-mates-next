import { SEMESTERS } from "../semester-config";

describe("Semester Configuration", () => {
  it("should have 8 semesters configured", () => {
    expect(SEMESTERS.length).toBe(8);
  });

  it("should have semesters numbered from 1 to 8", () => {
    const semesterNumbers = SEMESTERS.map((semester) => semester.number);
    expect(semesterNumbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("should follow the color distribution strategy", () => {
    // Semesters 1, 5: Blue
    expect(SEMESTERS[0].glowColor).toBe("blue");
    expect(SEMESTERS[4].glowColor).toBe("blue");

    // Semesters 2, 6: Purple
    expect(SEMESTERS[1].glowColor).toBe("purple");
    expect(SEMESTERS[5].glowColor).toBe("purple");

    // Semesters 3, 7: Green
    expect(SEMESTERS[2].glowColor).toBe("green");
    expect(SEMESTERS[6].glowColor).toBe("green");

    // Semester 4: Red
    expect(SEMESTERS[3].glowColor).toBe("red");

    // Semester 8: Orange
    expect(SEMESTERS[7].glowColor).toBe("orange");
  });

  it("should have unique icons for each semester", () => {
    const iconNames = SEMESTERS.map((semester) => semester.icon.name);
    const uniqueIconNames = [...new Set(iconNames)];
    expect(uniqueIconNames.length).toBe(SEMESTERS.length);
  });

  it("should have valid routes for each semester", () => {
    SEMESTERS.forEach((semester) => {
      expect(semester.route).toBe(`/semester/${semester.number}`);
    });
  });
});
