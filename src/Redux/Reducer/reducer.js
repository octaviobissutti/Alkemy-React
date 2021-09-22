import { GET_BY_ID, GET_BY_NAME, SAVE_TEAM, DELETE_HERO, POWER_STATS_TEAM, RESET_HERO_ACTION, HEIGHT_WEIGHT } from "../Constants/constants";

const initialState = {
  team: [],
  heroes: [],
  loading: false,
  error: "",
  teamError: "",
  getDetails: {},
  powerstats: {
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
  },
  weightTeam: 0,
  heightTeam: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BY_ID:
      return {
        ...state,
        getDetails: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        heroes: action.payload,
      };
    case SAVE_TEAM:
      return {
        ...state,
        team: [...state.team, action.payload],
        powerstats: {
          intelligence: 0,
          strength: 0,
          speed: 0,
          durability: 0,
          power: 0,
          combat: 0,
        },
      };
      case DELETE_HERO:
        return {
          ...state,
          powerstats: {
            intelligence: 0,
            strength: 0,
            speed: 0,
            durability: 0,
            power: 0,
            combat: 0,
          },
          team: [...state.team.filter((hero) => hero.id !== action.payload)],
        };

        case POWER_STATS_TEAM:
            return {
              ...state,
              powerstats: {
                intelligence:
                  state.powerstats.intelligence + Number(action.payload.intelligence),
                strength: state.powerstats.strength + Number(action.payload.strength),
                speed: state.powerstats.speed + Number(action.payload.speed),
                durability:
                  state.powerstats.durability + Number(action.payload.durability),
                power: state.powerstats.power + Number(action.payload.power),
                combat: state.powerstats.combat + Number(action.payload.combat),
              },
            };
            case RESET_HERO_ACTION:
                return { ...initialState };
              case HEIGHT_WEIGHT:
                return {
                  ...state,
                  weightTeam: action.payload.weight.toFixed(2),
                  heightTeam: action.payload.height.toFixed(2),
                };
    default:
      return state;
  }
};

export default rootReducer;
