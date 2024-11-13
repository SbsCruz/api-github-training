const {
  filterRepoByStars,
  filterRepoDates,
  getRepoStarsCount,
} = require("../app");

const repoMock = [
  {
    name: "Repo1",
    stargazers_count: 3,
    updated_at: "2022-11-10T03:31:35Z",
  },
  {
    name: "Repo2",
    stargazers_count: 3,
    updated_at: "2024-12-11T01:31:36Z",
  },
  {
    name: "Repo3",
    stargazers_count: 6,
    updated_at: "2020-11-13T03:31:35Z",
  },
  {
    name: "Repo4",
    stargazers_count: 1,
    updated_at: "2018-11-13T03:31:35Z",
  },
];

describe("Tests on filterRepoByStars", () => {
  describe("When an empty array is passed...", () => {
    it("should return an empty array", () => {
      expect(filterRepoByStars(5, [])).toStrictEqual([]);
    });
  });
  describe("When a non-empty array is passed...", () => {
    it("should return the filtered array based on the number of the stargazers", () => {
      expect(filterRepoByStars(5, repoMock)).toStrictEqual([repoMock[2]]);
    });
  });
});

describe("Tests on filterRepoDates", () => {
  it("should return an ordered array based on the updated_at property", () => {
    expect(filterRepoDates(repoMock)).toStrictEqual([
      {
        name: "Repo2",
        stargazers_count: 3,
        updated_at: "2024-12-11T01:31:36Z",
      },
      {
        name: "Repo1",
        stargazers_count: 3,
        updated_at: "2022-11-10T03:31:35Z",
      },
      {
        name: "Repo3",
        stargazers_count: 6,
        updated_at: "2020-11-13T03:31:35Z",
      },
      {
        name: "Repo4",
        stargazers_count: 1,
        updated_at: "2018-11-13T03:31:35Z",
      },
    ]);
  });
});

describe('Test on getRepoStarsCount', () => {
  it('should return a number value ', () => {
    expect(getRepoStarsCount(repoMock)).toEqual(expect.any(Number))
  });
  it('should return a sum based on of the stargaze values of an array', () => {
    expect(getRepoStarsCount(repoMock)).toEqual(13);
  });
});
