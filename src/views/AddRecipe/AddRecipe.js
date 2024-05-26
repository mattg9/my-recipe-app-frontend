import { addRecipe } from '@/services/recipeService';

export default {
  name: 'AddRecipe',
  data() {
    return {
      title: '',
      ingredients: '',
      instructions: ''
    };
  },
  methods: {
    async submitRecipe() {
      const recipe = {
        title: this.title,
        ingredients: this.ingredients.split('\n'),
        instructions: this.instructions
      };
      await addRecipe(recipe);
      this.$router.push('/');
    }
  }
};
