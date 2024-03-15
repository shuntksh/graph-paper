export const Paper: React.FC = () => {
  const paperWidth = 210;
  const paperHeight = 297;
  const squareSize = 5;

  const numSquaresX = Math.floor(paperWidth / squareSize);
  const numSquaresY = Math.floor(paperHeight / squareSize);
  return (
    <svg
      width={`${paperWidth}mm`}
      height={`${paperHeight}mm`}
      viewBox={`0 0 ${paperWidth} ${paperHeight}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: numSquaresY }, (_, rowIndex) =>
        Array.from({ length: numSquaresX }, (_, colIndex) => (
          <rect
            key={`${rowIndex}-${colIndex}`}
            x={colIndex * squareSize}
            y={rowIndex * squareSize}
            width={squareSize}
            height={squareSize}
            fill="none"
            stroke="gray"
            strokeWidth="0.1"
          />
        ))
      )}
    </svg>
  );
};
