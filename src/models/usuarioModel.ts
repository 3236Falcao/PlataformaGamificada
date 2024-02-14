import mongoose, { Document, Schema, Model } from 'mongoose';

// Interface para definir a estrutura do documento do usuário
export interface UsuarioDoc extends Document {
  nome: string;
  idade: number;
  telefone: string;
  score: number;
  desempenho: {
    nivel: number;
    conquistas: string[];
  };
}

// Esquema do modelo do usuário
const usuarioSchema = new Schema<UsuarioDoc>({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  telefone: { type: String },
  score: { type: Number, default: 0 },
  desempenho: {
    nivel: { type: Number, default: 1 },
    conquistas: [{ type: String }],
  },
});

// Definir o modelo do usuário com tratamento de erro
let Usuario : Model<UsuarioDoc> | undefined;;
try {
  Usuario = mongoose.model<UsuarioDoc>('Usuario', usuarioSchema);
} catch (error) {
  console.error('Erro ao definir o modelo do usuário:', error);
}

export default Usuario;