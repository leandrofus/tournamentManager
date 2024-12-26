import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  fullName: string;
  email: string;
  password: string;
  userType: string;
  dateOfBirth: Date;
  nationality: string;
  avatarUrl?: string;
  bio?: string;
  roles: string[];
  preferredGames: string[];
  stats: {
    totalGamesPlayed: number;
    totalWins: number;
    totalLosses: number;
    winRate: number;
    achievements: {
      title: string;
      date: Date;
      description: string;
    }[];
  };
  tournamentHistory: {
    tournamentName: string;
    game: string;
    role: string;
    date: Date;
    position: string;
  }[];
  socialLinks: {
    twitter?: string;
    twitch?: string;
    discord?: string;
    other?: string;
  };
  preferences: {
    playStyle: string;
    availability: string[];
    lookingForTeam: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true, trim: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /^\S+@\S+\.\S+$/ },
  password: { type: String, required: true },
  userType: { type: String, required: true, enum: ["admin", "user","player","coach","manager","organizer","spectator"] },
  dateOfBirth: { type: Date, required: true },
  nationality: { type: String, required: true },
  avatarUrl: { type: String, default: '' },
  bio: { type: String, maxlength: 500 },
  roles: [{ type: String, enum: ["Goalkeeper", "Defender", "Midfielder", "Forward", "Guard", "Forward", "Center", "Top", "Jungle", "Mid", "Bot", "Support", "Terran", "Zerg", "Protoss", "Inca", "Franks", "Britons", "Aztecs"] }],
  preferredGames: [{ type: String, enum: ["Football", "Basketball", "Tennis", "Rugby", "League of Legends", "StarCraft 2", "Age of Empires 2"] }],
  stats: {
    totalGamesPlayed: { type: Number, default: 0 },
    totalWins: { type: Number, default: 0 },
    totalLosses: { type: Number, default: 0 },
    winRate: { type: Number, default: 0 },
    achievements: [{ title: String, date: Date, description: String }]
  },
  tournamentHistory: [{
    tournamentName: String,
    game: { type: String, enum: ["Football", "Basketball", "Tennis", "Rugby", "League of Legends", "StarCraft 2", "Age of Empires 2"] },
    role: String,
    date: Date,
    position: String
  }],
  socialLinks: {
    twitter: String,
    twitch: String,
    discord: String,
    other: String
  },
  preferences: {
    playStyle: { type: String, enum: ["Aggressive", "Defensive", "Balanced"] },
    availability: { type: [String] },
    lookingForTeam: { type: Boolean, default: false }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IUser>('User', UserSchema);