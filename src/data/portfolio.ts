import {
  Bot,
  BrainCircuit,
  Clapperboard,
  Code2,
  Compass,
  Database,
  Eye,
  Rocket,
  Shirt,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

export const profile = {
  name: 'Fatima Farooq',
  initials: 'FF',
  title: 'AI Engineer',
  degree: 'BS Artificial Intelligence',
  institution: 'University of Management and Technology (UMT)',
  location: 'Lahore, Pakistan',
  email: 'fatimafarooq24k@gmail.com',
  phone: '+92-317-8368606',
  github: 'https://github.com/fatimafarooq24k',
  linkedin: 'https://linkedin.com/in/fatimah-farooq',
  tagline:
    'I turn machine learning models into tools people can actually use, from document question answering to a full AI styling assistant.',
  intro:
    'I enjoy the whole journey of a model: messy data goes in, a trained and measured model comes out, and then it becomes something someone can click and use. My degree in Artificial Intelligence from UMT gave me the foundations, and my hands-on work has focused on NLP, computer vision and LLM applications.',
  followUp:
    'I care as much about evaluation as training. Before I trust a model I check it with accuracy, recall, F1 and ROC analysis, then wrap it in FastAPI, Streamlit or Gradio so the results are easy to act on. I am looking for a team where I can work on real problems and learn from experienced engineers.',
  focus: ['NLP', 'Computer Vision', 'LLMs & RAG', 'Model Evaluation', 'Full-stack AI apps'],
  lookingFor:
    'Open to AI engineering roles where I can take models from research into products people rely on.',
};

export interface PipelineStage {
  name: string;
  summary: string;
  tools: string[];
}

export const pipelineStages: PipelineStage[] = [
  {
    name: 'Data',
    summary: 'Collect, clean and structure raw text, images and video transcripts so models have something solid to learn from.',
    tools: ['Pandas', 'NumPy', 'Whisper / WhisperX', 'OpenCV', 'Matplotlib', 'Kaggle'],
  },
  {
    name: 'Train',
    summary: 'Build and fine-tune models for classification, segmentation, summarization and retrieval.',
    tools: ['PyTorch', 'TensorFlow / Keras', 'Scikit-learn', 'CNNs', 'Transfer learning', 'BART', 'T5', 'CLIP', 'SAM'],
  },
  {
    name: 'Retrieve',
    summary: 'Ground language models in real documents with embeddings, vector search and reranking.',
    tools: ['FAISS (HNSW)', 'SentenceTransformers', 'Cross-encoder reranking', 'RAG pipelines', 'Groq LLM APIs'],
  },
  {
    name: 'Evaluate & ship',
    summary: 'Measure results with accuracy, recall, F1 and ROC, then serve the model through an API or interface.',
    tools: ['Accuracy / recall / F1', 'ROC analysis', 'FastAPI', 'Streamlit', 'Gradio', 'Docker', 'React'],
  },
];

export const education = {
  degree: 'BS Artificial Intelligence',
  institution: 'University of Management and Technology (UMT)',
  location: 'Lahore, Pakistan',
};

export interface SkillGroup {
  label: string;
  note: string;
  icon: LucideIcon;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    note: 'Python is my daily driver, with C++ and SQL for lower-level and data work.',
    icon: Code2,
    items: ['Python', 'C++', 'SQL'],
  },
  {
    label: 'Deep learning',
    note: 'Training and evaluating models end to end, from CNNs to fine-tuned transformers.',
    icon: BrainCircuit,
    items: ['PyTorch', 'TensorFlow / Keras', 'Scikit-learn', 'CNNs', 'Transfer learning'],
  },
  {
    label: 'LLMs & retrieval',
    note: 'Grounding language models in documents so answers stay accurate and cite their sources.',
    icon: Sparkles,
    items: ['RAG pipelines', 'FAISS (HNSW)', 'SentenceTransformers', 'Cross-encoder reranking', 'Prompt engineering', 'Groq LLM APIs', 'Whisper / WhisperX', 'BART', 'T5'],
  },
  {
    label: 'Computer vision',
    note: 'Segmenting and classifying images and live video for interactive experiences.',
    icon: Eye,
    items: ['OpenCV', 'MediaPipe', 'CLIP', 'Segment Anything (SAM)'],
  },
  {
    label: 'Data & workflow',
    note: 'Preparing data and keeping work organized and reproducible.',
    icon: Database,
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Git / GitHub', 'Google Colab', 'Kaggle'],
  },
  {
    label: 'Apps & deployment',
    note: 'Turning models into APIs and interfaces people can use without touching code.',
    icon: Rocket,
    items: ['FastAPI', 'Streamlit', 'Gradio', 'Docker', 'React'],
  },
];

export interface Project {
  title: string;
  tagline: string;
  problem: string;
  built: string[];
  outcome: string;
  stack: string[];
  icon: LucideIcon;
}

export const projects: Project[] = [
  {
    title: 'PDF Q&A RAG Bot',
    tagline: 'Ask a PDF anything and get answers that point back to the exact page.',
    problem: 'Long documents are slow to search, and general chatbots sometimes invent answers.',
    built: [
      'Overlap-aware chunking so context is not lost at section boundaries',
      'Dense embeddings (BAAI/bge-small-en-v1.5) indexed with FAISS HNSW for fast lookup',
      'Cross-encoder reranking (MiniLM) to move the most relevant passages to the top',
      'A FastAPI service with /index and /ask endpoints',
    ],
    outcome: 'Answers stay tied to the document and cite the pages they come from.',
    stack: ['FastAPI', 'FAISS', 'BGE embeddings', 'Cross-encoder', 'Groq LLM'],
    icon: Bot,
  },
  {
    title: 'News Video Summarization & Fake News Detection',
    tagline: 'From a news video to a transcript, a summary and a credibility label.',
    problem: 'Video news is quick to watch but hard to summarize and verify at a glance.',
    built: [
      'Scraper that collects news videos from major channels',
      'Transcription with Whisper and summaries with BART',
      'Real vs. fake classification with a fine-tuned T5 model',
      'Streamlit interface that walks through the full pipeline',
    ],
    outcome: 'One pipeline takes a video from raw footage to a summary and a classification.',
    stack: ['Whisper', 'BART', 'T5', 'Streamlit', 'NLTK'],
    icon: Clapperboard,
  },
  {
    title: 'GlamourBot: Bilingual AI Fashion Assistant',
    tagline: 'A styling assistant that understands your size, budget and occasion.',
    problem: 'Shoppers want outfit advice that fits their constraints, not generic suggestions.',
    built: [
      'RAG-based FAQ chat with voice input and output in English and Roman Urdu',
      'Weather-aware styling recommendations',
      'Recommendation module that matches items to style specs, with live pricing across brands',
      'Catalog of 12,000+ garments from 22 brands in a queryable database',
      'React frontend with WebSocket-based live try-on streaming',
    ],
    outcome: 'Questions, recommendations and virtual try-on happen in a single conversation.',
    stack: ['FastAPI', 'FAISS', 'Sentence-Transformers', 'OpenCV', 'MediaPipe', 'React'],
    icon: Shirt,
  },
  {
    title: 'Multi-Domain AI Model Recommendation System',
    tagline: 'Describe a use case and get the AI model family that fits it best.',
    problem: 'Picking the right model for text, image, video or speech tasks means weighing many criteria at once.',
    built: [
      'Fuzzy-logic decision support that scores models against the scenario',
      'Hybrid keyword and semantic-embedding router that surfaces only the criteria that matter',
      'Interactive Gradio interface for real-time results',
    ],
    outcome: 'A clear recommendation backed by the evaluation criteria relevant to that scenario.',
    stack: ['Python', 'Sentence-Transformers', 'Fuzzy logic', 'Gradio'],
    icon: Compass,
  },
];
