import { defineStore } from 'pinia';

interface User {
  name: string;
  email: string;
  country: string;
  photo: string;
  gender: string;
  age: number;
}

interface SortOrder {
  value: string;
  label: string;
}

interface State {
  users: User[];
  loading: boolean;
  search: string;
  sortOrder: SortOrder;
  filteredUsers: User[];
}

export const useUserStore = defineStore('users', {
  state: ():State => ({
    users: [],
    loading: false,
    search: '',
    sortOrder: { value: '', label: 'None' },
    filteredUsers: [],
  }),
  getters: {
    getFilteredUsers: (state) => state.filteredUsers,
  },
  actions: {
    setUsers(users: User[]) {
      this.users = users;
      this.filteredUsers = users;
    },
    setLoading(loading: boolean) {
      this.loading = loading;
    },
    filterUsers(search: string) {
      const val = new RegExp(search.toLowerCase(), 'g');
      this.filteredUsers = this.users.filter((user) => {
        if (user.country.toLowerCase().match(val) != null) return true;
        return false;
      });
      this.filteredUsers.sort((a, b) => a.country.localeCompare(b.country));
    },
    sortUsers(sortOrder: SortOrder) {
      let sortedUsers = this.users;
      const { value } = sortOrder;
      switch (value) {
        case 'desc':
          sortedUsers = this.users.sort((a: User, b: User) => {
            return b.age - a.age;
          });
          break;
        case 'asc':
          sortedUsers = this.users.sort((a: User, b: User) => {
            return a.age - b.age;
          });
          break;
        case 'under40':
          sortedUsers = this.users
            .filter((user: User) => user.age < 40)
            .sort((a: User, b: User) => a.age - b.age);
          break;
        case 'over40':
          sortedUsers = this.users
            .filter((user: User) => user.age > 40)
            .sort((a: User, b: User) => a.age - b.age);
          break;
        case 'female':
          sortedUsers = this.users.filter((user: User) => user.gender === 'female');
          break;
        case 'male':
          sortedUsers = this.users.filter((user: User) => user.gender === 'male');
          break;
        default:
          sortedUsers = this.users;
      }
      this.filteredUsers = sortedUsers;
    },
  },
});