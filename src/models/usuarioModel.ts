import mongoose, { Document, Schema } from 'mongoose';

// Interface para definir a estrutura do documento do usuário
interface UsuarioDoc extends Document {
  nome: string;
  idade: number;
}

// Esquema do modelo do usuário
const usuarioSchema = new Schema<UsuarioDoc>({
  nome: String,
  idade: Number,
});

// Modelo do usuário usando o esquema
const Usuario = mongoose.model<UsuarioDoc>('Usuario', usuarioSchema);

export default Usuario;
