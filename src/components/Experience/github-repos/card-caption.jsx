import moment from "moment";
import styled from "@emotion/styled";
import githubColors from "../../../utils/github-colors";

const Caption = styled.p`
	font-size: 12px;
	margin-bottom: 0;
	font-weight: 400;
`;

const RepoLang = styled.span`
	display: inline-block;
	margin-right: 1rem;
`;

const LangDot = styled.span`
	display: inline-block;
	height: 10px;
	width: 10px;
	border-radius: 50%;
	margin-right: 7px;
	background-color: ${(props) => props.language};
`;

function CardCaption({ language, updated_at }) {
	return (
		<Caption>
			{language && (
				<RepoLang>
					<LangDot language={githubColors[language]}></LangDot>
					{language}
				</RepoLang>
			)}
			Updated on {moment(updated_at).format("LL")}
		</Caption>
	);
}

export default CardCaption;
