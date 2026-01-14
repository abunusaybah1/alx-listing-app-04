interface PillProps {
	label: string;
}

const Pill: React.FC<PillProps> = ({ label }) => {
	return (
		<span className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full text-sm cursor-pointer hover:bg-gray-300 transition">
			{label}
		</span>
	);
};

export default Pill;
