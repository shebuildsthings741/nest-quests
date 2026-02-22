import { Family, Child, Category, PendingApproval } from "@/types/quest";

const healthCategory = (childAge: number): Category => ({
  id: "health",
  name: "Health",
  icon: "Heart",
  color: "rose",
  levels: [
    {
      id: "health-l1",
      number: 1,
      title: "Body Basics",
      objectives: [
        {
          id: "h3",
          title: "Body Care Routine",
          description: "Build healthy hygiene and self-care habits",
          status: childAge >= 2 ? "in_progress" : "locked",
          categoryId: "health",
          points: 60,
          categoryContributions: ["health"],
          subtasks: [
            { id: "h3s1", title: "Brush teeth independently", status: childAge >= 3 ? "in_progress" : "locked", points: 15, attemptPoints: 4, categoryContributions: ["health"] },
            { id: "h3s2", title: "Wash hands before meals", status: childAge >= 2 ? "complete" : "locked", points: 10, attemptPoints: 0, categoryContributions: ["health"] },
            { id: "h3s3", title: "Pick out clothes for the day", status: childAge >= 3 ? "in_progress" : "locked", points: 15, attemptPoints: 2, categoryContributions: ["health", "creativity"] },
            { id: "h3s4", title: "Take a bath with minimal help", status: "locked", points: 20, attemptPoints: 0, categoryContributions: ["health"] },
          ],
        },
        {
          id: "h2",
          title: "Healthy Eating Basics",
          description: "Learn about food groups and making healthy choices",
          status: childAge >= 3 ? "in_progress" : "locked",
          categoryId: "health",
          points: 40,
          categoryContributions: ["health", "life_skills"],
          subtasks: [
            { id: "h2s1", title: "Try 3 new vegetables", status: childAge >= 3 ? "complete" : "locked", points: 10, attemptPoints: 3, categoryContributions: ["health"] },
            { id: "h2s2", title: "Help wash fruits", status: childAge >= 3 ? "in_progress" : "locked", points: 10, attemptPoints: 0, categoryContributions: ["health", "life_skills"] },
            { id: "h2s3", title: "Learn about food groups", status: "locked", points: 20, attemptPoints: 0, categoryContributions: ["health", "knowledge"] },
          ],
        },
      ],
    },
    {
      id: "health-l2",
      number: 2,
      title: "Heart & Mind",
      objectives: [
        {
          id: "h1",
          title: "Understand Feelings",
          description: "Learn to identify and express emotions in healthy ways",
          status: childAge >= 3 ? "in_progress" : "locked",
          categoryId: "health",
          points: 50,
          categoryContributions: ["health", "relationships"],
          subtasks: [
            { id: "h1s1", title: "Name 5 emotions", status: childAge >= 3 ? "complete" : "locked", points: 10, attemptPoints: 2, categoryContributions: ["health"] },
            { id: "h1s2", title: "Draw how you feel today", status: childAge >= 3 ? "complete" : "locked", points: 10, attemptPoints: 0, categoryContributions: ["health", "creativity"] },
            { id: "h1s3", title: "Practice deep breaths when upset", status: childAge >= 3 ? "in_progress" : "locked", points: 15, attemptPoints: 5, categoryContributions: ["health"] },
            { id: "h1s4", title: "Use words instead of crying", status: childAge >= 3 ? "pending_approval" : "locked", points: 15, attemptPoints: 8, categoryContributions: ["health", "relationships"] },
          ],
        },
      ],
    },
  ],
});

const financialCategory = (childAge: number): Category => ({
  id: "financial",
  name: "Financial",
  icon: "Coins",
  color: "amber",
  levels: [
    {
      id: "fin-l1",
      number: 1,
      title: "Money Discovery",
      objectives: [
        {
          id: "f1",
          title: "Understand Money Basics",
          description: "Learn what money is and how it's used",
          status: childAge >= 3 ? "in_progress" : "locked",
          categoryId: "financial",
          points: 40,
          categoryContributions: ["financial", "knowledge"],
          subtasks: [
            { id: "f1s1", title: "Identify coins by name", status: childAge >= 3 ? "in_progress" : "locked", points: 10, attemptPoints: 3, categoryContributions: ["financial"] },
            { id: "f1s2", title: "Play store with pretend money", status: childAge >= 3 ? "complete" : "locked", points: 15, attemptPoints: 0, categoryContributions: ["financial", "creativity"] },
            { id: "f1s3", title: "Understand saving vs spending", status: "locked", points: 15, attemptPoints: 0, categoryContributions: ["financial"] },
          ],
        },
      ],
    },
    {
      id: "fin-l2",
      number: 2,
      title: "Saving & Goals",
      objectives: [
        {
          id: "f2",
          title: "First Savings Goal",
          description: "Set and work toward a savings goal",
          status: "locked",
          categoryId: "financial",
          points: 50,
          categoryContributions: ["financial"],
          subtasks: [
            { id: "f2s1", title: "Choose something to save for", status: "locked", points: 10, attemptPoints: 0, categoryContributions: ["financial"] },
            { id: "f2s2", title: "Decorate a piggy bank", status: "locked", points: 10, attemptPoints: 0, categoryContributions: ["financial", "creativity"] },
            { id: "f2s3", title: "Add coins weekly for a month", status: "locked", points: 20, attemptPoints: 0, categoryContributions: ["financial"] },
            { id: "f2s4", title: "Count total savings", status: "locked", points: 10, attemptPoints: 0, categoryContributions: ["financial", "knowledge"] },
          ],
        },
      ],
    },
  ],
});

const spiritualCategory = (childAge: number): Category => ({
  id: "spiritual",
  name: "Spiritual",
  icon: "Sparkles",
  color: "violet",
  levels: [
    {
      id: "spi-l1",
      number: 1,
      title: "Grateful Heart",
      objectives: [
        {
          id: "sp1",
          title: "Gratitude Practice",
          description: "Develop a habit of noticing and expressing gratitude",
          status: childAge >= 2 ? "in_progress" : "locked",
          categoryId: "spiritual",
          points: 40,
          categoryContributions: ["spiritual", "relationships"],
          subtasks: [
            { id: "sp1s1", title: "Say thank you at meals", status: childAge >= 2 ? "complete" : "locked", points: 10, attemptPoints: 0, categoryContributions: ["spiritual"] },
            { id: "sp1s2", title: "Name one good thing each day", status: childAge >= 3 ? "in_progress" : "locked", points: 15, attemptPoints: 4, categoryContributions: ["spiritual"] },
            { id: "sp1s3", title: "Draw a gratitude picture", status: childAge >= 3 ? "pending_approval" : "locked", points: 15, attemptPoints: 0, categoryContributions: ["spiritual", "creativity"] },
          ],
        },
      ],
    },
    {
      id: "spi-l2",
      number: 2,
      title: "Inner Peace",
      objectives: [
        {
          id: "sp2",
          title: "Quiet Time",
          description: "Learn to enjoy moments of stillness and reflection",
          status: "locked",
          categoryId: "spiritual",
          points: 35,
          categoryContributions: ["spiritual", "health"],
          subtasks: [
            { id: "sp2s1", title: "Sit still for 1 minute", status: "locked", points: 10, attemptPoints: 0, categoryContributions: ["spiritual", "health"] },
            { id: "sp2s2", title: "Listen to calming music together", status: "locked", points: 10, attemptPoints: 0, categoryContributions: ["spiritual"] },
            { id: "sp2s3", title: "Watch a sunrise or sunset", status: "locked", points: 15, attemptPoints: 0, categoryContributions: ["spiritual"] },
          ],
        },
      ],
    },
  ],
});

const relationshipsCategory = (childAge: number): Category => ({
  id: "relationships",
  name: "Relationships",
  icon: "Users",
  color: "sky",
  levels: [
    {
      id: "rel-l1",
      number: 1,
      title: "First Friends",
      objectives: [
        {
          id: "r1",
          title: "Making Friends",
          description: "Learn foundational social skills for building friendships",
          status: childAge >= 2 ? "in_progress" : "locked",
          categoryId: "relationships",
          points: 50,
          categoryContributions: ["relationships"],
          subtasks: [
            { id: "r1s1", title: "Share a toy with a friend", status: childAge >= 3 ? "complete" : "locked", points: 10, attemptPoints: 2, categoryContributions: ["relationships"] },
            { id: "r1s2", title: "Say hi to someone new", status: childAge >= 3 ? "complete" : "locked", points: 10, attemptPoints: 0, categoryContributions: ["relationships"] },
            { id: "r1s3", title: "Take turns in a game", status: childAge >= 3 ? "in_progress" : "locked", points: 15, attemptPoints: 5, categoryContributions: ["relationships"] },
            { id: "r1s4", title: "Comfort a friend who is sad", status: "locked", points: 15, attemptPoints: 0, categoryContributions: ["relationships", "spiritual"] },
          ],
        },
      ],
    },
    {
      id: "rel-l2",
      number: 2,
      title: "Family Ties",
      objectives: [
        {
          id: "r2",
          title: "Family Bonds",
          description: "Strengthen connections within the family",
          status: childAge >= 1 ? "in_progress" : "locked",
          categoryId: "relationships",
          points: 45,
          categoryContributions: ["relationships", "spiritual"],
          subtasks: [
            { id: "r2s1", title: "Help a sibling", status: childAge >= 3 ? "in_progress" : "locked", points: 15, attemptPoints: 3, categoryContributions: ["relationships"] },
            { id: "r2s2", title: "Say 'I love you' unprompted", status: childAge >= 2 ? "complete" : "locked", points: 10, attemptPoints: 0, categoryContributions: ["relationships"] },
            { id: "r2s3", title: "Participate in family game night", status: childAge >= 3 ? "pending_approval" : "locked", points: 20, attemptPoints: 0, categoryContributions: ["relationships", "creativity"] },
          ],
        },
      ],
    },
  ],
});

const creativityCategory = (childAge: number): Category => ({
  id: "creativity",
  name: "Creativity",
  icon: "Palette",
  color: "amber",
  levels: [
    {
      id: "cre-l1",
      number: 1,
      title: "Art Explorer",
      objectives: [
        {
          id: "c1",
          title: "Art Explorer",
          description: "Discover different forms of creative expression",
          status: childAge >= 2 ? "in_progress" : "locked",
          categoryId: "creativity",
          points: 50,
          categoryContributions: ["creativity"],
          subtasks: [
            { id: "c1s1", title: "Finger paint a picture", status: childAge >= 2 ? "complete" : "locked", points: 10, attemptPoints: 0, categoryContributions: ["creativity"] },
            { id: "c1s2", title: "Build with blocks or clay", status: childAge >= 2 ? "complete" : "locked", points: 10, attemptPoints: 0, categoryContributions: ["creativity"] },
            { id: "c1s3", title: "Make up a song", status: childAge >= 3 ? "in_progress" : "locked", points: 15, attemptPoints: 2, categoryContributions: ["creativity"] },
            { id: "c1s4", title: "Tell an original story", status: "locked", points: 15, attemptPoints: 0, categoryContributions: ["creativity", "knowledge"] },
          ],
        },
      ],
    },
    {
      id: "cre-l2",
      number: 2,
      title: "Imagination World",
      objectives: [
        {
          id: "c2",
          title: "Imagination Play",
          description: "Use imagination to create new worlds and scenarios",
          status: childAge >= 2 ? "in_progress" : "locked",
          categoryId: "creativity",
          points: 35,
          categoryContributions: ["creativity", "relationships"],
          subtasks: [
            { id: "c2s1", title: "Dress up and role-play", status: childAge >= 2 ? "complete" : "locked", points: 10, attemptPoints: 0, categoryContributions: ["creativity"] },
            { id: "c2s2", title: "Build a blanket fort", status: childAge >= 3 ? "complete" : "locked", points: 10, attemptPoints: 0, categoryContributions: ["creativity", "life_skills"] },
            { id: "c2s3", title: "Invent an imaginary friend or pet", status: childAge >= 3 ? "in_progress" : "locked", points: 15, attemptPoints: 0, categoryContributions: ["creativity"] },
          ],
        },
      ],
    },
  ],
});

const knowledgeCategory = (childAge: number): Category => ({
  id: "knowledge",
  name: "Knowledge",
  icon: "BookOpen",
  color: "forest",
  levels: [
    {
      id: "know-l1",
      number: 1,
      title: "Curious Beginner",
      objectives: [
        {
          id: "k1",
          title: "Love of Reading",
          description: "Build a foundation for lifelong learning through books",
          status: childAge >= 1 ? "in_progress" : "locked",
          categoryId: "knowledge",
          points: 50,
          categoryContributions: ["knowledge"],
          subtasks: [
            { id: "k1s1", title: "Read together every night for a week", status: childAge >= 2 ? "complete" : "locked", points: 15, attemptPoints: 0, categoryContributions: ["knowledge", "relationships"] },
            { id: "k1s2", title: "Pick a book at the library", status: childAge >= 3 ? "complete" : "locked", points: 10, attemptPoints: 0, categoryContributions: ["knowledge"] },
            { id: "k1s3", title: "Retell a story in own words", status: childAge >= 3 ? "in_progress" : "locked", points: 15, attemptPoints: 3, categoryContributions: ["knowledge", "creativity"] },
            { id: "k1s4", title: "Recognize 10 letters", status: childAge >= 3 ? "in_progress" : "locked", points: 10, attemptPoints: 4, categoryContributions: ["knowledge"] },
          ],
        },
      ],
    },
    {
      id: "know-l2",
      number: 2,
      title: "World Explorer",
      objectives: [
        {
          id: "k2",
          title: "Nature Explorer",
          description: "Discover the natural world through observation and curiosity",
          status: childAge >= 2 ? "in_progress" : "locked",
          categoryId: "knowledge",
          points: 40,
          categoryContributions: ["knowledge", "spiritual"],
          subtasks: [
            { id: "k2s1", title: "Name 5 animals", status: childAge >= 2 ? "complete" : "locked", points: 10, attemptPoints: 0, categoryContributions: ["knowledge"] },
            { id: "k2s2", title: "Plant a seed and watch it grow", status: childAge >= 3 ? "pending_approval" : "locked", points: 15, attemptPoints: 0, categoryContributions: ["knowledge", "spiritual"] },
            { id: "k2s3", title: "Go on a nature scavenger hunt", status: "locked", points: 15, attemptPoints: 0, categoryContributions: ["knowledge", "health"] },
          ],
        },
      ],
    },
  ],
});

const lifeSkillsCategory = (childAge: number): Category => ({
  id: "life_skills",
  name: "Life Skills",
  icon: "Home",
  color: "earth",
  levels: [
    {
      id: "ls-l1",
      number: 1,
      title: "Helper",
      objectives: [
        {
          id: "ls2",
          title: "Tidy Up Champion",
          description: "Learn to keep shared spaces clean and organized",
          status: childAge >= 2 ? "in_progress" : "locked",
          categoryId: "life_skills",
          points: 45,
          categoryContributions: ["life_skills"],
          subtasks: [
            { id: "ls2s1", title: "Put toys back after playing", status: childAge >= 2 ? "in_progress" : "locked", points: 10, attemptPoints: 3, categoryContributions: ["life_skills"] },
            { id: "ls2s2", title: "Make bed with help", status: childAge >= 3 ? "pending_approval" : "locked", points: 15, attemptPoints: 0, categoryContributions: ["life_skills"] },
            { id: "ls2s3", title: "Clear own plate after meals", status: childAge >= 3 ? "in_progress" : "locked", points: 10, attemptPoints: 2, categoryContributions: ["life_skills"] },
            { id: "ls2s4", title: "Sort laundry by color", status: "locked", points: 10, attemptPoints: 0, categoryContributions: ["life_skills"] },
          ],
        },
        {
          id: "ls3",
          title: "Getting Dressed",
          description: "Master the art of choosing and putting on clothes",
          status: childAge >= 2 ? "in_progress" : "locked",
          categoryId: "life_skills",
          points: 35,
          categoryContributions: ["life_skills"],
          subtasks: [
            { id: "ls3s1", title: "Put on shoes independently", status: childAge >= 2 ? "complete" : "locked", points: 10, attemptPoints: 2, categoryContributions: ["life_skills"] },
            { id: "ls3s2", title: "Button a shirt", status: childAge >= 3 ? "in_progress" : "locked", points: 15, attemptPoints: 6, categoryContributions: ["life_skills"] },
            { id: "ls3s3", title: "Choose weather-appropriate outfit", status: "locked", points: 10, attemptPoints: 0, categoryContributions: ["life_skills", "knowledge"] },
          ],
        },
      ],
    },
    {
      id: "ls-l2",
      number: 2,
      title: "Kitchen Apprentice",
      objectives: [
        {
          id: "ls1",
          title: "Cook a Family Dinner",
          description: "Learn the basics of preparing a meal for the family",
          status: childAge >= 3 ? "in_progress" : "locked",
          categoryId: "life_skills",
          points: 80,
          categoryContributions: ["life_skills", "health", "relationships"],
          subtasks: [
            { id: "ls1s1", title: "Recipe selection", status: childAge >= 3 ? "complete" : "locked", points: 10, attemptPoints: 0, categoryContributions: ["life_skills"] },
            { id: "ls1s2", title: "Grocery shopping", status: childAge >= 3 ? "complete" : "locked", points: 15, attemptPoints: 0, categoryContributions: ["life_skills", "financial"] },
            { id: "ls1s3", title: "Prepping ingredients", status: childAge >= 3 ? "in_progress" : "locked", points: 15, attemptPoints: 4, categoryContributions: ["life_skills", "health"] },
            { id: "ls1s4", title: "Knife skills", status: "locked", points: 20, attemptPoints: 0, categoryContributions: ["life_skills"] },
            { id: "ls1s5", title: "Own the veggie prep", status: "locked", points: 20, attemptPoints: 0, categoryContributions: ["life_skills", "health"] },
          ],
        },
      ],
    },
  ],
});

const createChild = (name: string, age: number, id: string, avatar: string): Child => {
  const categories = [
    healthCategory(age),
    financialCategory(age),
    spiritualCategory(age),
    relationshipsCategory(age),
    creativityCategory(age),
    knowledgeCategory(age),
    lifeSkillsCategory(age),
  ];

  let totalPoints = 0;
  categories.forEach((cat) =>
    cat.levels.forEach((lvl) =>
      lvl.objectives.forEach((obj) =>
        obj.subtasks.forEach((st) => {
          if (st.status === "complete") totalPoints += st.points;
          totalPoints += st.attemptPoints;
        })
      )
    )
  );

  return {
    id,
    name,
    age,
    avatar,
    totalPoints,
    level: Math.floor(totalPoints / 50) + 1,
    streak: name === "Primrose" ? 5 : 2,
    categories,
  };
};

export const sampleFamily: Family = {
  id: "fam1",
  name: "The Calaiaros",
  children: [
    createChild("Primrose", 3, "child1", "🌸"),
    createChild("Pomellina", 1, "child2", "🍎"),
  ],
};

export const getPendingApprovals = (family: Family): PendingApproval[] => {
  const approvals: PendingApproval[] = [];
  family.children.forEach((child) => {
    child.categories.forEach((cat) => {
      cat.levels.forEach((lvl) => {
        lvl.objectives.forEach((obj) => {
          obj.subtasks.forEach((st) => {
            if (st.status === "pending_approval") {
              approvals.push({
                childId: child.id,
                childName: child.name,
                objectiveTitle: obj.title,
                subtaskTitle: st.title,
                subtaskId: st.id,
                categoryName: cat.name,
                submittedAt: "2 hours ago",
              });
            }
          });
        });
      });
    });
  });
  return approvals;
};
