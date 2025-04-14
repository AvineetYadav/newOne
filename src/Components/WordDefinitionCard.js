const WordDefinitionCard = ({ word, partOfSpeech, definition, synonyms, antonyms, imageUrl }) => (
    <div className="border-2 border-purple-500 rounded-xl p-4 w-full max-w-md">
      <h2 className="text-purple-400 text-xl font-semibold">{word} ({partOfSpeech})</h2>
      <p className="mt-2 text-sm text-gray-300">{definition}</p>
      <img
        src={imageUrl}
        alt={word}
        className="mt-3 w-full h-48 object-cover rounded-lg"
      />
      <div className="mt-3 text-sm">
        <p><strong>Synonyms:</strong> {synonyms.join(", ")}</p>
        <p><strong>Antonyms:</strong> {antonyms.join(", ")}</p>
      </div>
    </div>
  );

  export default WordDefinitionCard;