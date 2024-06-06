const tuss =[
		{
			codigo: 10101012,
			procedimento: "Consulta em consultório (no horário normal ou preestabelecido)"
		},
		{
			codigo: 10101020,
			procedimento: "Consulta em domicílio"
		},
		{
			codigo: 10101039,
			procedimento: "Consulta em pronto socorro"
		},
		{
			codigo: 10102019,
			procedimento: "Visita hospitalar (paciente internado)"
		},
		{
			codigo: 10103015,
			procedimento: "Atendimento ao recém-nascido em berçário"
		},
		{
			codigo: 10103023,
			procedimento: "Atendimento ao recém-nascido em sala de parto (parto normal ou operatório de baixo risco)"
		},
		{
			codigo: 10103031,
			procedimento: "Atendimento ao recém-nascido em sala de parto (parto normal ou operatório de alto risco)"
		},
		{
			codigo: 10104011,
			procedimento: "Atendimento do intensivista diarista (por dia e por paciente)"
		},
		{
			codigo: 10104020,
			procedimento: "Atendimento médico do intensivista em UTI geral ou pediátrica (plantão de 12 horas - por paciente)"
		},
		{
			codigo: 10105034,
			procedimento: "Transporte extra-hospitalar terrestre de pacientes graves, 1ª hora - a partir do deslocamento do médico - acompanhamento médico"
		},
		{
			codigo: 10105042,
			procedimento: "Transporte extra-hospitalar terrestre de pacientes graves, por hora adicional - até o retorno do médico à base - acompanhamento médico"
		},
		{
			codigo: 10105050,
			procedimento: "Transporte extra-hospitalar aéreo ou aquático de pacientes graves, 1ª hora - a partir do deslocamento do médico - acompanhamento médico"
		},
		{
			codigo: 10105069,
			procedimento: "Transporte extra-hospitalar aéreo ou aquático de pacientes graves, por hora adicional - acompanhamento médico"
		},
		{
			codigo: 10105077,
			procedimento: "Acompanhamento médico para transporte intra-hospitalar de pacientes graves, com ventilação assistida, da UTI para o centro de diagnósitco"
		},
		{
			codigo: 10106014,
			procedimento: "Aconselhamento genético"
		},
		{
			codigo: 10106030,
			procedimento: "Atendimento ao familiar do adolescente"
		},
		{
			codigo: 10106049,
			procedimento: "Atendimento pediátrico a gestantes (3º trimestre)"
		},
		{
			codigo: 10106065,
			procedimento: "Exame de aptidão física e mental, ou em portadores de mobilidade reduzida, para fins de inscrição ou renovação da CNH (Carteira Nacional de Habilitação)"
		},
		{
			codigo: 10106073,
			procedimento: "Junta Médica (três ou mais profissionais) - destina-se ao esclarecimento diagnóstico ou decisão de conduta em caso de difícil solução - por profissional"
		},
		{
			codigo: 10106090,
			procedimento: "Junta Médica - pagamento de honorários médicos referente a 3ª opinião, conforme resolução Consu nº 8"
		},
		{
			codigo: 10106103,
			procedimento: "Perícia médica"
		},
		{
			codigo: 10106111,
			procedimento: "Exame de aptidão física e mental para concessão de benefícios fiscais conferidos pelas Secretaria da Receita Federal e da Fazenda Estadual, a quem fazem jus portadores de mobilidade reduzida, com necessidade de adaptação veicular"
		},
		{
			codigo: 10106120,
			procedimento: "Exame de aptidão física e mental para ratificação, quando a condição física e mental assim o requerer, dos exames realizados pelo órgão previdenciário, incluindo restrição ou liberação para a condução de veículo automotor"
		},
		{
			codigo: 10106138,
			procedimento: "Prova de direção veicular em banca especial - Avaliação Clínica durante a prova de direção veicular procedida por dois médicos simultaneamente"
		},
		{
			codigo: 10106146,
			procedimento: "Atendimento ambulatorial em puericultura"
		},
		{
			codigo: 20101015,
			procedimento: "Acompanhamento clínico ambulatorial pós-transplante renal - por avaliação"
		},
		{
			codigo: 20101023,
			procedimento: "Análise da proporcionalidade cineantropométrica"
		},
		{
			codigo: 20101074,
			procedimento: "Avaliação nutrológica (inclui consulta)"
		},
		{
			codigo: 20101082,
			procedimento: "Avaliação nutrológica pré e pós-cirurgia bariátrica (inclui consulta)"
		},
		{
			codigo: 20101090,
			procedimento: "Avaliação da composição corporal por antropometria (inclui consulta)"
		},
		{
			codigo: 20101104,
			procedimento: "Avaliação da composição corporal por bioimpedanciometria"
		},
		{
			codigo: 20101112,
			procedimento: "Avaliação da composição corporal por pesagem hidrostática"
		},
		{
			codigo: 20101120,
			procedimento: "Controle anti-doping (por período de 2 horas) - durante competições"
		},
		{
			codigo: 20101139,
			procedimento: "Controle anti-doping (por período de 2 horas) - fora de competições"
		},
		{
			codigo: 20101155,
			procedimento: "Prestação de serviços em delegações ou competições esportivas"
		},
		{
			codigo: 20101171,
			procedimento: "Rejeição de enxerto renal - tratamento ambulatorial - avaliação clínica diária"
		},
		{
			codigo: 20101198,
			procedimento: "Teste e adaptação de lente de contato (sessão) - binocular"
		},
		{
			codigo: 20101201,
			procedimento: "Avaliação clínica e eletrônica de paciente portador de marca-passo ou sincronizador ou desfibrilador"
		},
		{
			codigo: 20101210,
			procedimento: "Acompanhamento clínico ambulatorial pós-transplante de córnea -por avaliação do 11º ao 30º dia até 3 avaliações"
		},
		{
			codigo: 20101228,
			procedimento: "Acompanhamento clínico ambulatorial pós-transplante de medula óssea"
		},
		{
			codigo: 20101236,
			procedimento: "Avaliação geriátrica ampla - AGA"
		},
		{
			codigo: 20102011,
			procedimento: "Holter de 24 horas - 2 ou mais canais - analógico"
		},
		{
			codigo: 20102020,
			procedimento: "Holter de 24 horas - 3 canais - digital"
		},
		{
			codigo: 20102038,
			procedimento: "Monitorização ambulatorial da pressão arterial - MAPA (24 horas)"
		},
		{
			codigo: 20102062,
			procedimento: "Monitor de eventos sintomáticos por 15 a 30 dias (LOOPER)"
		},
		{
			codigo: 20102070,
			procedimento: "Tilt teste"
		},
		{
			codigo: 20102089,
			procedimento: "Sistema Holter - 12 horas - 1 canal"
		},
		{
			codigo: 20102097,
			procedimento: "Sistema Holter - 12 horas - 2 ou mais canais"
		},
		{
			codigo: 20102100,
			procedimento: "Sistema Holter - 24 horas - 1 canal"
		},
		{
			codigo: 20102111,
			procedimento: "Monitorização eletrocardiográfica programada com transcrição - não contínua"
		},
		{
			codigo: 20102119,
			procedimento: "Monitorização eletrocardiográfica programada com transcrição - não contínua"
		},
		{
			codigo: 20102127,
			procedimento: "Holter 7 dias"
		},
		{
			codigo: 20102135,
			procedimento: "Holter cerebral"
		},
		{
			codigo: 20102143,
			procedimento: "Tilt teste com provas farmacológicas"
		},
		{
			codigo: 20103018,
			procedimento: "Adaptação e treinamento de recursos ópticos para visão subnormal (por sessão) - binocular"
		},
		{
			codigo: 20103026,
			procedimento: "Amputação bilateral (preparação do coto)"
		},
		{
			codigo: 20103034,
			procedimento: "Amputação bilateral (treinamento protético)"
		},
		{
			codigo: 20103042,
			procedimento: "Amputação unilateral (preparação do coto)"
		},
		{
			codigo: 20103050,
			procedimento: "Amputação unilateral (treinamento protético)"
		},
		{
			codigo: 20103069,
			procedimento: "Assistência fisiátrica respiratória em pré e pós-operatório de condições cirúrgicas"
		},
		{
			codigo: 20103077,
			procedimento: "Ataxias"
		},
		{
			codigo: 20103093,
			procedimento: "Atendimento fisiátrico no pré e pós-operatório de pacientes para prevenção de sequelas"
		},
		{
			codigo: 20103107,
			procedimento: "Atendimento fisiátrico no pré e pós-parto"
		},
		{
			codigo: 20103115,
			procedimento: "Atividade reflexa ou aplicação de técnica cinesioterápica específica"
		},
		{
			codigo: 20103123,
			procedimento: "Atividades em escola de postura (máximo de 10 pessoas) - por sessão"
		},
		{
			codigo: 20103131,
			procedimento: "Biofeedback com EMG"
		},
		{
			codigo: 20103140,
			procedimento: "Bloqueio fenólico, alcoólico ou com toxina botulínica por segmento corporal"
		},
		{
			codigo: 20103158,
			procedimento: "Confecção de órteses em material termo-sensível (por unidade)"
		},
		{
			codigo: 20103166,
			procedimento: "Confecção de prótese imediata"
		},
		{
			codigo: 20103174,
			procedimento: "Confecção de prótese provisória"
		},
		{
			codigo: 20103182,
			procedimento: "Desvios posturais da coluna vertebral"
		},
		{
			codigo: 20103190,
			procedimento: "Disfunção vésico-uretral"
		},
		{
			codigo: 20103204,
			procedimento: "Distrofia simpático-reflexa"
		},
		{
			codigo: 20103212,
			procedimento: "Distúrbios circulatórios artério-venosos e linfáticos"
		},
		{
			codigo: 20103220,
			procedimento: "Doenças pulmonares atendidas em ambulatório"
		},
		{
			codigo: 20103239,
			procedimento: "Exercícios de ortóptica (por sessão)"
		},
		{
			codigo: 20103247,
			procedimento: "Exercícios para reabilitação do asmático (ERAC) - por sessão coletiva"
		},
		{
			codigo: 20103255,
			procedimento: "Exercícios para reabilitação do asmático (ERAI) - por sessão individual"
		},
		{
			codigo: 20103263,
			procedimento: "Hemiparesia"
		},
		{
			codigo: 20103271,
			procedimento: "Hemiplegia"
		},
		{
			codigo: 20103280,
			procedimento: "Hemiplegia e hemiparesia com afasia"
		},
		{
			codigo: 20103298,
			procedimento: "Hipo ou agenesia de membros"
		},
		{
			codigo: 20103301,
			procedimento: "Infiltração de ponto gatilho (por músculo) ou agulhamento seco (por músculo)"
		},
		{
			codigo: 20103310,
			procedimento: "Lesão nervosa periférica afetando mais de um nervo com alterações sensitivas e/ou motoras"
		},
		{
			codigo: 20103328,
			procedimento: "Lesão nervosa periférica afetando um nervo com alterações sensitivas e/ou motoras"
		},
		{
			codigo: 20103336,
			procedimento: "Manipulação vertebral"
		},
		{
			codigo: 20103344,
			procedimento: "Miopatias"
		},
		{
			codigo: 20103360,
			procedimento: "Paciente com D.P.O.C. em atendimento ambulatorial necessitando reeducação e reabilitação respiratória"
		},
		{
			codigo: 20103379,
			procedimento: "Paciente em pós-operatório de cirurgia cardíaca, atendido em ambulatório, duas a três vezes por semana"
		},
		{
			codigo: 20103387,
			procedimento: "Pacientes com doença isquêmica do coração, atendido em ambulatório de 8 a 24 semanas"
		},
		{
			codigo: 20103395,
			procedimento: "Pacientes com doença isquêmica do coração, atendido em ambulatório, até 8 semanas de programa"
		},
		{
			codigo: 20103409,
			procedimento: "Pacientes com doenças neuro-músculo-esqueléticas com envolvimento tegumentar"
		},
		{
			codigo: 20103417,
			procedimento: "Pacientes sem doença coronariana clinicamente manifesta, mas considerada de alto  risco,  atendido  em ambulatório, duas a três vezes por semana"
		},
		{
			codigo: 20103425,
			procedimento: "Paralisia cerebral"
		},
		{
			codigo: 20103433,
			procedimento: "Paralisia cerebral com distúrbio de comunicação"
		},
		{
			codigo: 20103441,
			procedimento: "Paraparesia/tetraparesia"
		},
		{
			codigo: 20103450,
			procedimento: "Paraplegia e tetraplegia"
		},
		{
			codigo: 20103468,
			procedimento: "Parkinson"
		},
		{
			codigo: 20103476,
			procedimento: "Patologia neurológica com dependência de atividades da vida diária"
		},
		{
			codigo: 20103484,
			procedimento: "Patologia osteomioarticular em um membro"
		},
		{
			codigo: 20103492,
			procedimento: "Patologia osteomioarticular em dois ou mais membros"
		},
		{
			codigo: 20103506,
			procedimento: "Patologia osteomioarticular em um segmento da coluna"
		},
		{
			codigo: 20103514,
			procedimento: "Patologia osteomioarticular em diferentes segmentos da coluna"
		},
		{
			codigo: 20103522,
			procedimento: "Patologias osteomioarticulares com dependência de atividades da vida diária"
		},
		{
			codigo: 20103530,
			procedimento: "Recuperação funcional pós-operatória ou por imobilização da patologia vertebral"
		},
		{
			codigo: 20103549,
			procedimento: "Procedimentos mesoterápicos (por região anatômica)"
		},
		{
			codigo: 20103557,
			procedimento: "Procedimentos mesoterápicos com calcitonina (qualquer segmento)"
		},
		{
			codigo: 20103565,
			procedimento: "Processos inflamatórios pélvicos"
		},
		{
			codigo: 20103573,
			procedimento: "Programa de exercício supervisionado com obtenção de eletrocardiograma e/ou saturação de O2 - sessão individual"
		},
		{
			codigo: 20103581,
			procedimento: "Programa de exercício supervisionado com obtenção de eletrocardiograma e/ou saturação de O2 - sessão coletiva"
		},
		{
			codigo: 20103590,
			procedimento: "Programa de exercício supervisionado sem obtenção de eletrocardiograma e/ou saturação de O2 - sessão individual"
		},
		{
			codigo: 20103603,
			procedimento: "Programa de exercício supervisionado sem obtenção de eletrocardiograma e/ou saturação de O2 - sessão coletiva"
		},
		{
			codigo: 20103611,
			procedimento: "Queimados - seguimento ambulatorial para prevenção de sequelas (por segmento)"
		},
		{
			codigo: 20103620,
			procedimento: "Reabilitação de paciente com endoprótese"
		},
		{
			codigo: 20103638,
			procedimento: "Reabilitação labiríntica (por sessão)"
		},
		{
			codigo: 20103646,
			procedimento: "Reabilitação perineal com biofeedback"
		},
		{
			codigo: 20103654,
			procedimento: "Recuperação funcional de distúrbios crânio-faciais"
		},
		{
			codigo: 20103662,
			procedimento: "Recuperação funcional pós-operatória ou pós-imobilização gessada de  patologia  osteomioarticular  com complicações neurovasculares afetando um membro"
		},
		{
			codigo: 20103670,
			procedimento: "Recuperação funcional pós-operatória ou pós-imobilização gessada de  patologia  osteomioarticular  com complicações neurovasculares afetando mais de um membro"
		},
		{
			codigo: 20103689,
			procedimento: "Retardo do desenvolvimento psicomotor"
		},
		{
			codigo: 20103697,
			procedimento: "Sequelas de traumatismos torácicos e abdominais"
		},
		{
			codigo: 20103700,
			procedimento: "Sequelas em politraumatizados (em diferentes segmentos)"
		},
		{
			codigo: 20103719,
			procedimento: "Sinusites"
		},
		{
			codigo: 20103727,
			procedimento: "Reabilitação  cardíaca supervisionada. Programa de 12 semanas. Duas a três sessões por semana (por sessão)"
		},
		{
			codigo: 20103743,
			procedimento: "Exercícios de pleóptica"
		},
		{
			codigo: 20103751,
			procedimento: "Leme, análise de marcha"
		},
		{
			codigo: 20104014,
			procedimento: "Actinoterapia (por sessão)"
		},
		{
			codigo: 20104022,
			procedimento: "Aplicação de hipossensibilizante - em consultório (AHC) exclusive o alérgeno - planejamento técnico para"
		},
		{
			codigo: 20104049,
			procedimento: "Cateterismo vesical em retenção urinária"
		},
		{
			codigo: 20104057,
			procedimento: "Cauterização química vesical"
		},
		{
			codigo: 20104065,
			procedimento: "Cerumen - remoção (bilateral)"
		},
		{
			codigo: 20104073,
			procedimento: "Crioterapia (grupo de até 5 lesões)"
		},
		{
			codigo: 20104081,
			procedimento: "Curativos em geral com anestesia, exceto queimados"
		},
		{
			codigo: 20104090,
			procedimento: "Curativo de extremidades de origem vascular"
		},
		{
			codigo: 20104103,
			procedimento: "Curativos em geral sem anestesia, exceto queimados"
		},
		{
			codigo: 20104111,
			procedimento: "Dilatação uretral (sessão)"
		},
		{
			codigo: 20104120,
			procedimento: "Fototerapia com UVA (PUVA) (por sessão)"
		},
		{
			codigo: 20104138,
			procedimento: "Imunoterapia específica - 30 dias - planejamento técnico"
		},
		{
			codigo: 20104146,
			procedimento: "Imunoterapia inespecífica - 30 dias - planejamento técnico"
		},
		{
			codigo: 20104154,
			procedimento: "Instilação vesical ou uretral"
		},
		{
			codigo: 20104170,
			procedimento: "Sessão de eletroconvulsoterapia (em sala com oxímetro de pulso, monitor de ECG, EEG), sob anestesia"
		},
		{
			codigo: 20104189,
			procedimento: "Sessão de oxigenoterapia hiperbárica (por sessão de 2 horas)"
		},
		{
			codigo: 20104197,
			procedimento: "Sessão de psicoterapia de casal"
		},
		{
			codigo: 20104200,
			procedimento: "Sessão de psicoterapia de grupo (por paciente)"
		},
		{
			codigo: 20104219,
			procedimento: "Sessão de psicoterapia individual"
		},
		{
			codigo: 20104227,
			procedimento: "Sessão de psicoterapia infantil"
		},
		{
			codigo: 20104235,
			procedimento: "Terapia inalatória - por nebulização"
		},
		{
			codigo: 20104243,
			procedimento: "Terapia oncológica com altas doses - planejamento e 1º dia de tratamento"
		},
		{
			codigo: 20104251,
			procedimento: "Terapia oncológica com altas doses - por dia subsequente de tratamento"
		},
		{
			codigo: 20104260,
			procedimento: "Terapia oncológica com aplicação de medicamentos por via intracavitária ou intratecal  - por procedimento"
		},
		{
			codigo: 20104278,
			procedimento: "Terapia oncológica com aplicação intra-arterial ou intravenosa de medicamentos em infusão de duração mínima de 6 horas - planejamento e 1º dia de tratamento"
		},
		{
			codigo: 20104286,
			procedimento: "Terapia oncológica com aplicação intra-arterial ou intravenosa de medicamentos em infusão de duração mínima de 6 horas - por dia subsequente de tratamento"
		},
		{
			codigo: 20104294,
			procedimento: "Terapia oncológica - planejamento e 1º dia de tratamento"
		},
		{
			codigo: 20104308,
			procedimento: "Terapia oncológica - por dia subsequente de tratamento"
		},
		{
			codigo: 20104316,
			procedimento: "Curativo de ouvido (cada)"
		},
		{
			codigo: 20104324,
			procedimento: "Curativo oftalmológico"
		},
		{
			codigo: 20104332,
			procedimento: "Bota de Unna - confecção"
		},
		{
			codigo: 20104340,
			procedimento: "Cateterismo de canais ejaculadores"
		},
		{
			codigo: 20104359,
			procedimento: "Massagem prostática"
		},
		{
			codigo: 20104367,
			procedimento: "Pneumoperitônio (por sessão)"
		},
		{
			codigo: 20104375,
			procedimento: "Pneumotórax artificial"
		},
		{
			codigo: 20104383,
			procedimento: "Pulsoterapia intravenosa (por sessão) - ambulatorial"
		},
		{
			codigo: 20104391,
			procedimento: "Terapia imunobiológica intravenosa (por sessão) - ambulatorial"
		},
		{
			codigo: 20104405,
			procedimento: "Terapia fotodinâmica"
		},
		{
			codigo: 20104413,
			procedimento: "Estimulação magnética transcraniana superficial (repetida) - EMT"
		},
		{
			codigo: 20104421,
			procedimento: "Terapia imunobiológica subcutânea (por sessão) ambulatorial"
		},
		{
			codigo: 20104430,
			procedimento: "Terapia antineoplásica oral para tratamento do câncer"
		},
		{
			codigo: 20104464,
			procedimento: "Terapia imunoprofilática com palivizumabe para o vírus sincicial respiratório (por sessão) – ambulatorial"
		},
		{
			codigo: 20105010,
			procedimento: "Perícia forense, por psiquiatra forense"
		},
		{
			codigo: 20105029,
			procedimento: "Perícia psiquiátrica administrativa"
		},
		{
			codigo: 20105037,
			procedimento: "Fornecimento de equipamentos coletores e adjuvantes para colostomia, ileostomia e urostomia, sonda vesical de demora e coletor de urina"
		},
		{
			codigo: 20201010,
			procedimento: "Acompanhamento clínico de transplante renal no período de internação do receptor e do doador (pós-operatório até 15 dias)"
		},
		{
			codigo: 20201028,
			procedimento: "Acompanhamento peroperatório"
		},
		{
			codigo: 20201036,
			procedimento: "Assistência cardiológica peroperatória em cirurgia geral e em parto (primeira hora)"
		},
		{
			codigo: 20201044,
			procedimento: "Assistência cardiológica peroperatória em cirurgia geral e em parto (horas suplementares) - máximo de 4 horas"
		},
		{
			codigo: 20201052,
			procedimento: "Cardioversão elétrica eletiva (avaliação clínica, eletrocardiográfica, indispensável à desfibrilação)"
		},
		{
			codigo: 20201060,
			procedimento: "Rejeição de enxerto renal - tratamento internado - avaliação clínica diária - por visita"
		},
		{
			codigo: 20201079,
			procedimento: "Transplante duplo rim-pâncreas - acompanhamento clínico (pós-operatório até 15 dias)"
		},
		{
			codigo: 20201087,
			procedimento: "Tratamento  conservador  de  traumatismo  cranioencefálico, hipertensão  intracraniana  e  hemorragia (por dia)"
		},
		{
			codigo: 20201095,
			procedimento: "Assistência cardiológica no pós-operatório de cirurgia cardíaca (após a alta da UTI)"
		},
		{
			codigo: 20201109,
			procedimento: "Avaliação clínica diária enteral"
		},
		{
			codigo: 20201117,
			procedimento: "Avaliação clínica diária parenteral"
		},
		{
			codigo: 20201125,
			procedimento: "Avaliação clínica diária parenteral e enteral"
		},
		{
			codigo: 20201133,
			procedimento: "Acompanhamento médico na litotripsia extracorpórea"
		},
		{
			codigo: 20202016,
			procedimento: "Cardiotocografia anteparto"
		},
		{
			codigo: 20202024,
			procedimento: "Cardiotocografia intraparto (por hora) até 6 horas externa"
		},
		{
			codigo: 20202032,
			procedimento: "Monitorização hemodinâmica invasiva (por 12 horas)"
		},
		{
			codigo: 20202040,
			procedimento: "Monitorização neurofisiológica intra-operatória"
		},
		{
			codigo: 20202059,
			procedimento: "Potencial evocado intra-operatório - monitorização cirúrgica (PE/IO)"
		},
		{
			codigo: 20202067,
			procedimento: "Monitorização da pressão intracraniana (por dia)"
		},
		{
			codigo: 20203012,
			procedimento: "Assistência fisiátrica respiratória em paciente internado com ventilação mecânica"
		},
		{
			codigo: 20203020,
			procedimento: "Eletroestimulação do assoalho pélvico e/ou outra técnica de exercícios perineais"
		},
		{
			codigo: 20203047,
			procedimento: "Assistência fisiátrica respiratória em doente clínico internado"
		},
		{
			codigo: 20203063,
			procedimento: "Pacientes com doença isquêmica do coração, hospitalizado, até 8 semanas de programa"
		},
		{
			codigo: 20203071,
			procedimento: "Pacientes em pós-operatório de cirurgia cardíaca, hospitalizado, até 8 semanas de programa"
		},
		{
			codigo: 20204027,
			procedimento: "Cardioversão elétrica de emergência"
		},
		{
			codigo: 20204035,
			procedimento: "Cardioversão química de arritmia paroxísta em emergência"
		},
		{
			codigo: 20204043,
			procedimento: "Priapismo - tratamento não cirúrgico"
		},
		{
			codigo: 20204086,
			procedimento: "Terapia oncológica com aplicação intra-arterial de medicamentos, em regime de aplicação peroperatória, por meio de cronoinfusor ou perfusor extra-corpórea"
		},
		{
			codigo: 20204159,
			procedimento: "Pulsoterapia intravenosa (por sessão) - hospitalar"
		},
		{
			codigo: 20204167,
			procedimento: "Terapia imunobiológica intravenosa (por sessão) - hospitalar"
		},
		{
			codigo: 20204175,
			procedimento: "Terapia imunobiológica subcutânea (por sessão) - hospitalar"
		},
		{
			codigo: 20204183,
			procedimento: "Terapia imunoprofilática com palivizumabe para o vírus sincicial respiratório (por sessão) – hospitalar"
		},
		{
			codigo: 30101018,
			procedimento: "Abrasão cirúrgica (por sessão)"
		},
		{
			codigo: 30101026,
			procedimento: "Alopecia parcial - exérese e sutura"
		},
		{
			codigo: 30101034,
			procedimento: "Alopecia parcial - rotação de retalho"
		},
		{
			codigo: 30101042,
			procedimento: "Alopecia parcial - rotação múltipla de retalhos"
		},
		{
			codigo: 30101050,
			procedimento: "Apêndice pré-auricular - ressecção"
		},
		{
			codigo: 30101069,
			procedimento: "Autonomização de retalho - por estágio"
		},
		{
			codigo: 30101077,
			procedimento: "Biópsia de pele, tumores superficiais, tecido celular subcutâneo, linfonodo superficial, etc"
		},
		{
			codigo: 30101085,
			procedimento: "Biópsia de unha"
		},
		{
			codigo: 30101093,
			procedimento: "Calosidade e/ou mal perfurante - desbastamento (por lesão)"
		},
		{
			codigo: 30101107,
			procedimento: "Cauterização química (por grupo de até 5 lesões)"
		},
		{
			codigo: 30101115,
			procedimento: "Cirurgia da hidrosadenite (por região)"
		},
		{
			codigo: 30101123,
			procedimento: "Cirurgia micrográfica de Mohs"
		},
		{
			codigo: 30101140,
			procedimento: "Correção cirúrgica de linfedema (por estágio)"
		},
		{
			codigo: 30101158,
			procedimento: "Correção cirúrgica de sequelas de alopecia traumática com microenxertos pilosos (por região)"
		},
		{
			codigo: 30101166,
			procedimento: "Correção de deformidades nos membros com utilização de implantes"
		},
		{
			codigo: 30101174,
			procedimento: "Correção de deformidades por exérese de tumores, cicatrizes ou ferimentos com o emprego de expansores  em retalhos  musculares ou miocutâneos (por estágio)"
		},
		{
			codigo: 30101182,
			procedimento: "Correção de deformidades por exérese de tumores, cicatrizes ou ferimentos, com o emprego de expansores de tecido, em retalhos cutâneos (por estágio)"
		},
		{
			codigo: 30101190,
			procedimento: "Correção de lipodistrofia braquial, crural ou trocanteriana de membros superiores e inferiores"
		},
		{
			codigo: 30101204,
			procedimento: "Criocirurgia (nitrogênio líquido) de neoplasias cutâneas"
		},
		{
			codigo: 30101212,
			procedimento: "Curativo de queimaduras - por unidade topográfica (UT) ambulatorial"
		},
		{
			codigo: 30101220,
			procedimento: "Curativo de queimaduras - por unidade topográfica (UT) hospitalar"
		},
		{
			codigo: 30101239,
			procedimento: "Curativo especial sob anestesia - por unidade topográfica (UT)"
		},
		{
			codigo: 30101247,
			procedimento: "Curetagem e eletrocoagulação de CA de pele (por lesão)"
		},
		{
			codigo: 30101255,
			procedimento: "Curetagem simples de lesões de pele (por grupo de até 5 lesões)"
		},
		{
			codigo: 30101263,
			procedimento: "Dermoabrasão de lesões cutâneas"
		},
		{
			codigo: 30101271,
			procedimento: "Dermolipectomia para correção de abdome em avental"
		},
		{
			codigo: 30101280,
			procedimento: "Desbridamento cirúrgico - por unidade topográfica (UT)"
		},
		{
			codigo: 30101298,
			procedimento: "Eletrocoagulação de lesões de pele e mucosas - com ou sem curetagem (por grupo de até 5 lesões)"
		},
		{
			codigo: 30101301,
			procedimento: "Enxerto cartilaginoso"
		},
		{
			codigo: 30101310,
			procedimento: "Enxerto composto"
		},
		{
			codigo: 30101328,
			procedimento: "Enxerto de mucosa"
		},
		{
			codigo: 30101336,
			procedimento: "Enxerto de pele (homoenxerto inclusive)"
		},
		{
			codigo: 30101344,
			procedimento: "Enxerto de pele múltiplo - por unidade topográfica (UT)"
		},
		{
			codigo: 30101352,
			procedimento: "Epilação por eletrólise (por sessão)"
		},
		{
			codigo: 30101360,
			procedimento: "Escalpo  parcial  -  tratamento cirúrgico"
		},
		{
			codigo: 30101379,
			procedimento: "Escalpo total - tratamento cirúrgico"
		},
		{
			codigo: 30101387,
			procedimento: "Escarectomia descompressiva (pele e estruturas profundas) - por unidade topográfica (UT)"
		},
		{
			codigo: 30101395,
			procedimento: "Esfoliação química média (por sessão)"
		},
		{
			codigo: 30101409,
			procedimento: "Esfoliação química profunda (por sessão)"
		},
		{
			codigo: 30101417,
			procedimento: "Esfoliação química superficial (por sessão)"
		},
		{
			codigo: 30101425,
			procedimento: "Exérese de higroma cístico"
		},
		{
			codigo: 30101433,
			procedimento: "Exérese de higroma cístico no RN e lactente"
		},
		{
			codigo: 30101441,
			procedimento: "Exérese de lesão com auto-enxertia"
		},
		{
			codigo: 30101450,
			procedimento: "Exérese e sutura de lesões (circulares ou não) com rotação de retalhos cutâneos"
		},
		{
			codigo: 30101468,
			procedimento: "Exérese de lesão / tumor de pele e mucosas"
		},
		{
			codigo: 30101476,
			procedimento: "Exérese de tumor e rotação de retalho músculo-cutâneo"
		},
		{
			codigo: 30101484,
			procedimento: "Exérese de unha"
		},
		{
			codigo: 30101492,
			procedimento: "Exérese e sutura simples de pequenas lesões (por grupo de até 5 lesões)"
		},
		{
			codigo: 30101506,
			procedimento: "Exérese tangencial (shaving) - (por grupo de até 5 lesões)"
		},
		{
			codigo: 30101514,
			procedimento: "Expansão tissular (por sessão)"
		},
		{
			codigo: 30101522,
			procedimento: "Extensos ferimentos, cicatrizes ou tumores - excisão e retalhos cutâneos da região"
		},
		{
			codigo: 30101530,
			procedimento: "Extensos ferimentos, cicatrizes ou tumores - exérese e emprego de retalhos cutâneos ou musculares  cruzados (por estágio)"
		},
		{
			codigo: 30101549,
			procedimento: "Extensos ferimentos, cicatrizes ou tumores - exérese e retalhos cutâneos à distância"
		},
		{
			codigo: 30101557,
			procedimento: "Extensos ferimentos, cicatrizes ou tumores - exérese e rotação de retalho fasciocutâneo ou axial"
		},
		{
			codigo: 30101565,
			procedimento: "Extensos ferimentos, cicatrizes ou tumores - exérese e rotação de retalhos miocutâneos"
		},
		{
			codigo: 30101573,
			procedimento: "Extensos ferimentos, cicatrizes ou tumores - exérese e rotação de retalhos musculares"
		},
		{
			codigo: 30101581,
			procedimento: "Extensos ferimentos, cicatrizes, ou tumores - exérese e enxerto cutâneo"
		},
		{
			codigo: 30101590,
			procedimento: "Face - biópsia"
		},
		{
			codigo: 30101603,
			procedimento: "Ferimentos infectados e mordidas de animais (desbridamento)"
		},
		{
			codigo: 30101611,
			procedimento: "Incisão e drenagem de tenossinovites purulentas"
		},
		{
			codigo: 30101620,
			procedimento: "Incisão e drenagem de abscesso, hematoma ou panarício"
		},
		{
			codigo: 30101638,
			procedimento: "Incisão e drenagem de flegmão"
		},
		{
			codigo: 30101646,
			procedimento: "Infiltração  intralesional, cicatricial / hemangiomas - por sessão"
		},
		{
			codigo: 30101654,
			procedimento: "Lasercirurgia (por sessão)"
		},
		{
			codigo: 30101662,
			procedimento: "Matricectomia por dobra ungueal"
		},
		{
			codigo: 30101670,
			procedimento: "Plástica em Z ou W"
		},
		{
			codigo: 30101689,
			procedimento: "Reconstrução com retalhos de gálea aponeurótica"
		},
		{
			codigo: 30101697,
			procedimento: "Retalho composto (incluindo cartilagem ou osso)"
		},
		{
			codigo: 30101700,
			procedimento: "Retalho local ou regional"
		},
		{
			codigo: 30101719,
			procedimento: "Retalho muscular ou miocutâneo"
		},
		{
			codigo: 30101735,
			procedimento: "Retirada de corpo estranho subcutâneo"
		},
		{
			codigo: 30101743,
			procedimento: "Retração cicatricial de axila - tratamento cirúrgico"
		},
		{
			codigo: 30101751,
			procedimento: "Retração cicatricial de zona de flexão e extensão de membros superiores e inferiores - tratamento cirúrgico"
		},
		{
			codigo: 30101760,
			procedimento: "Retração cicatricial do cotovelo - tratamento cirúrgico"
		},
		{
			codigo: 30101778,
			procedimento: "Retração de aponevrose palmar (Dupuytren) - tratamento cirúrgico"
		},
		{
			codigo: 30101786,
			procedimento: "Sutura de extensos ferimentos com ou sem desbridamento"
		},
		{
			codigo: 30101794,
			procedimento: "Sutura de pequenos ferimentos com ou sem desbridamento"
		},
		{
			codigo: 30101808,
			procedimento: "Transecção de retalho"
		},
		{
			codigo: 30101816,
			procedimento: "Transferência intermediária de retalho"
		},
		{
			codigo: 30101824,
			procedimento: "Tratamento cirúrgico de bridas constrictivas"
		},
		{
			codigo: 30101832,
			procedimento: "Tratamento cirúrgico de grandes hemangiomas"
		},
		{
			codigo: 30101840,
			procedimento: "Tratamento da miiase furunculóide (por lesão)"
		},
		{
			codigo: 30101859,
			procedimento: "Tratamento de anomalias pilosas a laser/photoderm - por sessão"
		},
		{
			codigo: 30101867,
			procedimento: "Tratamento de escaras ou ulcerações com enxerto de pele"
		},
		{
			codigo: 30101875,
			procedimento: "Tratamento de escaras ou ulcerações com retalhos cutâneos locais"
		},
		{
			codigo: 30101883,
			procedimento: "Tratamento de escaras ou ulcerações com retalhos miocutâneos ou musculares"
		},
		{
			codigo: 30101891,
			procedimento: "Tratamento de fístula cutânea"
		},
		{
			codigo: 30101905,
			procedimento: "Tratamento de lesões cutâneas e vasculares a laser/photoderm - por sessão"
		},
		{
			codigo: 30101913,
			procedimento: "TU partes moles - exérese"
		},
		{
			codigo: 30101921,
			procedimento: "Exérese e sutura de hemangioma, linfangioma ou nevus (por grupo de até 5 lesões)"
		},
		{
			codigo: 30101930,
			procedimento: "Abscesso de unha (drenagem) - tratamento cirúrgico"
		},
		{
			codigo: 30101948,
			procedimento: "Cantoplastia ungueal"
		},
		{
			codigo: 30101956,
			procedimento: "Unha (enxerto) - tratamento cirúrgico"
		},
		{
			codigo: 30101964,
			procedimento: "Retalho expandido"
		},
		{
			codigo: 30201012,
			procedimento: "Biópsia de lábio"
		},
		{
			codigo: 30201020,
			procedimento: "Excisão com plástica de vermelhão"
		},
		{
			codigo: 30201039,
			procedimento: "Excisão com reconstrução à custa de retalhos"
		},
		{
			codigo: 30201047,
			procedimento: "Excisão com reconstrução total"
		},
		{
			codigo: 30201055,
			procedimento: "Excisão em cunha"
		},
		{
			codigo: 30201063,
			procedimento: "Frenotomia labial"
		},
		{
			codigo: 30201071,
			procedimento: "Queiloplastia para fissura labial unilateral - por estágio"
		},
		{
			codigo: 30201080,
			procedimento: "Reconstrução de sulco gengivo-labial"
		},
		{
			codigo: 30201098,
			procedimento: "Reconstrução total do lábio"
		},
		{
			codigo: 30201101,
			procedimento: "Tratamento cirúrgico da macrostomia"
		},
		{
			codigo: 30201110,
			procedimento: "Tratamento cirúrgico da microstomia"
		},
		{
			codigo: 30201128,
			procedimento: "Reconstrução parcial do lábio"
		},
		{
			codigo: 30202019,
			procedimento: "Alongamento cirúrgico do palato mole"
		},
		{
			codigo: 30202027,
			procedimento: "Biópsia de boca"
		},
		{
			codigo: 30202035,
			procedimento: "Excisão de lesão maligna com reconstrução à custa de retalhos locais"
		},
		{
			codigo: 30202043,
			procedimento: "Excisão de tumor de boca com mandibulectomia"
		},
		{
			codigo: 30202051,
			procedimento: "Exérese de tumor e enxerto cutâneo ou mucoso"
		},
		{
			codigo: 30202060,
			procedimento: "Fístula orofacial - tratamento cirúrgico"
		},
		{
			codigo: 30202078,
			procedimento: "Glossectomia subtotal ou total, com ou sem mandibulectomia"
		},
		{
			codigo: 30202086,
			procedimento: "Palato-queiloplastia unilateral"
		},
		{
			codigo: 30202094,
			procedimento: "Palatoplastia com enxerto ósseo"
		},
		{
			codigo: 30202108,
			procedimento: "Palatoplastia com retalho faríngeo"
		},
		{
			codigo: 30202116,
			procedimento: "Palatoplastia com retalho miomucoso"
		},
		{
			codigo: 30202124,
			procedimento: "Palatoplastia parcial"
		},
		{
			codigo: 30202132,
			procedimento: "Palatoplastia total"
		},
		{
			codigo: 30202140,
			procedimento: "Plástica do ducto parotídeo"
		},
		{
			codigo: 30202159,
			procedimento: "Laserterapia para o tratamento da mucosite oral / orofaringe, por sessão"
		},
		{
			codigo: 30203015,
			procedimento: "Frenotomia lingual"
		},
		{
			codigo: 30203023,
			procedimento: "Tumor de língua - tratamento cirúrgico"
		},
		{
			codigo: 30203031,
			procedimento: "Biópsia de língua"
		},
		{
			codigo: 30204011,
			procedimento: "Biópsia de glândula salivar"
		},
		{
			codigo: 30204020,
			procedimento: "Excisão de glândula submandibular"
		},
		{
			codigo: 30204038,
			procedimento: "Exérese de rânula ou mucocele"
		},
		{
			codigo: 30204046,
			procedimento: "Parotidectomia parcial com conservação do nervo facial"
		},
		{
			codigo: 30204054,
			procedimento: "Parotidectomia total ampliada com ou sem reconstrução com retalhos locais"
		},
		{
			codigo: 30204062,
			procedimento: "Parotidectomia total com conservação do nervo facial"
		},
		{
			codigo: 30204070,
			procedimento: "Parotidectomia total com reconstrução do nervo facial"
		},
		{
			codigo: 30204089,
			procedimento: "Parotidectomia total com sacrificio do nervo facial, sem reconstrução"
		},
		{
			codigo: 30204097,
			procedimento: "Plastia de ducto salivar ou exérese de cálculo ou de rânula salivar"
		},
		{
			codigo: 30204100,
			procedimento: "Ressecção de tumor de glândula sublingual"
		},
		{
			codigo: 30205018,
			procedimento: "Abscesso faríngeo - qualquer área"
		},
		{
			codigo: 30205026,
			procedimento: "Adeno tonsilectomia - revisão cirúrgica"
		},
		{
			codigo: 30205034,
			procedimento: "Adeno-amigdalectomia"
		},
		{
			codigo: 30205042,
			procedimento: "Adenoidectomia"
		},
		{
			codigo: 30205050,
			procedimento: "Amigdalectomia das palatinas"
		},
		{
			codigo: 30205069,
			procedimento: "Amigdalectomia lingual"
		},
		{
			codigo: 30205077,
			procedimento: "Biópsia do cavum, orofaringe ou hipofaringe"
		},
		{
			codigo: 30205085,
			procedimento: "Cauterização (qualquer técnica) por sessão"
		},
		{
			codigo: 30205093,
			procedimento: "Corpo estranho de faringe - retirada em consultório"
		},
		{
			codigo: 30205107,
			procedimento: "Corpo estranho de faringe - retirada sob anestesia geral"
		},
		{
			codigo: 30205115,
			procedimento: "Criptólise amigdaliana"
		},
		{
			codigo: 30205140,
			procedimento: "Faringolaringectomia"
		},
		{
			codigo: 30205158,
			procedimento: "Faringolaringoesofagectomia total"
		},
		{
			codigo: 30205166,
			procedimento: "Ressecção de nasoangiofibroma"
		},
		{
			codigo: 30205174,
			procedimento: "Ressecção de tumor de faringe (via bucal ou nasal)"
		},
		{
			codigo: 30205182,
			procedimento: "Ressecção de tumor de faringe com acesso por faringotomia ou por retalho jugal"
		},
		{
			codigo: 30205190,
			procedimento: "Ressecção de tumor de faringe com mandibulectomia"
		},
		{
			codigo: 30205204,
			procedimento: "Ressecção de tumor de faringe por mandibulotomia"
		},
		{
			codigo: 30205212,
			procedimento: "Ressecção de tumor de nasofaringe via endoscópica"
		},
		{
			codigo: 30205220,
			procedimento: "Tonsilectomia a laser"
		},
		{
			codigo: 30205239,
			procedimento: "Tumor de boca ou faringe - ressecção"
		},
		{
			codigo: 30205247,
			procedimento: "Uvulopalatofaringoplastia (qualquer técnica)"
		},
		{
			codigo: 30205263,
			procedimento: "Uvulopalatofaringoplastia por radiofrequência"
		},
		{
			codigo: 30205271,
			procedimento: "Adenoidectomia por videoendoscopia"
		},
		{
			codigo: 30205280,
			procedimento: "Ressecção de nasoangiofibroma por videoendoscopia"
		},
		{
			codigo: 30206014,
			procedimento: "Alargamento de traqueostomia"
		},
		{
			codigo: 30206022,
			procedimento: "Aritenoidectomia microcirúrgica"
		},
		{
			codigo: 30206030,
			procedimento: "Aritenoidectomia ou aritenopexia via externa"
		},
		{
			codigo: 30206049,
			procedimento: "Confecção de fístula tráqueo-esofágica para prótese fonatória com miotomia faríngea"
		},
		{
			codigo: 30206065,
			procedimento: "Exérese de tumor por via endoscópica"
		},
		{
			codigo: 30206103,
			procedimento: "Injeção intralaríngea de toxina botulínica"
		},
		{
			codigo: 30206120,
			procedimento: "Laringectomia parcial"
		},
		{
			codigo: 30206138,
			procedimento: "Laringectomia total"
		},
		{
			codigo: 30206170,
			procedimento: "Laringofissura (inclusive com cordectomia)"
		},
		{
			codigo: 30206200,
			procedimento: "Laringotraqueoplastia"
		},
		{
			codigo: 30206219,
			procedimento: "Microcirurgia com laser para remoção de lesões malignas"
		},
		{
			codigo: 30206227,
			procedimento: "Microcirurgia com uso de laser para ressecção de lesões benignas"
		},
		{
			codigo: 30206235,
			procedimento: "Microcirurgia para decorticação ou tratamento de edema de Reinke"
		},
		{
			codigo: 30206243,
			procedimento: "Microcirurgia para remoção de cisto ou lesão intracordal"
		},
		{
			codigo: 30206251,
			procedimento: "Microcirurgia para ressecção de papiloma"
		},
		{
			codigo: 30206260,
			procedimento: "Microcirurgia para ressecção de pólipo, nódulo ou granuloma"
		},
		{
			codigo: 30206278,
			procedimento: "Microcirurgia para tratamento de paralisia de prega vocal (inclui injeção de materiais)"
		},
		{
			codigo: 30206294,
			procedimento: "Reconstrução para fonação após laringectomia"
		},
		{
			codigo: 30206308,
			procedimento: "Tiroplastia tipo 1 com rotação de aritenóide"
		},
		{
			codigo: 30206316,
			procedimento: "Tiroplastia tipo 1 simples"
		},
		{
			codigo: 30206324,
			procedimento: "Tiroplastia tipo 2 ou 3"
		},
		{
			codigo: 30206359,
			procedimento: "Tratamento cirúrgico da estenose laringo-traqueal"
		},
		{
			codigo: 30206367,
			procedimento: "Tratamento cirúrgico de trauma laríngeo (agudo)"
		},
		{
			codigo: 30207010,
			procedimento: "Redução de fratura do malar (sem fixação)"
		},
		{
			codigo: 30207029,
			procedimento: "Redução de fratura do malar (com fixação)"
		},
		{
			codigo: 30207037,
			procedimento: "Redução de fratura de seio frontal (acesso frontal)"
		},
		{
			codigo: 30207045,
			procedimento: "Redução de fratura de seio frontal (acesso coronal)"
		},
		{
			codigo: 30207061,
			procedimento: "Fratura do arco zigomático - redução instrumental sem fixação"
		},
		{
			codigo: 30207070,
			procedimento: "Fratura do arco zigomático - redução cirúrgica com fixação"
		},
		{
			codigo: 30207088,
			procedimento: "Fratura  simples de mandíbula com contenção e bloqueio intermaxilar eventual"
		},
		{
			codigo: 30207096,
			procedimento: "Fratura simples de mandíbula - redução cirúrgica com fixação óssea e bloqueio intermaxilar eventual"
		},
		{
			codigo: 30207100,
			procedimento: "Fratura naso etmóido órbito-etmoidal"
		},
		{
			codigo: 30207118,
			procedimento: "Fratura cominutiva de mandíbula - redução cirúrgica com fixação óssea e bloqueio intermaxilar eventual"
		},
		{
			codigo: 30207126,
			procedimento: "Fraturas complexas de mandíbula - redução cirúrgica com fixação óssea e eventual bloqueio intermaxilar"
		},
		{
			codigo: 30207134,
			procedimento: "Fraturas alveolares - fixação com aparelho e contenção"
		},
		{
			codigo: 30207142,
			procedimento: "Fratura de maxila, tipo Lefort I e II - redução e aplicação de levantamento zigomático-maxilar com bloqueio intermaxilar eventual"
		},
		{
			codigo: 30207150,
			procedimento: "Fratura de maxila, tipo Lefort III - redução e aplicação de levantamento crânio-maxilar com bloqueio intermaxilar eventual"
		},
		{
			codigo: 30207169,
			procedimento: "Fratura Lefort I - fixação cirúrgica com síntese óssea, levantamento e bloqueio intermaxilar eventual"
		},
		{
			codigo: 30207177,
			procedimento: "Fratura Lefort II - fixação cirúrgica com síntese óssea, levantamento e bloqueio intermaxilar eventual"
		},
		{
			codigo: 30207185,
			procedimento: "Fratura Lefort III - fixação cirúrgica com síntese óssea, levantamento crânio-maxilar e bloqueio intermaxilar eventual"
		},
		{
			codigo: 30207193,
			procedimento: "Fraturas múltiplas de terço médio da face:fixação cirúrgica com síntese óssea, levantamento crânio maxilar e bloqueio intermaxilar"
		},
		{
			codigo: 30207207,
			procedimento: "Fraturas complexas do terço médio da face, fixação cirúrgica com síntese, levantamento crânio-maxilar, enxerto ósseo, halo craniano eventual"
		},
		{
			codigo: 30207215,
			procedimento: "Retirada dos meios de fixação (na face)"
		},
		{
			codigo: 30207223,
			procedimento: "Tratamento conservador de fratura de ossos"
		},
		{
			codigo: 30207231,
			procedimento: "Redução de luxação do ATM"
		},
		{
			codigo: 30208017,
			procedimento: "Artroplastia para luxação recidivante da articulação têmporo-mandibular"
		},
		{
			codigo: 30208025,
			procedimento: "Osteoplastia para prognatismo, micrognatismo ou laterognatismo"
		},
		{
			codigo: 30208033,
			procedimento: "Osteotomias alvéolo palatinas"
		},
		{
			codigo: 30208041,
			procedimento: "Osteotomias segmentares da maxila ou malar"
		},
		{
			codigo: 30208050,
			procedimento: "Osteotomia tipo Lefort I"
		},
		{
			codigo: 30208068,
			procedimento: "Osteotomia tipo Lefort II"
		},
		{
			codigo: 30208076,
			procedimento: "Osteotomia tipo Lefort III - extracraniana"
		},
		{
			codigo: 30208084,
			procedimento: "Osteotomia crânio-maxilares complexas"
		},
		{
			codigo: 30208092,
			procedimento: "Redução simples da luxação da articulação têmporo-mandibular com fixação intermaxilar"
		},
		{
			codigo: 30208106,
			procedimento: "Reconstrução parcial da mandíbula com enxerto ósseo"
		},
		{
			codigo: 30208114,
			procedimento: "Reconstrução total de mandíbula com prótese e ou enxerto ósseo"
		},
		{
			codigo: 30208122,
			procedimento: "Tratamento cirúrgico de anquilose da articulação têmporo-mandibular"
		},
		{
			codigo: 30208130,
			procedimento: "Translocação etmóido orbital para tratamento do hipertelorismo    miocutâneo associado a expansor de tecido - por lado"
		},
		{
			codigo: 30208149,
			procedimento: "Tratamento cirúrgico ou artroplastia para luxação da articulação têmporo mandibular por artroscopia"
		},
		{
			codigo: 30209013,
			procedimento: "Osteoplastias etmóido orbitais"
		},
		{
			codigo: 30209021,
			procedimento: "Osteoplastias de mandíbula"
		},
		{
			codigo: 30209030,
			procedimento: "Osteoplastias do arco zigomático"
		},
		{
			codigo: 30209048,
			procedimento: "Osteoplastias da órbita"
		},
		{
			codigo: 30209056,
			procedimento: "Correção cirúrgica de depressão (afundamento) da região frontal"
		},
		{
			codigo: 30210011,
			procedimento: "Hemiatrofia facial, correção com enxerto de gordura ou implante"
		},
		{
			codigo: 30210020,
			procedimento: "Correção de tumores, cicatrizes ou ferimentos com o auxílio de expansores de tecidos - por estágio"
		},
		{
			codigo: 30210038,
			procedimento: "Paralisia facial - reanimação com o músculo temporal (região oral), sem neurotização"
		},
		{
			codigo: 30210046,
			procedimento: "Paralisia facial - reanimação com o músculo temporal (região orbital), sem neurotização"
		},
		{
			codigo: 30210054,
			procedimento: "Paralisia facial - reanimação com o músculo temporal (região oral) com neurotização"
		},
		{
			codigo: 30210062,
			procedimento: "Paralisia facial - reanimação com o músculo temporal (região orbital e oral) com neurotização"
		},
		{
			codigo: 30210070,
			procedimento: "Reconstrução com retalhos axiais supra-orbitais e supratrocleares"
		},
		{
			codigo: 30210089,
			procedimento: "Reconstrução com retalho axial da artéria temporal superficial"
		},
		{
			codigo: 30210097,
			procedimento: "Reconstrução com retalhos em VY de pedículo subarterial"
		},
		{
			codigo: 30210100,
			procedimento: "Reconstrução com rotação do músculo temporal"
		},
		{
			codigo: 30210119,
			procedimento: "Exérese de tumor maligno de pele"
		},
		{
			codigo: 30210127,
			procedimento: "Exérese de tumor benigno, cisto ou fístula"
		},
		{
			codigo: 30211018,
			procedimento: "Biópsia de mandíbula"
		},
		{
			codigo: 30211034,
			procedimento: "Ressecção de tumor de mandíbula com desarticulação de ATM"
		},
		{
			codigo: 30211042,
			procedimento: "Hemimandibulectomia ou ressecção segmentar ou seccional da mandíbula"
		},
		{
			codigo: 30211050,
			procedimento: "Mandibulectomia total"
		},
		{
			codigo: 30211069,
			procedimento: "Mandibulectomia com ou sem esvaziamento orbitário e rinotomia lateral"
		},
		{
			codigo: 30212014,
			procedimento: "Cervicotomia exploradora"
		},
		{
			codigo: 30212022,
			procedimento: "Drenagem de abscesso cervical profundo"
		},
		{
			codigo: 30212030,
			procedimento: "Esvaziamento cervical radical (especificar o lado)"
		},
		{
			codigo: 30212049,
			procedimento: "Esvaziamento cervical radical ampliado"
		},
		{
			codigo: 30212057,
			procedimento: "Esvaziamento cervical seletivo (especificar o lado)"
		},
		{
			codigo: 30212065,
			procedimento: "Exérese de cisto branquial"
		},
		{
			codigo: 30212073,
			procedimento: "Exérese de cisto tireoglosso"
		},
		{
			codigo: 30212081,
			procedimento: "Exérese de tumor benigno, cisto ou fístula cervical"
		},
		{
			codigo: 30212090,
			procedimento: "Linfadenectomia profunda"
		},
		{
			codigo: 30212103,
			procedimento: "Linfadenectomia superficial"
		},
		{
			codigo: 30212111,
			procedimento: "Neuroblastoma cervical - exérese"
		},
		{
			codigo: 30212120,
			procedimento: "Punção-biópsia de pescoço"
		},
		{
			codigo: 30212138,
			procedimento: "Reconstrução de esôfago cervical"
		},
		{
			codigo: 30212146,
			procedimento: "Ressecção de tumor de corpo carotídeo"
		},
		{
			codigo: 30212154,
			procedimento: "Retração cicatricial cervical - por estágio"
		},
		{
			codigo: 30212162,
			procedimento: "Retração cicatricial cervical com emprego de expansores de tecido - por estágio"
		},
		{
			codigo: 30212170,
			procedimento: "Torcicolo congênito - tratamento cirúrgico"
		},
		{
			codigo: 30212189,
			procedimento: "Tratamento cirúrgico da lipomatose cervical"
		},
		{
			codigo: 30212197,
			procedimento: "Tratamento cirúrgico de fístula com retalho cutâneo"
		},
		{
			codigo: 30213010,
			procedimento: "Biópsia de tireóide"
		},
		{
			codigo: 30213029,
			procedimento: "Bócio mergulhante: extirpação por acesso cérvico-torácico"
		},
		{
			codigo: 30213037,
			procedimento: "Istmectomia ou nodulectomia"
		},
		{
			codigo: 30213045,
			procedimento: "Tireoidectomia parcial"
		},
		{
			codigo: 30213053,
			procedimento: "Tireoidectomia total"
		},
		{
			codigo: 30214017,
			procedimento: "Biópsia de paratireóide"
		},
		{
			codigo: 30214025,
			procedimento: "Paratireoidectomia com toracotomia"
		},
		{
			codigo: 30214033,
			procedimento: "Reimplante de paratireóide previamente preservada"
		},
		{
			codigo: 30214041,
			procedimento: "Tratamento cirúrgico do hiperparatireoidismo primário"
		},
		{
			codigo: 30214050,
			procedimento: "Tratamento cirúrgico do hiperparatireoidismo secundário"
		},
		{
			codigo: 30215013,
			procedimento: "Cranioplastia"
		},
		{
			codigo: 30215021,
			procedimento: "Craniotomia descompressiva"
		},
		{
			codigo: 30215030,
			procedimento: "Craniotomia para tumores ósseos"
		},
		{
			codigo: 30215048,
			procedimento: "Reconstrução craniana ou craniofacial"
		},
		{
			codigo: 30215056,
			procedimento: "Retirada de cranioplastia"
		},
		{
			codigo: 30215072,
			procedimento: "Tratamento cirúrgico da craniossinostose"
		},
		{
			codigo: 30215080,
			procedimento: "Tratamento cirúrgico da fratura do crânio - afundamento"
		},
		{
			codigo: 30215099,
			procedimento: "Tratamento cirúrgico da osteomielite de crânio"
		},
		{
			codigo: 30301017,
			procedimento: "Abscesso de pálpebra - drenagem"
		},
		{
			codigo: 30301025,
			procedimento: "Biópsia de pálpebra"
		},
		{
			codigo: 30301033,
			procedimento: "Blefarorrafia"
		},
		{
			codigo: 30301041,
			procedimento: "Calázio - exérese"
		},
		{
			codigo: 30301050,
			procedimento: "Cantoplastia lateral"
		},
		{
			codigo: 30301068,
			procedimento: "Cantoplastia medial"
		},
		{
			codigo: 30301076,
			procedimento: "Coloboma - com plástica"
		},
		{
			codigo: 30301084,
			procedimento: "Correção cirúrgica de ectrópio ou entrópio"
		},
		{
			codigo: 30301092,
			procedimento: "Correção de bolsas palpebrais - unilateral"
		},
		{
			codigo: 30301106,
			procedimento: "Dermatocalaze ou blefarocalaze exérese - unilateral"
		},
		{
			codigo: 30301114,
			procedimento: "Epicanto - correção cirúrgica - unilateral"
		},
		{
			codigo: 30301122,
			procedimento: "Epilação"
		},
		{
			codigo: 30301130,
			procedimento: "Epilação de cílios (diatermo-coagulação)"
		},
		{
			codigo: 30301149,
			procedimento: "Fissura palpebral - correção cirúrgica"
		},
		{
			codigo: 30301157,
			procedimento: "Lagoftalmo - correção cirúrgica"
		},
		{
			codigo: 30301165,
			procedimento: "Pálpebra - reconstrução parcial (com ou sem ressecção de tumor)"
		},
		{
			codigo: 30301173,
			procedimento: "Pálpebra - reconstrução total (com ou sem ressecção de tumor) - por estágio"
		},
		{
			codigo: 30301181,
			procedimento: "Ptose palpebral - correção cirúrgica - unilateral"
		},
		{
			codigo: 30301190,
			procedimento: "Ressecção de tumores palpebrais"
		},
		{
			codigo: 30301203,
			procedimento: "Retração palpebral - correção cirúrgica"
		},
		{
			codigo: 30301211,
			procedimento: "Simbléfaro com ou sem enxerto - correção cirúrgica"
		},
		{
			codigo: 30301220,
			procedimento: "Supercílio - reconstrução total"
		},
		{
			codigo: 30301238,
			procedimento: "Sutura de pálpebra"
		},
		{
			codigo: 30301246,
			procedimento: "Tarsorrafia"
		},
		{
			codigo: 30301254,
			procedimento: "Telecanto - correção cirúrgica - unilateral"
		},
		{
			codigo: 30301262,
			procedimento: "Triquíase com ou sem enxerto"
		},
		{
			codigo: 30301270,
			procedimento: "Xantelasma palpebral - exérese - unilateral"
		},
		{
			codigo: 30302013,
			procedimento: "Correção da enoftalmia"
		},
		{
			codigo: 30302021,
			procedimento: "Descompressão de órbita ou nervo ótico"
		},
		{
			codigo: 30302030,
			procedimento: "Exenteração com osteotomia"
		},
		{
			codigo: 30302048,
			procedimento: "Exenteração de órbita"
		},
		{
			codigo: 30302056,
			procedimento: "Exérese de tumor com abordagem craniofacial oncológica (tempo facial) pálpebra, cavidade orbitária e olhos"
		},
		{
			codigo: 30302064,
			procedimento: "Fratura de órbita - redução cirúrgica"
		},
		{
			codigo: 30302072,
			procedimento: "Fratura de órbita - redução cirúrgica e enxerto ósseo"
		},
		{
			codigo: 30302080,
			procedimento: "Implante secundário de órbita"
		},
		{
			codigo: 30302099,
			procedimento: "Microcirurgia para tumores orbitários"
		},
		{
			codigo: 30302102,
			procedimento: "Reconstituição de paredes orbitárias"
		},
		{
			codigo: 30302110,
			procedimento: "Reconstrução parcial da cavidade orbital - por estágio"
		},
		{
			codigo: 30302129,
			procedimento: "Reconstrução total da cavidade orbital - por estágio"
		},
		{
			codigo: 30302137,
			procedimento: "Tumor de órbita - exérese"
		},
		{
			codigo: 30303010,
			procedimento: "Autotransplante conjuntival"
		},
		{
			codigo: 30303028,
			procedimento: "Biópsia de conjuntiva"
		},
		{
			codigo: 30303036,
			procedimento: "Enxerto de membrana amniótica"
		},
		{
			codigo: 30303044,
			procedimento: "Infiltração subconjuntival"
		},
		{
			codigo: 30303052,
			procedimento: "Plástica de conjuntiva"
		},
		{
			codigo: 30303060,
			procedimento: "Pterígio - exérese"
		},
		{
			codigo: 30303079,
			procedimento: "Reconstituição de fundo de saco"
		},
		{
			codigo: 30303087,
			procedimento: "Sutura de conjuntiva"
		},
		{
			codigo: 30303095,
			procedimento: "Transplante de limbo"
		},
		{
			codigo: 30303109,
			procedimento: "Tumor de conjuntiva - exérese"
		},
		{
			codigo: 30304016,
			procedimento: "Cauterização de córnea"
		},
		{
			codigo: 30304024,
			procedimento: "Ceratectomia superficial - monocular"
		},
		{
			codigo: 30304032,
			procedimento: "Corpo estranho da córnea - retirada"
		},
		{
			codigo: 30304040,
			procedimento: "PTK ceratectomia fototerapêutica - monocular"
		},
		{
			codigo: 30304059,
			procedimento: "Recobrimento conjuntival"
		},
		{
			codigo: 30304067,
			procedimento: "Sutura de córnea (com ou sem hérnia de íris)"
		},
		{
			codigo: 30304075,
			procedimento: "Tarsoconjuntivoceratoplastia"
		},
		{
			codigo: 30304083,
			procedimento: "Implante de anel intra-estromal"
		},
		{
			codigo: 30304091,
			procedimento: "Fotoablação de superfície convencional - PRK"
		},
		{
			codigo: 30304105,
			procedimento: "Delaminação corneana com fotoablação estromal - LASIK"
		},
		{
			codigo: 30304113,
			procedimento: "Transplante lamelar anterior de córnea"
		},
		{
			codigo: 30304121,
			procedimento: "Transplante lamelar posterior de córnea"
		},
		{
			codigo: 30304156,
			procedimento: "Cross-linking (CXL) de colágeno corneano"
		},
		{
			codigo: 30305012,
			procedimento: "Paracentese da câmara anterior"
		},
		{
			codigo: 30305020,
			procedimento: "Reconstrução da câmara anterior"
		},
		{
			codigo: 30305039,
			procedimento: "Remoção de hifema"
		},
		{
			codigo: 30305047,
			procedimento: "Retirada de corpo estranho da câmara anterior"
		},
		{
			codigo: 30306019,
			procedimento: "Capsulotomia YAG ou cirúrgica"
		},
		{
			codigo: 30306027,
			procedimento: "Facectomia com lente intra-ocular com facoemulsificação"
		},
		{
			codigo: 30306035,
			procedimento: "Facectomia com lente intra-ocular sem facoemulsificação"
		},
		{
			codigo: 30306043,
			procedimento: "Facectomia sem implante"
		},
		{
			codigo: 30306051,
			procedimento: "Fixação iriana de lente intra-ocular"
		},
		{
			codigo: 30306060,
			procedimento: "Implante secundário / explante / fixação escleral ou iriana"
		},
		{
			codigo: 30306078,
			procedimento: "Remoção de pigmentos da lente intra-ocular com yag-laser"
		},
		{
			codigo: 30307015,
			procedimento: "Biópsia de tumor via pars plana"
		},
		{
			codigo: 30307023,
			procedimento: "Biópsia de vítreo via pars plana"
		},
		{
			codigo: 30307031,
			procedimento: "Endolaser/Endodiatermia"
		},
		{
			codigo: 30307040,
			procedimento: "Implante de silicone intravítreo"
		},
		{
			codigo: 30307058,
			procedimento: "Infusão de perfluocarbono"
		},
		{
			codigo: 30307066,
			procedimento: "Membranectomia EPI ou sub-retiniana"
		},
		{
			codigo: 30307074,
			procedimento: "Retirada de corpo estranho do corpo vítreo"
		},
		{
			codigo: 30307082,
			procedimento: "Retirada de óleo de silicone via pars plana"
		},
		{
			codigo: 30307090,
			procedimento: "Troca fluido gasosa"
		},
		{
			codigo: 30307104,
			procedimento: "Vitrectomia a céu aberto - ceratoprótese"
		},
		{
			codigo: 30307112,
			procedimento: "Vitrectomia anterior"
		},
		{
			codigo: 30307120,
			procedimento: "Vitrectomia vias pars plana"
		},
		{
			codigo: 30307139,
			procedimento: "Infusão intravítrea de medicação anti-inflamatória"
		},
		{
			codigo: 30307147,
			procedimento: "Tratamento ocular quimioterápico com anti-angiogênico. Programa de 24 meses. Uma sessão por mês (por sessão)"
		},
		{
			codigo: 30308011,
			procedimento: "Biópsia de esclera"
		},
		{
			codigo: 30308020,
			procedimento: "Enxerto de esclera (qualquer técnica)"
		},
		{
			codigo: 30308038,
			procedimento: "Sutura de esclera"
		},
		{
			codigo: 30308046,
			procedimento: "Exérese de tumor de esclera"
		},
		{
			codigo: 30309018,
			procedimento: "Enucleação ou evisceração com ou sem implante"
		},
		{
			codigo: 30309026,
			procedimento: "Injeção retrobulbar"
		},
		{
			codigo: 30309034,
			procedimento: "Reconstituição de globo ocular com lesão de estruturas intra-oculares"
		},
		{
			codigo: 30310016,
			procedimento: "Biópsia de íris e corpo ciliar"
		},
		{
			codigo: 30310024,
			procedimento: "Cicloterapia - qualquer técnica"
		},
		{
			codigo: 30310032,
			procedimento: "Cirurgias fistulizantes antiglaucomatosas"
		},
		{
			codigo: 30310040,
			procedimento: "Cirurgias fistulizantes com implantes valvulares"
		},
		{
			codigo: 30310059,
			procedimento: "Drenagem de descolamento de coróide"
		},
		{
			codigo: 30310067,
			procedimento: "Fototrabeculoplastia (laser)"
		},
		{
			codigo: 30310075,
			procedimento: "Goniotomia ou trabeculotomia"
		},
		{
			codigo: 30310083,
			procedimento: "Iridectomia (laser ou cirúrgica)"
		},
		{
			codigo: 30310091,
			procedimento: "Iridociclectomia"
		},
		{
			codigo: 30310105,
			procedimento: "Sinequiotomia (cirúrgica)"
		},
		{
			codigo: 30310113,
			procedimento: "Sinequiotomia (laser)"
		},
		{
			codigo: 30311012,
			procedimento: "Biópsia de músculos"
		},
		{
			codigo: 30311020,
			procedimento: "Cirurgia com sutura ajustável"
		},
		{
			codigo: 30311039,
			procedimento: "Estrabismo ciclo vertical/transposição - monocular - tratamento cirúrgico"
		},
		{
			codigo: 30311047,
			procedimento: "Estrabismo horizontal - monocular - tratamento ciúrgico"
		},
		{
			codigo: 30311055,
			procedimento: "Injeção de toxina botulínica - monocular"
		},
		{
			codigo: 30312019,
			procedimento: "Aplicação de placa radiativa episcleral"
		},
		{
			codigo: 30312027,
			procedimento: "Biópsia de retina"
		},
		{
			codigo: 30312035,
			procedimento: "Exérese de tumor de coróide e/ou corpo ciliar"
		},
		{
			codigo: 30312043,
			procedimento: "Fotocoagulação (laser) - por sessão  - monocular"
		},
		{
			codigo: 30312051,
			procedimento: "Infusão de gás expansor"
		},
		{
			codigo: 30312060,
			procedimento: "Pancrioterapia periférica"
		},
		{
			codigo: 30312078,
			procedimento: "Remoção de implante episcleral"
		},
		{
			codigo: 30312086,
			procedimento: "Retinopexia com introflexão escleral"
		},
		{
			codigo: 30312094,
			procedimento: "Retinopexia pneumática"
		},
		{
			codigo: 30312108,
			procedimento: "Retinopexia profilática (criopexia)"
		},
		{
			codigo: 30312116,
			procedimento: "Retinotomia relaxante"
		},
		{
			codigo: 30312124,
			procedimento: "Panfotocoagulação na retinopatia da prematuridade - binocular"
		},
		{
			codigo: 30312132,
			procedimento: "Implante intravítreo de polímero farmacológico de liberação controlada"
		},
		{
			codigo: 30312159,
			procedimento: "Termoterapia transpupilar"
		},
		{
			codigo: 30313015,
			procedimento: "Cirurgia da glândula lacrimal"
		},
		{
			codigo: 30313023,
			procedimento: "Dacriocistectomia - unilateral"
		},
		{
			codigo: 30313031,
			procedimento: "Dacriocistorrinostomia com ou sem intubação - unilateral"
		},
		{
			codigo: 30313040,
			procedimento: "Fechamento dos pontos lacrimais"
		},
		{
			codigo: 30313058,
			procedimento: "Reconstituição de vias lacrimais com silicone ou outro material"
		},
		{
			codigo: 30313066,
			procedimento: "Sondagem das vias lacrimais - com ou sem lavagem"
		},
		{
			codigo: 30313074,
			procedimento: "Reconstituição de pontos lacrimais"
		},
		{
			codigo: 30401011,
			procedimento: "Biópsia de pavilhão auricular"
		},
		{
			codigo: 30401020,
			procedimento: "Exérese de tumor com abordagem craniofacial oncológica pavilhão auricular (tempo facial)"
		},
		{
			codigo: 30401038,
			procedimento: "Exérese de tumor com fechamento primário"
		},
		{
			codigo: 30401046,
			procedimento: "Outros defeitos congênitos que não a microtia"
		},
		{
			codigo: 30401054,
			procedimento: "Reconstrução  de orelha - retoques"
		},
		{
			codigo: 30401062,
			procedimento: "Reconstrução de unidade anatômica do pavilhão auricular - por estágio"
		},
		{
			codigo: 30401070,
			procedimento: "Reconstrução total de orelha - único estágio"
		},
		{
			codigo: 30401089,
			procedimento: "Ressecção de tumor de pavilhão auricular, incluindo parte do osso temporal"
		},
		{
			codigo: 30401097,
			procedimento: "Ressecção subtotal ou total de orelha"
		},
		{
			codigo: 30401100,
			procedimento: "Tratamento cirúrgico de sinus pré-auricular"
		},
		{
			codigo: 30402018,
			procedimento: "Aspiração auricular"
		},
		{
			codigo: 30402026,
			procedimento: "Biópsia (orelha externa)"
		},
		{
			codigo: 30402034,
			procedimento: "Cisto pré-auricular (coloboma auris) - exérese-unilateral"
		},
		{
			codigo: 30402042,
			procedimento: "Corpos estranhos, pólipos ou biópsia - em consultório"
		},
		{
			codigo: 30402050,
			procedimento: "Corpos estranhos, pólipos ou biópsia - em hospital sob anestesia geral"
		},
		{
			codigo: 30402069,
			procedimento: "Estenose de conduto auditivo externo - correção"
		},
		{
			codigo: 30402077,
			procedimento: "Furúnculo - drenagem (ouvido)"
		},
		{
			codigo: 30402085,
			procedimento: "Pericondrite de pavilhão - tratamento cirúrgico com desbridamento"
		},
		{
			codigo: 30402093,
			procedimento: "Tumor benigno de conduto auditivo externo - exérese"
		},
		{
			codigo: 30403014,
			procedimento: "Cauterização de membrana timpânica"
		},
		{
			codigo: 30403030,
			procedimento: "Estapedectomia ou estapedotomia"
		},
		{
			codigo: 30403049,
			procedimento: "Exploração e descompressão parcial do nervo facial intratemporal"
		},
		{
			codigo: 30403057,
			procedimento: "Fístula perilinfática - fechamento cirúrgico"
		},
		{
			codigo: 30403065,
			procedimento: "Glomus jugular - ressecção"
		},
		{
			codigo: 30403073,
			procedimento: "Glomus timpânicus - ressecção"
		},
		{
			codigo: 30403081,
			procedimento: "Mastoidectomia simples ou radical modificada"
		},
		{
			codigo: 30403090,
			procedimento: "Ouvido congênito - tratamento cirúrgico"
		},
		{
			codigo: 30403103,
			procedimento: "Paracentese do tímpano - miringotomia, unilateral - em consultório"
		},
		{
			codigo: 30403111,
			procedimento: "Tímpano-mastoidectomia"
		},
		{
			codigo: 30403120,
			procedimento: "Timpanoplastia com reconstrução da cadeia ossicular"
		},
		{
			codigo: 30403138,
			procedimento: "Timpanoplastia tipo I - miringoplastia - unilateral"
		},
		{
			codigo: 30403146,
			procedimento: "Timpanotomia exploradora - unilateral"
		},
		{
			codigo: 30403154,
			procedimento: "Timpanotomia para tubo de ventilação - unilateral"
		},
		{
			codigo: 30403162,
			procedimento: "Paracentese do tímpano, unilateral, em hospital - anestesia geral"
		},
		{
			codigo: 30404010,
			procedimento: "Doença de Meniere - tratamento cirúrgico - descompressão do saco endolinfático ou \"shunt\""
		},
		{
			codigo: 30404029,
			procedimento: "Enxerto parcial intratemporal do nervo facial - do foramem estilo-mastóideo ao gânglio geniculado"
		},
		{
			codigo: 30404037,
			procedimento: "Enxerto parcial intratemporal do nervo facial - do gânglio geniculado ao meato acústico interno"
		},
		{
			codigo: 30404045,
			procedimento: "Enxerto total do nervo facial intratemporal"
		},
		{
			codigo: 30404053,
			procedimento: "Exploração e descompressão total do nervo facial (transmastóideo, translabiríntico, fossa média)"
		},
		{
			codigo: 30404061,
			procedimento: "Implante coclear (exceto a prótese)"
		},
		{
			codigo: 30404070,
			procedimento: "Injeção de drogas intratimpânicas"
		},
		{
			codigo: 30404088,
			procedimento: "Labirintectomia (membranosa ou óssea) - sem audição"
		},
		{
			codigo: 30404096,
			procedimento: "Neurectomia vestibular para fossa média ou posterior"
		},
		{
			codigo: 30404100,
			procedimento: "Neurectomia vestibular translabiríntica - sem audição"
		},
		{
			codigo: 30404126,
			procedimento: "Ressecção do osso temporal"
		},
		{
			codigo: 30404134,
			procedimento: "Tumor do nervo acústico - ressecção via translabiríntica ou fossa média"
		},
		{
			codigo: 30404142,
			procedimento: "Doença de Meniere - tratamento cirúrgico com ultrassom"
		},
		{
			codigo: 30404177,
			procedimento: "Cirurgia para prótese auditiva percutânea ancorada no osso unilateral (primeira implantação ou substituição)"
		},
		{
			codigo: 30501016,
			procedimento: "Abscesso ou hematoma de septo nasal - drenagem"
		},
		{
			codigo: 30501024,
			procedimento: "Abscesso ou hematoma de septo nasal - drenagem sob anestesia geral"
		},
		{
			codigo: 30501040,
			procedimento: "Alongamento de columela"
		},
		{
			codigo: 30501059,
			procedimento: "Biópsia de nariz"
		},
		{
			codigo: 30501067,
			procedimento: "Corneto inferior - cauterização linear - unilateral"
		},
		{
			codigo: 30501075,
			procedimento: "Corneto inferior - infiltração medicamentosa (unilateral)"
		},
		{
			codigo: 30501083,
			procedimento: "Corpos estranhos - retirada em consultório (nariz)"
		},
		{
			codigo: 30501091,
			procedimento: "Corpos estranhos - retirada sob anestesia geral / hospital (nariz)"
		},
		{
			codigo: 30501113,
			procedimento: "Epistaxe - cauterização (qualquer técnica)"
		},
		{
			codigo: 30501121,
			procedimento: "Epistaxe - cauterização da artéria esfenopalatina com microscopia - unilateral"
		},
		{
			codigo: 30501130,
			procedimento: "Epistaxe - cauterização das artérias etmoidais com microscopia - unilateral"
		},
		{
			codigo: 30501148,
			procedimento: "Epistaxe - ligadura das artérias etmoidais - acesso transorbitário - unilateral"
		},
		{
			codigo: 30501156,
			procedimento: "Epistaxe - tamponamento  antero-posterior"
		},
		{
			codigo: 30501164,
			procedimento: "Epistaxe - tamponamento anterior"
		},
		{
			codigo: 30501172,
			procedimento: "Epistaxe - tamponamento antero-posterior sob anestesia geral"
		},
		{
			codigo: 30501180,
			procedimento: "Exérese de tumor com abordagem craniofacial oncológica (tempo facial) pirâmide nasal"
		},
		{
			codigo: 30501199,
			procedimento: "Exérese de tumor nasal por via endoscopica"
		},
		{
			codigo: 30501202,
			procedimento: "Fechamento de fístula liquórica transnasal"
		},
		{
			codigo: 30501210,
			procedimento: "Fístula liquórica - tratamento cirúrgico endoscópico intranasal"
		},
		{
			codigo: 30501229,
			procedimento: "Fraturas dos ossos nasais - redução cirúrgica e gesso"
		},
		{
			codigo: 30501237,
			procedimento: "Fraturas dos ossos nasais - redução incruenta e gesso"
		},
		{
			codigo: 30501245,
			procedimento: "Imperfuração coanal - correção cirúrgica intranasal"
		},
		{
			codigo: 30501253,
			procedimento: "Imperfuração coanal - correção cirúrgica transpalatina"
		},
		{
			codigo: 30501261,
			procedimento: "Ozena - tratamento cirúrgico"
		},
		{
			codigo: 30501270,
			procedimento: "Perfuração do septo nasal - correção cirúrgica"
		},
		{
			codigo: 30501288,
			procedimento: "Polipectomia - unilateral (nariz)"
		},
		{
			codigo: 30501296,
			procedimento: "Reconstrução de unidade anatômica do nariz - por estágio"
		},
		{
			codigo: 30501300,
			procedimento: "Reconstrução total de nariz - por estágio"
		},
		{
			codigo: 30501318,
			procedimento: "Ressecção de tumores malignos transnasais"
		},
		{
			codigo: 30501326,
			procedimento: "Rinectomia parcial"
		},
		{
			codigo: 30501334,
			procedimento: "Rinectomia total"
		},
		{
			codigo: 30501342,
			procedimento: "Rinoplastia reparadora"
		},
		{
			codigo: 30501350,
			procedimento: "Rinosseptoplastia funcional"
		},
		{
			codigo: 30501369,
			procedimento: "Septoplastia (qualquer técnica sem vídeo)"
		},
		{
			codigo: 30501377,
			procedimento: "Sinéquia nasal - ressecção unilateral - qualquer técnica"
		},
		{
			codigo: 30501385,
			procedimento: "Tratamento cirúrgico da atresia narinária"
		},
		{
			codigo: 30501393,
			procedimento: "Tratamento cirúrgico de deformidade nasal congênita"
		},
		{
			codigo: 30501407,
			procedimento: "Tratamento cirúrgico do rinofima"
		},
		{
			codigo: 30501415,
			procedimento: "Tratamento cirúrgico reparador do nariz em sela"
		},
		{
			codigo: 30501423,
			procedimento: "Tratamento de deformidade traumática nasal"
		},
		{
			codigo: 30501431,
			procedimento: "Tumor intranasal - exérese por rinotomia lateral"
		},
		{
			codigo: 30501440,
			procedimento: "Tumor intranasal - exérese por via transnasal"
		},
		{
			codigo: 30501458,
			procedimento: "Turbinectomia ou turbinoplastia - unilateral"
		},
		{
			codigo: 30501466,
			procedimento: "Turbinoplastia por radiofrequência"
		},
		{
			codigo: 30501474,
			procedimento: "Corpos estranhos - retirada sob anestesia geral / hospital (nariz) - por videoendoscopia"
		},
		{
			codigo: 30501482,
			procedimento: "Epistaxe - cauterização da artéria esfenopalatina com microscopia - unilateral por videoendoscopia"
		},
		{
			codigo: 30501490,
			procedimento: "Imperfuração coanal - correção cirúrgica intranasal por videoendoscopia"
		},
		{
			codigo: 30501504,
			procedimento: "Ozena - tratamento cirúrgico por videoendoscopia"
		},
		{
			codigo: 30501512,
			procedimento: "Perfuração do septo nasal - correção cirúrgica por videoendoscopia"
		},
		{
			codigo: 30501520,
			procedimento: "Rinosseptoplastia funcional por videoendoscopia"
		},
		{
			codigo: 30501539,
			procedimento: "Septoplastia por videoendoscopia"
		},
		{
			codigo: 30501547,
			procedimento: "Fratura de osso próprio de nariz - tratamento conservador"
		},
		{
			codigo: 30502012,
			procedimento: "Angiofibroma - ressecção transmaxilar e/ou transpalatina"
		},
		{
			codigo: 30502020,
			procedimento: "Antrostomia maxilar intranasal"
		},
		{
			codigo: 30502039,
			procedimento: "Artéria maxilar interna - ligadura transmaxilar"
		},
		{
			codigo: 30502047,
			procedimento: "Cisto naso-alveolar e globular - exérese"
		},
		{
			codigo: 30502063,
			procedimento: "Descompressão transetmoidal do canal óptico"
		},
		{
			codigo: 30502071,
			procedimento: "Etmoidectomia externa"
		},
		{
			codigo: 30502080,
			procedimento: "Etmoidectomia intranasal"
		},
		{
			codigo: 30502098,
			procedimento: "Exérese de tumor com abordagem craniofacial oncológica seios...(tempo facial)"
		},
		{
			codigo: 30502101,
			procedimento: "Exérese de tumor de seios paranasais por via endoscopica"
		},
		{
			codigo: 30502110,
			procedimento: "Fístula oro-antral - tratamento cirúrgico"
		},
		{
			codigo: 30502128,
			procedimento: "Fístula oronasal - tratamento cirúrgico"
		},
		{
			codigo: 30502136,
			procedimento: "Maxilectomia incluindo exenteração de órbita"
		},
		{
			codigo: 30502144,
			procedimento: "Maxilectomia parcial"
		},
		{
			codigo: 30502152,
			procedimento: "Maxilectomia total"
		},
		{
			codigo: 30502160,
			procedimento: "Pólipo antro-coanal de Killiam - exérese"
		},
		{
			codigo: 30502179,
			procedimento: "Punção maxilar transmeática ou via fossa canina"
		},
		{
			codigo: 30502187,
			procedimento: "Ressecção de tumor benigno"
		},
		{
			codigo: 30502195,
			procedimento: "Biópsia de seios paranasais - qualquer via"
		},
		{
			codigo: 30502209,
			procedimento: "Sinusectomia maxilar - via endonasal"
		},
		{
			codigo: 30502217,
			procedimento: "Sinusectomia frontal com retalho osteoplástico ou via coronal"
		},
		{
			codigo: 30502225,
			procedimento: "Sinusectomia fronto-etmoidal por via externa"
		},
		{
			codigo: 30502233,
			procedimento: "Sinusectomia maxilar - via oral (Caldwell-Luc)"
		},
		{
			codigo: 30502241,
			procedimento: "Sinusectomia transmaxilar (Ermiro de Lima)"
		},
		{
			codigo: 30502250,
			procedimento: "Sinusotomia esfenoidal"
		},
		{
			codigo: 30502268,
			procedimento: "Sinusotomia frontal intranasal"
		},
		{
			codigo: 30502276,
			procedimento: "Sinusotomia frontal via externa"
		},
		{
			codigo: 30502284,
			procedimento: "Antrostomia maxilar, etmoidectomia etc a laser (abertura de todas as cavidades paranasais a laser)"
		},
		{
			codigo: 30502292,
			procedimento: "Antrostomia maxilar intranasal por videoendoscopia"
		},
		{
			codigo: 30502306,
			procedimento: "Artéria maxilar interna - ligadura transmaxilar por videoendoscopia"
		},
		{
			codigo: 30502314,
			procedimento: "Etmoidectomia intranasal por videoendoscopia"
		},
		{
			codigo: 30502322,
			procedimento: "Sinusectomia maxilar - via endonasal por videoendoscopia"
		},
		{
			codigo: 30502349,
			procedimento: "Sinusotomia esfenoidal por videoendoscopia"
		},
		{
			codigo: 30502357,
			procedimento: "Sinusotomia frontal intranasal por videoendoscopia"
		},
		{
			codigo: 30502365,
			procedimento: "Sinusotomia frontal intranasal com balão por videoendoscopia"
		},
		{
			codigo: 30601010,
			procedimento: "Correção de deformidades da parede torácica"
		},
		{
			codigo: 30601029,
			procedimento: "Costectomia"
		},
		{
			codigo: 30601037,
			procedimento: "Esternectomia subtotal"
		},
		{
			codigo: 30601045,
			procedimento: "Esternectomia total"
		},
		{
			codigo: 30601053,
			procedimento: "Fechamento de pleurostomia"
		},
		{
			codigo: 30601070,
			procedimento: "Mobilização de retalhos musculares ou do omento"
		},
		{
			codigo: 30601088,
			procedimento: "Plumbagem extrafascial"
		},
		{
			codigo: 30601096,
			procedimento: "Reconstrução da parede torácica (com ou sem prótese)"
		},
		{
			codigo: 30601100,
			procedimento: "Reconstrução da parede torácica com retalhos cutâneos"
		},
		{
			codigo: 30601118,
			procedimento: "Reconstrução da parede torácica com retalhos musculares ou miocutâneos"
		},
		{
			codigo: 30601126,
			procedimento: "Reconstrução da região esternal com retalhos musculares bilaterais"
		},
		{
			codigo: 30601134,
			procedimento: "Ressecção de tumor do diafragma e reconstrução (qualquer técnica)"
		},
		{
			codigo: 30601142,
			procedimento: "Retirada de corpo estranho da parede torácica"
		},
		{
			codigo: 30601150,
			procedimento: "Toracectomia"
		},
		{
			codigo: 30601169,
			procedimento: "Toracoplastia (qualquer técnica)"
		},
		{
			codigo: 30601177,
			procedimento: "Toracotomia com biópsia"
		},
		{
			codigo: 30601185,
			procedimento: "Toracotomia exploradora (excluídos os procedimentos intratorácicos)"
		},
		{
			codigo: 30601193,
			procedimento: "Toracotomia para procedimentos ortopédicos sobre a coluna vertebral"
		},
		{
			codigo: 30601207,
			procedimento: "Tração esquelética do gradil costo-esternal (traumatismo)"
		},
		{
			codigo: 30601215,
			procedimento: "Tratamento cirúrgico de fraturas do gradil costal"
		},
		{
			codigo: 30601223,
			procedimento: "Biópsia cirúrgica de costela ou esterno"
		},
		{
			codigo: 30601231,
			procedimento: "Fratura luxação de esterno ou costela - redução incruenta"
		},
		{
			codigo: 30601240,
			procedimento: "Fratura luxação de esterno ou costela - tratamento cirúrgico"
		},
		{
			codigo: 30601258,
			procedimento: "Osteomielite de costela ou esterno - tratamento cirúrgico"
		},
		{
			codigo: 30601266,
			procedimento: "Punção biópsia de costela ou esterno"
		},
		{
			codigo: 30601274,
			procedimento: "Correção de deformidades da parede torácica por vídeo"
		},
		{
			codigo: 30601282,
			procedimento: "Vídeo para procedimentos sobre a coluna vertebral"
		},
		{
			codigo: 30601290,
			procedimento: "Ressutura de parede torácica"
		},
		{
			codigo: 30601304,
			procedimento: "Fratura de costela ou esterno - tratamento conservador"
		},
		{
			codigo: 30601312,
			procedimento: "Osteomielite de costela ou esterno - tratamento conservador"
		},
		{
			codigo: 30602017,
			procedimento: "Biópsia incisional de mama"
		},
		{
			codigo: 30602025,
			procedimento: "Coleta de fluxo papilar de mama"
		},
		{
			codigo: 30602033,
			procedimento: "Correção cirúrgica da assimetria mamária"
		},
		{
			codigo: 30602041,
			procedimento: "Correção de inversão papilar - unilateral"
		},
		{
			codigo: 30602050,
			procedimento: "Drenagem de abscesso de mama"
		},
		{
			codigo: 30602068,
			procedimento: "Drenagem e/ou aspiração de seroma"
		},
		{
			codigo: 30602076,
			procedimento: "Exérese de lesão da mama por marcação estereotáxica ou roll"
		},
		{
			codigo: 30602084,
			procedimento: "Exérese de mama supra-numerária - unilateral"
		},
		{
			codigo: 30602092,
			procedimento: "Exérese de nódulo"
		},
		{
			codigo: 30602106,
			procedimento: "Fistulectomia de mama"
		},
		{
			codigo: 30602114,
			procedimento: "Ginecomastia - unilateral"
		},
		{
			codigo: 30602122,
			procedimento: "Correção da hipertrofia mamária - unilateral"
		},
		{
			codigo: 30602130,
			procedimento: "Linfadenectomia axilar"
		},
		{
			codigo: 30602149,
			procedimento: "Mastectomia radical ou radical modificada - qualquer técnica"
		},
		{
			codigo: 30602157,
			procedimento: "Mastectomia simples"
		},
		{
			codigo: 30602165,
			procedimento: "Mastectomia subcutânea e inclusão da prótese"
		},
		{
			codigo: 30602173,
			procedimento: "Mastoplastia em mama oposta após reconstrução da contralateral"
		},
		{
			codigo: 30602181,
			procedimento: "Punção ou biópsia percutânea de agulha fina - por nódulo (máximo de 3 nódulos por mama)"
		},
		{
			codigo: 30602190,
			procedimento: "Quadrantectomia e linfadenectomia axilar"
		},
		{
			codigo: 30602203,
			procedimento: "Quadrantectomia - ressecção segmentar"
		},
		{
			codigo: 30602211,
			procedimento: "Reconstrução da placa aréolo mamilar - unilateral"
		},
		{
			codigo: 30602238,
			procedimento: "Reconstrução mamária com retalho muscular ou miocutâneo - unilateral"
		},
		{
			codigo: 30602246,
			procedimento: "Reconstrução mamária com retalhos cutâneos regionais"
		},
		{
			codigo: 30602254,
			procedimento: "Reconstrução parcial da mama pós-quadrantectomia"
		},
		{
			codigo: 30602262,
			procedimento: "Reconstrução da mama com prótese e/ou expansor"
		},
		{
			codigo: 30602289,
			procedimento: "Ressecção do linfonodo sentinela / torácica lateral"
		},
		{
			codigo: 30602297,
			procedimento: "Ressecção do linfonodo sentinela / torácica medial"
		},
		{
			codigo: 30602300,
			procedimento: "Ressecção dos ductos principais da mama - unilateral"
		},
		{
			codigo: 30602319,
			procedimento: "Retirada da válvula após colocação de expansor permanente"
		},
		{
			codigo: 30602327,
			procedimento: "Substituição de prótese"
		},
		{
			codigo: 30602335,
			procedimento: "Biópsia percutânea com agulha grossa, em consultório"
		},
		{
			codigo: 30602343,
			procedimento: "Linfadenectomia por incisão extra-axilar"
		},
		{
			codigo: 30602351,
			procedimento: "Mamoplastia"
		},
		{
			codigo: 30701015,
			procedimento: "Abdominal ou hipogástrico - transplantes cutâneos"
		},
		{
			codigo: 30701023,
			procedimento: "Antebraço  - transplantes cutâneos"
		},
		{
			codigo: 30701031,
			procedimento: "Axilar - transplantes cutâneos"
		},
		{
			codigo: 30701040,
			procedimento: "Couro cabeludo - transplantes cutâneos"
		},
		{
			codigo: 30701058,
			procedimento: "Deltopeitoral - transplantes cutâneos"
		},
		{
			codigo: 30701066,
			procedimento: "Digitais (da face volar e látero-cubital dos dedos médio e anular da mão) - transplantes cutâneos"
		},
		{
			codigo: 30701074,
			procedimento: "Digital do hallux - transplantes cutâneos"
		},
		{
			codigo: 30701082,
			procedimento: "Dorsal do pé - transplantes cutâneos"
		},
		{
			codigo: 30701090,
			procedimento: "Escapular - transplantes cutâneos"
		},
		{
			codigo: 30701104,
			procedimento: "Femoral - transplantes cutâneos"
		},
		{
			codigo: 30701112,
			procedimento: "Fossa poplítea - transplantes cutâneos"
		},
		{
			codigo: 30701120,
			procedimento: "Inguino-cural - transplantes cutâneos"
		},
		{
			codigo: 30701139,
			procedimento: "Intercostal - transplantes cutâneos"
		},
		{
			codigo: 30701147,
			procedimento: "Interdigital da 1ª comissura dos dedos do pé - transplantes cutâneos"
		},
		{
			codigo: 30701155,
			procedimento: "Outros transplantes cutâneos"
		},
		{
			codigo: 30701163,
			procedimento: "Paraescapular"
		},
		{
			codigo: 30701171,
			procedimento: "Retroauricular"
		},
		{
			codigo: 30701180,
			procedimento: "Temporal"
		},
		{
			codigo: 30701198,
			procedimento: "Transplante cutâneo com microanastomose"
		},
		{
			codigo: 30701201,
			procedimento: "Transplante cutâneo sem microanastomose, ilha neurovascular"
		},
		{
			codigo: 30701210,
			procedimento: "Transplante miocutâneo com microanastomose"
		},
		{
			codigo: 30702011,
			procedimento: "Grande dorsal (latissimus dorsi) - transplantes músculo-cutâneos com microanastomoses vasculares"
		},
		{
			codigo: 30702020,
			procedimento: "Grande glúteo (gluteus maximus)"
		},
		{
			codigo: 30702038,
			procedimento: "Outros transplantes músculo-cutâneos"
		},
		{
			codigo: 30702046,
			procedimento: "Reto abdominal (rectus abdominis)"
		},
		{
			codigo: 30702054,
			procedimento: "Reto interno (gracilis) - transplantes músculo-cutâneos com microanastomoses vasculares"
		},
		{
			codigo: 30702062,
			procedimento: "Serrato maior (serratus) - transplantes músculo-cutâneos com microanastomoses vasculares"
		},
		{
			codigo: 30702070,
			procedimento: "Tensor da fascia lata (tensor fascia lata) - transplantes músculo-cutâneos com microanastomoses vasculares"
		},
		{
			codigo: 30702089,
			procedimento: "Trapézio (trapezius)"
		},
		{
			codigo: 30703018,
			procedimento: "Bíceps femoral (biceps femoris)"
		},
		{
			codigo: 30703026,
			procedimento: "Extensor comum dos dedos (extensor digitorum longus)"
		},
		{
			codigo: 30703034,
			procedimento: "Extensor próprio do dedo gordo (extensor hallucis longus)"
		},
		{
			codigo: 30703042,
			procedimento: "Flexor curto plantar (flexor digitorum brevis)"
		},
		{
			codigo: 30703050,
			procedimento: "Grande dorsal (latissimus dorsi) - transplantes musculares com microanastomoses vasculares"
		},
		{
			codigo: 30703069,
			procedimento: "Grande peitoral (pectoralis major)"
		},
		{
			codigo: 30703077,
			procedimento: "Músculo pédio (extensor digitorum brevis)"
		},
		{
			codigo: 30703085,
			procedimento: "Os músculos latissimus dorsi, gracilis, rectus femoris, tensor fascia lata, flexor digitorum brevis, quando transplantados com sua inervação e praticada a microneurorrafia com finalidade de restaurar função e sensibilidade, serão considerados retalhos neurovasculares livres e terão acréscimo do porte."
		},
		{
			codigo: 30703093,
			procedimento: "Outros transplantes musculares"
		},
		{
			codigo: 30703107,
			procedimento: "Primeiro radial externo (extensor carpi radialis longus)"
		},
		{
			codigo: 30703115,
			procedimento: "Reto anterior (rectus femoris)"
		},
		{
			codigo: 30703123,
			procedimento: "Reto interno (gracilis) - transplantes musculares com microanastomoses vasculares"
		},
		{
			codigo: 30703131,
			procedimento: "Sartório (sartorius)"
		},
		{
			codigo: 30703140,
			procedimento: "Semimembranoso (semimembranosus)"
		},
		{
			codigo: 30703158,
			procedimento: "Semitendinoso (semitendinosus)"
		},
		{
			codigo: 30703166,
			procedimento: "Serrato maior (serratus) - transplantes musculares com microanastomoses vasculares"
		},
		{
			codigo: 30703174,
			procedimento: "Supinador longo (brachioradialis)"
		},
		{
			codigo: 30703182,
			procedimento: "Tensor da fascia lata (tensor fascia lata) - transplantes musculares com microanastomoses vasculares"
		},
		{
			codigo: 30704014,
			procedimento: "Costela"
		},
		{
			codigo: 30704022,
			procedimento: "Ilíaco"
		},
		{
			codigo: 30704030,
			procedimento: "Osteocutâneo de ilíaco"
		},
		{
			codigo: 30704049,
			procedimento: "Osteocutâneos de costela"
		},
		{
			codigo: 30704057,
			procedimento: "Osteomusculocutâneo de costela"
		},
		{
			codigo: 30704065,
			procedimento: "Outros transplantes ósseos e osteomusculocutâneos"
		},
		{
			codigo: 30704073,
			procedimento: "Perônio ou fíbula"
		},
		{
			codigo: 30704081,
			procedimento: "Transplante ósseo vascularizado (microanastomose)"
		},
		{
			codigo: 30705010,
			procedimento: "Autotransplante de dois retalhos  musculares combinados, isolados e associados entre si, ligados por um único pedículo"
		},
		{
			codigo: 30705029,
			procedimento: "Autotransplante de dois retalhos cutâneos combinados, isolados e associados entre si, ligados por um único pedículo vascular"
		},
		{
			codigo: 30705037,
			procedimento: "Autotransplante de dois retalhos,  um  cutâneo  combinado a um muscular,  isolados  e associados entre si, ligados por um único pedículo vascular"
		},
		{
			codigo: 30705045,
			procedimento: "Autotransplante de dois retalhos, um cutâneo combinado a retalho osteomuscular, isolados e associados entre sí, ligados por um único pedículo vascular"
		},
		{
			codigo: 30705053,
			procedimento: "Autotransplante de epiplon"
		},
		{
			codigo: 30705061,
			procedimento: "Autotransplante de outros retalhos,  isolados  entre  si, e associados mediante um único pedículo vascular comuns aos retalhos"
		},
		{
			codigo: 30705070,
			procedimento: "Autotransplante de três retalhos, um cutâneo separado, combinado a outros dois retalhos musculares isolados e associados, ligados por um único pedículo vascular"
		},
		{
			codigo: 30705100,
			procedimento: "Reimplante de segmentos distais do membro superior, com ressecção segmentar"
		},
		{
			codigo: 30706017,
			procedimento: "Reimplante do membro inferior do nível médio proximal da perna até a coxa"
		},
		{
			codigo: 30706025,
			procedimento: "Reimplante do membro inferior do pé até o terço médio da perna"
		},
		{
			codigo: 30706033,
			procedimento: "Reimplante do membro superior, do nível médio do antebraço até o ombro"
		},
		{
			codigo: 30707013,
			procedimento: "Transplante articular de metatarsofalângica para a mão"
		},
		{
			codigo: 30707021,
			procedimento: "Transplante de 2º pododáctilo para mão"
		},
		{
			codigo: 30707030,
			procedimento: "Transplante de dedos do pé para a mão"
		},
		{
			codigo: 30707048,
			procedimento: "Transplante do 2º pododáctilo para o polegar"
		},
		{
			codigo: 30707056,
			procedimento: "Transplante do hallux para polegar"
		},
		{
			codigo: 30707064,
			procedimento: "Transplante de dois pododáctilos para a mão"
		},
		{
			codigo: 30709016,
			procedimento: "Instalação de halo craniano"
		},
		{
			codigo: 30709024,
			procedimento: "Tração cutânea"
		},
		{
			codigo: 30709032,
			procedimento: "Tração transesquelética (por membro)"
		},
		{
			codigo: 30710014,
			procedimento: "Retirada de fios ou pinos metálicos transósseos"
		},
		{
			codigo: 30710022,
			procedimento: "Retirada de fios, pinos, parafusos ou hastes metálicas intra-ósseas"
		},
		{
			codigo: 30710030,
			procedimento: "Retirada de placas"
		},
		{
			codigo: 30710049,
			procedimento: "Retirada de próteses de substituição de pequenas articulações"
		},
		{
			codigo: 30710057,
			procedimento: "Retirada de fixadores externos"
		},
		{
			codigo: 30710065,
			procedimento: "Retirada de prótese de substituição (grandes e médias articulações)"
		},
		{
			codigo: 30711010,
			procedimento: "Imobilizações não-gessadas (qualquer segmento)"
		},
		{
			codigo: 30711029,
			procedimento: "Imobilização de membro inferior"
		},
		{
			codigo: 30711037,
			procedimento: "Imobilização de membro superior"
		},
		{
			codigo: 30712017,
			procedimento: "Áxilo-palmar ou pendente"
		},
		{
			codigo: 30712025,
			procedimento: "Bota com ou sem salto"
		},
		{
			codigo: 30712033,
			procedimento: "Colar"
		},
		{
			codigo: 30712041,
			procedimento: "Colete"
		},
		{
			codigo: 30712050,
			procedimento: "Cruro-podálico"
		},
		{
			codigo: 30712068,
			procedimento: "Dupla abdução ou Ducroquet"
		},
		{
			codigo: 30712076,
			procedimento: "Halo-gesso"
		},
		{
			codigo: 30712084,
			procedimento: "Inguino-maleolar"
		},
		{
			codigo: 30712092,
			procedimento: "Luva"
		},
		{
			codigo: 30712106,
			procedimento: "Minerva ou Risser para escoliose"
		},
		{
			codigo: 30712114,
			procedimento: "Pelvipodálico"
		},
		{
			codigo: 30712122,
			procedimento: "Spica-gessada"
		},
		{
			codigo: 30712130,
			procedimento: "Tipo Velpeau"
		},
		{
			codigo: 30712149,
			procedimento: "Tóraco-braquial"
		},
		{
			codigo: 30713021,
			procedimento: "Biópsia óssea"
		},
		{
			codigo: 30713030,
			procedimento: "Biópsias percutânea sinovial ou de tecidos moles"
		},
		{
			codigo: 30713048,
			procedimento: "Enxertos em outras pseudartroses"
		},
		{
			codigo: 30713064,
			procedimento: "Manipulação articular sob anestesia geral"
		},
		{
			codigo: 30713072,
			procedimento: "Retirada de enxerto ósseo"
		},
		{
			codigo: 30713137,
			procedimento: "Punção articular diagnóstica ou terapêutica (infiltração) - orientada ou não por método de imagem"
		},
		{
			codigo: 30713145,
			procedimento: "Punção extra-articular diagnóstica ou terapêutica (infiltração/agulhamento seco) - orientada ou não por método de imagem"
		},
		{
			codigo: 30713153,
			procedimento: "Artroscopia para diagnóstico com ou sem biópsia sinovial"
		},
		{
			codigo: 30714010,
			procedimento: "Corpo estranho intra-articular - tratamento cirúrgico"
		},
		{
			codigo: 30714028,
			procedimento: "Corpo estranho intra-ósseo - tratamento cirúrgico"
		},
		{
			codigo: 30714036,
			procedimento: "Corpo estranho intramuscular - tratamento cirúrgico"
		},
		{
			codigo: 30715016,
			procedimento: "Artrodese da coluna com instrumentação por segmento"
		},
		{
			codigo: 30715024,
			procedimento: "Artrodese de coluna via anterior ou póstero lateral - tratamento cirúrgico"
		},
		{
			codigo: 30715032,
			procedimento: "Biópsia da coluna"
		},
		{
			codigo: 30715040,
			procedimento: "Biópsia de corpo vertebral com agulha"
		},
		{
			codigo: 30715059,
			procedimento: "Cirurgia de coluna por via endoscópica"
		},
		{
			codigo: 30715067,
			procedimento: "Cordotomia - mielotomia"
		},
		{
			codigo: 30715075,
			procedimento: "Costela cervical - tratamento cirúrgico"
		},
		{
			codigo: 30715083,
			procedimento: "Derivação lombar externa"
		},
		{
			codigo: 30715091,
			procedimento: "Descompressão medular e/ou cauda equina"
		},
		{
			codigo: 30715105,
			procedimento: "Dorso curvo / escoliose / giba costal - tratamento cirúrgico"
		},
		{
			codigo: 30715113,
			procedimento: "Espondilolistese - tratamento cirúrgico"
		},
		{
			codigo: 30715121,
			procedimento: "Fratura de coluna sem gesso - tratamento conservador"
		},
		{
			codigo: 30715130,
			procedimento: "Fratura do cóccix - redução incruenta"
		},
		{
			codigo: 30715148,
			procedimento: "Fratura do cóccix - tratamento cirúrgico"
		},
		{
			codigo: 30715156,
			procedimento: "Fratura e/ou luxação de coluna vertebral - redução incruenta"
		},
		{
			codigo: 30715164,
			procedimento: "Fraturas ou fratura-luxação de coluna - tratamento cirúrgico"
		},
		{
			codigo: 30715172,
			procedimento: "Hemivértebra - ressecção via anterior ou posterior - tratamento cirúrgico"
		},
		{
			codigo: 30715180,
			procedimento: "Hérnia de disco tóraco-lombar - tratamento cirúrgico"
		},
		{
			codigo: 30715199,
			procedimento: "Laminectomia ou laminotomia"
		},
		{
			codigo: 30715202,
			procedimento: "Microcirurgia para tumores extra-intradurais"
		},
		{
			codigo: 30715210,
			procedimento: "Osteomielite de coluna - tratamento cirúrgico"
		},
		{
			codigo: 30715229,
			procedimento: "Osteotomia de coluna vertebral - tratamento cirúrgico"
		},
		{
			codigo: 30715237,
			procedimento: "Outras afecções da coluna - tratamento incruento"
		},
		{
			codigo: 30715245,
			procedimento: "Pseudartrose de coluna - tratamento cirúrgico"
		},
		{
			codigo: 30715253,
			procedimento: "Punção liquórica"
		},
		{
			codigo: 30715261,
			procedimento: "Retirada de corpo estranho - tratamento cirúrgico"
		},
		{
			codigo: 30715270,
			procedimento: "Retirada de material de síntese - tratamento cirúrgico"
		},
		{
			codigo: 30715288,
			procedimento: "Substituição de corpo vertebral"
		},
		{
			codigo: 30715296,
			procedimento: "Tração cervical transesquelética"
		},
		{
			codigo: 30715300,
			procedimento: "Tratamento cirúrgico da cifose infantil"
		},
		{
			codigo: 30715318,
			procedimento: "Tratamento cirúrgico da lesão traumática raquimedular"
		},
		{
			codigo: 30715326,
			procedimento: "Tratamento cirúrgico das malformações craniovertebrais"
		},
		{
			codigo: 30715334,
			procedimento: "Tratamento cirúrgico do disrafismo espinhal"
		},
		{
			codigo: 30715342,
			procedimento: "Tratamento conservador do traumatismo raquimedular (por dia)"
		},
		{
			codigo: 30715350,
			procedimento: "Tratamento microcirúrgico das lesões intramedulares (tumor, malformações arteriovenosas, siringomielia, parasitoses)"
		},
		{
			codigo: 30715369,
			procedimento: "Tratamento microcirúrgico do canal vertebral estreito por segmento"
		},
		{
			codigo: 30715377,
			procedimento: "Tratamento pré-natal dos disrafismos espinhais"
		},
		{
			codigo: 30715385,
			procedimento: "Tumor ósseo vertebral - ressecção com substituição com ou sem instrumentação - tratamento cirúrgico"
		},
		{
			codigo: 30715393,
			procedimento: "Hérnia de disco cervical - tratamento cirúrgico"
		},
		{
			codigo: 30715407,
			procedimento: "Fratura de coluna com gesso - tratamento conservador"
		},
		{
			codigo: 30715423,
			procedimento: "Radiculotomia"
		},
		{
			codigo: 30717019,
			procedimento: "Artrodese ao nível do ombro - tratamento cirúrgico"
		},
		{
			codigo: 30717027,
			procedimento: "Artroplastia escápulo umeral com implante - tratamento cirúrgico"
		},
		{
			codigo: 30717035,
			procedimento: "Artrotomia glenoumeral - tratamento cirúrgico"
		},
		{
			codigo: 30717043,
			procedimento: "Biópsia cirúrgica da cintura escapular"
		},
		{
			codigo: 30717051,
			procedimento: "Deformidade (doença) Sprengel - tratamento cirúrgico"
		},
		{
			codigo: 30717060,
			procedimento: "Desarticulação ao nível do ombro - tratamento cirúrgico"
		},
		{
			codigo: 30717078,
			procedimento: "Escápula em ressalto - tratamento cirúrgico"
		},
		{
			codigo: 30717086,
			procedimento: "Fratura de cintura escapular - tratamento conservador"
		},
		{
			codigo: 30717094,
			procedimento: "Fraturas e/ou luxações e/ou avulsões - redução incruenta - em articulação escápulo-umeral e cintura escapular"
		},
		{
			codigo: 30717108,
			procedimento: "Fraturas e/ou luxações e/ou avulsões - tratamento cirúrgico - em articulação escápulo-umeral e cintura escapular"
		},
		{
			codigo: 30717116,
			procedimento: "Luxações crônicas inveteradas e recidivantes - tratamento cirúrgico - em articulação escápulo-umeral e cintura escapular"
		},
		{
			codigo: 30717124,
			procedimento: "Osteomielite ao nível da cintura escapular - tratamento cirúrgico"
		},
		{
			codigo: 30717132,
			procedimento: "Pseudartroses e/ou osteotomias da cintura escapular - tratamento cirúrgico"
		},
		{
			codigo: 30717140,
			procedimento: "Ressecção parcial ou total de clavícula - tratamento cirúrgico"
		},
		{
			codigo: 30717159,
			procedimento: "Revisão cirúrgica de prótese de ombro"
		},
		{
			codigo: 30717167,
			procedimento: "Transferências musculares ao nível do ombro - tratamento cirúrgico"
		},
		{
			codigo: 30717175,
			procedimento: "Fratura de clavícula ou escápula - tratamento conservador"
		},
		{
			codigo: 30718015,
			procedimento: "Amputação ao nível do braço - tratamento cirúrgico"
		},
		{
			codigo: 30718023,
			procedimento: "Biópsia cirúrgica do úmero"
		},
		{
			codigo: 30718031,
			procedimento: "Fixador externo dinâmico com ou sem alongamento - tratamento cirúrgico"
		},
		{
			codigo: 30718040,
			procedimento: "Fratura (incluindo descolamento epifisário) - redução incruenta"
		},
		{
			codigo: 30718058,
			procedimento: "Fratura (incluindo descolamento epifisário) - tratamento cirúrgico"
		},
		{
			codigo: 30718066,
			procedimento: "Fratura de úmero - tratamento conservador"
		},
		{
			codigo: 30718074,
			procedimento: "Fraturas e pseudartroses - fixador externo - tratamento cirúrgico"
		},
		{
			codigo: 30718082,
			procedimento: "Osteomielite de úmero - tratamento cirúrgico"
		},
		{
			codigo: 30718090,
			procedimento: "Pseudartroses, osteotomias, alongamentos/encurtamentos - tratamento cirúrgico"
		},
		{
			codigo: 30718104,
			procedimento: "Osteomielite de úmero - tratamento incruento"
		},
		{
			codigo: 30719011,
			procedimento: "Artrodese - tratamento cirúrgico"
		},
		{
			codigo: 30719020,
			procedimento: "Artroplastia com implante - tratamento cirúrgico"
		},
		{
			codigo: 30719038,
			procedimento: "Artroplastias sem implante - tratamento cirúrgico"
		},
		{
			codigo: 30719046,
			procedimento: "Artrotomia de cotovelo - tratamento cirúrgico"
		},
		{
			codigo: 30719054,
			procedimento: "Biópsia cirúrgica de cotovelo"
		},
		{
			codigo: 30719062,
			procedimento: "Desarticulação ao nível do cotovelo - tratamento cirúrgico"
		},
		{
			codigo: 30719070,
			procedimento: "Fratura de cotovelo - tratamento conservador"
		},
		{
			codigo: 30719089,
			procedimento: "Fraturas / pseudartroses / artroses / com fixador externo dinâmico - tratamento cirúrgico"
		},
		{
			codigo: 30719097,
			procedimento: "Fraturas e ou luxações - redução incruenta"
		},
		{
			codigo: 30719100,
			procedimento: "Fraturas e ou luxações - tratamento cirúrgico"
		},
		{
			codigo: 30719119,
			procedimento: "Lesões ligamentares - redução incruenta"
		},
		{
			codigo: 30719127,
			procedimento: "Tendinites, sinovites e artrites - tratamento cirúrgico"
		},
		{
			codigo: 30719135,
			procedimento: "Artrodiastase - tratamento cirúrgico com fixador externo"
		},
		{
			codigo: 30720010,
			procedimento: "Abaixamento miotendinoso no antebraço"
		},
		{
			codigo: 30720028,
			procedimento: "Alongamento dos ossos do antebraço com fixador externo dinâmico - tratamento cirúrgico"
		},
		{
			codigo: 30720036,
			procedimento: "Amputação ao nível do antebraço - tratamento cirúrgico"
		},
		{
			codigo: 30720044,
			procedimento: "Biópsia cirúrgica do antebraço"
		},
		{
			codigo: 30720052,
			procedimento: "Contratura isquêmica de Volkmann - tratamento cirúrgico"
		},
		{
			codigo: 30720060,
			procedimento: "Correção de deformidade adquirida de antebraço com fixador externo"
		},
		{
			codigo: 30720079,
			procedimento: "Encurtamento segmentar dos ossos do antebraço com osteossíntese - tratamento cirúrgico"
		},
		{
			codigo: 30720087,
			procedimento: "Fratura do antebraço - tratamento conservador"
		},
		{
			codigo: 30720095,
			procedimento: "Fratura e/ou luxações (incluindo descolamento epifisário cotovelo-punho) - tratamento cirúrgico"
		},
		{
			codigo: 30720109,
			procedimento: "Fratura e/ou luxações (incluindo descolamento epifisário) - redução incruenta"
		},
		{
			codigo: 30720117,
			procedimento: "Fratura viciosamente consolidada de antebraço - tratamento cirúrgico"
		},
		{
			codigo: 30720125,
			procedimento: "Osteomielite dos ossos do antebraço - tratamento cirúrgico"
		},
		{
			codigo: 30720133,
			procedimento: "Pseudartroses e ou osteotomias - tratamento cirúrgico"
		},
		{
			codigo: 30720141,
			procedimento: "Ressecção da cabeça do rádio e/ ou da extremidade distal ulna - tratamento cirúrgico"
		},
		{
			codigo: 30720150,
			procedimento: "Ressecção do processo estilóide do rádio - tratamento cirúrgico"
		},
		{
			codigo: 30720168,
			procedimento: "Sinostose rádio-ulnar - tratamento cirúrgico"
		},
		{
			codigo: 30720176,
			procedimento: "Tratamento cirúrgico de fraturas com fixador externo - antebraço"
		},
		{
			codigo: 30721016,
			procedimento: "Agenesia de rádio (centralização da ulna no carpo)"
		},
		{
			codigo: 30721024,
			procedimento: "Alongamento do rádio/ulna - tratamento cirúrgico"
		},
		{
			codigo: 30721032,
			procedimento: "Artrodese entre os ossos do carpo"
		},
		{
			codigo: 30721040,
			procedimento: "Artrodese - fixador externo"
		},
		{
			codigo: 30721059,
			procedimento: "Artrodese rádio-cárpica ou do punho"
		},
		{
			codigo: 30721067,
			procedimento: "Artroplastia do punho (com implante) - tratamento cirúrgico"
		},
		{
			codigo: 30721075,
			procedimento: "Artroplastia para ossos do carpo (com implante) - tratamento cirúrgico"
		},
		{
			codigo: 30721083,
			procedimento: "Artrotomia - tratamento cirúrgico - punho"
		},
		{
			codigo: 30721091,
			procedimento: "Biópsia cirúrgica de punho"
		},
		{
			codigo: 30721105,
			procedimento: "Coto de amputação punho e antebraço - revisão"
		},
		{
			codigo: 30721113,
			procedimento: "Desarticulação do punho - tratamento cirúrgico"
		},
		{
			codigo: 30721121,
			procedimento: "Encurtamento rádio/ulnar"
		},
		{
			codigo: 30721130,
			procedimento: "Fratura de punho - tratamento conservador"
		},
		{
			codigo: 30721148,
			procedimento: "Fratura de osso do carpo - redução cirúrgica"
		},
		{
			codigo: 30721156,
			procedimento: "Fratura do carpo - redução incruenta"
		},
		{
			codigo: 30721164,
			procedimento: "Fraturas - fixador externo"
		},
		{
			codigo: 30721172,
			procedimento: "Fraturas do carpo - tratamento conservador"
		},
		{
			codigo: 30721180,
			procedimento: "Fraturas e/ou luxações do punho - redução incruenta"
		},
		{
			codigo: 30721199,
			procedimento: "Fraturas e/ou luxações do punho - tratamento cirúrgico"
		},
		{
			codigo: 30721202,
			procedimento: "Luxação do carpo - redução incruenta"
		},
		{
			codigo: 30721210,
			procedimento: "Pseudartroses - tratamento cirúrgico"
		},
		{
			codigo: 30721229,
			procedimento: "Ressecção de osso do carpo - tratamento cirúrgico"
		},
		{
			codigo: 30721237,
			procedimento: "Reparação ligamentar do carpo"
		},
		{
			codigo: 30721245,
			procedimento: "Sinovectomia de punho - tratamento cirúrgico"
		},
		{
			codigo: 30721253,
			procedimento: "Transposição do rádio para ulna"
		},
		{
			codigo: 30722012,
			procedimento: "Abscesso de mão e dedos - tenossinovites / espaços palmares / dorsais e comissurais - tratamento cirúrgico"
		},
		{
			codigo: 30722039,
			procedimento: "Abscessos de dedo (drenagem) - tratamento cirúrgico"
		},
		{
			codigo: 30722047,
			procedimento: "Alongamento/transporte ósseo com fixador externo"
		},
		{
			codigo: 30722055,
			procedimento: "Alongamentos tendinosos de mão"
		},
		{
			codigo: 30722063,
			procedimento: "Amputação ao nível dos metacarpianos - tratamento cirúrgico"
		},
		{
			codigo: 30722071,
			procedimento: "Amputação de dedo (cada) - tratamento cirúrgico"
		},
		{
			codigo: 30722080,
			procedimento: "Amputação transmetacarpiana"
		},
		{
			codigo: 30722098,
			procedimento: "Amputação transmetacarpiana com transposição de dedo"
		},
		{
			codigo: 30722101,
			procedimento: "Aponevrose palmar (ressecção) - tratamento cirúrgico"
		},
		{
			codigo: 30722110,
			procedimento: "Artrodese interfalangeana / metacarpofalangeana -  tratamento cirúrgico"
		},
		{
			codigo: 30722128,
			procedimento: "Artroplastia com implante na mão (MF e IF) múltipla"
		},
		{
			codigo: 30722136,
			procedimento: "Artroplastia com implante na mão (MF ou IF)"
		},
		{
			codigo: 30722144,
			procedimento: "Artroplastia interfalangeana / metacarpofalangeana - tratamento cirúrgico"
		},
		{
			codigo: 30722152,
			procedimento: "Artrotomia ao nível da mão -  tratamento cirúrgico"
		},
		{
			codigo: 30722160,
			procedimento: "Biópsia cirúrgica dos ossos da mão"
		},
		{
			codigo: 30722179,
			procedimento: "Bridas congênitas - tratamento cirúrgico"
		},
		{
			codigo: 30722209,
			procedimento: "Capsulectomias múltiplas MF ou IF"
		},
		{
			codigo: 30722217,
			procedimento: "Capsulectomias única MF e IF"
		},
		{
			codigo: 30722225,
			procedimento: "Centralização da ulna (tratamento da mão torta radial)"
		},
		{
			codigo: 30722233,
			procedimento: "Contratura isquêmica de mão - tratamento cirúrgico"
		},
		{
			codigo: 30722241,
			procedimento: "Coto de amputação digital - revisão"
		},
		{
			codigo: 30722250,
			procedimento: "Dedo colo de cisne - tratamento cirúrgico"
		},
		{
			codigo: 30722268,
			procedimento: "Dedo em botoeira - tratamento cirúrgico"
		},
		{
			codigo: 30722276,
			procedimento: "Dedo em gatilho, capsulotomia / fasciotomia - tratamento cirúrgico"
		},
		{
			codigo: 30722284,
			procedimento: "Dedo em martelo - tratamento cirúrgico"
		},
		{
			codigo: 30722292,
			procedimento: "Dedo em martelo - tratamento conservador"
		},
		{
			codigo: 30722306,
			procedimento: "Enxerto ósseo (perda de substância) - tratamento cirúrgico"
		},
		{
			codigo: 30722314,
			procedimento: "Exploração cirúrgica de tendão de mão"
		},
		{
			codigo: 30722322,
			procedimento: "Falangização"
		},
		{
			codigo: 30722330,
			procedimento: "Fixador externo em cirurgia da mão"
		},
		{
			codigo: 30722349,
			procedimento: "Fratura de falanges - tratamento conservador"
		},
		{
			codigo: 30722357,
			procedimento: "Fratura de Bennett - redução incruenta"
		},
		{
			codigo: 30722365,
			procedimento: "Fratura de Bennett - tratamento cirúrgico"
		},
		{
			codigo: 30722373,
			procedimento: "Fratura de osso da mão - tratamento conservador"
		},
		{
			codigo: 30722381,
			procedimento: "Fratura de metacarpiano - tratamento conservador"
		},
		{
			codigo: 30722390,
			procedimento: "Fratura/artrodese com fixador externo"
		},
		{
			codigo: 30722403,
			procedimento: "Fraturas de falanges ou metacarpianos - redução incruenta"
		},
		{
			codigo: 30722411,
			procedimento: "Fraturas de falanges ou metacarpianos - tratamento cirúrgico com fixação"
		},
		{
			codigo: 30722420,
			procedimento: "Fraturas e/ou luxações de falanges (interfalangeanas) - redução incruenta"
		},
		{
			codigo: 30722438,
			procedimento: "Fraturas e/ou luxações de falanges (interfalangeanas) - tratamento cirúrgico"
		},
		{
			codigo: 30722446,
			procedimento: "Fraturas e/ou luxações de metacarpianos - redução incruenta"
		},
		{
			codigo: 30722454,
			procedimento: "Gigantismo ao nível da mão - tratamento cirúrgico"
		},
		{
			codigo: 30722462,
			procedimento: "Lesões ligamentares agudas da mão - reparação cirúrgica"
		},
		{
			codigo: 30722470,
			procedimento: "Lesões ligamentares crônicas da mão - reparação cirúrgica"
		},
		{
			codigo: 30722489,
			procedimento: "Ligamentoplastia com âncora"
		},
		{
			codigo: 30722497,
			procedimento: "Luxação metacarpofalangeana - redução incruenta"
		},
		{
			codigo: 30722500,
			procedimento: "Luxação metacarpofalangeana - tratamento cirúrgico"
		},
		{
			codigo: 30722519,
			procedimento: "Osteomielite ao nível da mão - tratamento cirúrgico"
		},
		{
			codigo: 30722527,
			procedimento: "Osteossíntese de fratura de falange e metacarpeana com fixação externa"
		},
		{
			codigo: 30722535,
			procedimento: "Osteossíntese de fratura de falange e metacarpeana com uso de miniparafuso"
		},
		{
			codigo: 30722543,
			procedimento: "Perda de substância da mão (reparação) - tratamento cirúrgico"
		},
		{
			codigo: 30722551,
			procedimento: "Plástica ungueal"
		},
		{
			codigo: 30722560,
			procedimento: "Policização ou transferência digital"
		},
		{
			codigo: 30722578,
			procedimento: "Polidactilia articulada - tratamento cirúrgico"
		},
		{
			codigo: 30722586,
			procedimento: "Polidactilia não articulada - tratamento cirúrgico"
		},
		{
			codigo: 30722594,
			procedimento: "Prótese (implante) para ossos do carpo"
		},
		{
			codigo: 30722608,
			procedimento: "Pseudartrose com perda de substâncias de metacarpiano e falanges"
		},
		{
			codigo: 30722616,
			procedimento: "Pseudartrose do escafóide - tratamento cirúrgico"
		},
		{
			codigo: 30722624,
			procedimento: "Pseudartrose dos ossos da mão - tratamento cirúrgico"
		},
		{
			codigo: 30722632,
			procedimento: "Reconstrução da falange com retalho homodigital"
		},
		{
			codigo: 30722640,
			procedimento: "Reconstrução de leito ungueal"
		},
		{
			codigo: 30722659,
			procedimento: "Reconstrução do polegar com retalho ilhado osteocutâneo antebraquial"
		},
		{
			codigo: 30722667,
			procedimento: "Reimplante de dois dedos da mão"
		},
		{
			codigo: 30722675,
			procedimento: "Reimplante do membro superior nível transmetacarpiano até o terço distal do antebraço"
		},
		{
			codigo: 30722683,
			procedimento: "Reimplante do polegar"
		},
		{
			codigo: 30722691,
			procedimento: "Reparações cutâneas com retalho ilhado antebraquial invertido"
		},
		{
			codigo: 30722705,
			procedimento: "Ressecção 1ª fileira dos ossos do carpo"
		},
		{
			codigo: 30722713,
			procedimento: "Ressecção de cisto sinovial"
		},
		{
			codigo: 30722721,
			procedimento: "Retração cicatricial de mais de um dedo, sem comprometimento tendinoso - tratamento cirúrgico"
		},
		{
			codigo: 30722730,
			procedimento: "Retração cicatricial de um dedo sem comprometimento tendinoso - tratamento cirúrgico"
		},
		{
			codigo: 30722748,
			procedimento: "Retração cicatricial dos dedos com lesão tendínea - tratamento cirúrgico"
		},
		{
			codigo: 30722756,
			procedimento: "Revascularização  do  polegar  ou  outro  dedo"
		},
		{
			codigo: 30722764,
			procedimento: "Roturas do aparelho extensor de dedo - redução incruenta"
		},
		{
			codigo: 30722772,
			procedimento: "Roturas tendino-ligamentares da mão (mais que 1) - tratamento cirúrgico"
		},
		{
			codigo: 30722780,
			procedimento: "Sequestrectomias"
		},
		{
			codigo: 30722799,
			procedimento: "Sindactilia de 2 dígitos - tratamento cirúrgico"
		},
		{
			codigo: 30722802,
			procedimento: "Sindactilia múltipla - tratamento cirúrgico"
		},
		{
			codigo: 30722810,
			procedimento: "Sinovectomia da mão (1 articulação)"
		},
		{
			codigo: 30722829,
			procedimento: "Sinovectomia da mão (múltiplas)"
		},
		{
			codigo: 30722845,
			procedimento: "Transposição de dedo - tratamento cirúrgico"
		},
		{
			codigo: 30722853,
			procedimento: "Tratamento cirúrgico da polidactilia múltipla e/ou complexa"
		},
		{
			codigo: 30722861,
			procedimento: "Tratamento cirúrgico da sindactilia múltipla com emprego de expansor - por estágio"
		},
		{
			codigo: 30722870,
			procedimento: "Tratamento da doença de Kiembuck com transplante vascularizado"
		},
		{
			codigo: 30722888,
			procedimento: "Tratamento da pseudoartrose do escafóide com transplante ósseo vascularizado e fixação com micro parafuso"
		},
		{
			codigo: 30722900,
			procedimento: "Roturas do aparelho extensor de dedo - tratamento conservador"
		},
		{
			codigo: 30722918,
			procedimento: "Rotura do aparelho extensor do dedo - tratamento cirúrgico"
		},
		{
			codigo: 30723019,
			procedimento: "Biópsia cirúrgica de cintura pélvica"
		},
		{
			codigo: 30723027,
			procedimento: "Desarticulação interílio abdominal - tratamento cirúrgico"
		},
		{
			codigo: 30723035,
			procedimento: "Fratura da cintura pélvica - tratamento conservador"
		},
		{
			codigo: 30723043,
			procedimento: "Fratura/luxação com fixador externo - tratamento cirúrgico"
		},
		{
			codigo: 30723051,
			procedimento: "Fraturas e/ou luxações do anel pélvico (com uma ou mais abordagens) - tratamento cirúrgico"
		},
		{
			codigo: 30723060,
			procedimento: "Fraturas e/ou luxações do anel pélvico - redução incruenta"
		},
		{
			codigo: 30723078,
			procedimento: "Osteomielite  ao nível da pelve - tratamento cirúrgico"
		},
		{
			codigo: 30723086,
			procedimento: "Osteotomias / artrodeses - tratamento cirúrgico"
		},
		{
			codigo: 30723094,
			procedimento: "Fratura de pelve sem aparelho pelve-podálico - tratamento conservador"
		},
		{
			codigo: 30723108,
			procedimento: "Fratura e/ou luxação de anel pélvico - tratamento conservador"
		},
		{
			codigo: 30723116,
			procedimento: "Fratura ou disjunção ao nível da pelve - tratamento conservador com gesso"
		},
		{
			codigo: 30723124,
			procedimento: "Fratura ou disjunção ao nível da pelve - tratamento conservador sem gesso"
		},
		{
			codigo: 30724015,
			procedimento: "Artrite séptica  - tratamento cirúrgico - articulação coxo-femoral"
		},
		{
			codigo: 30724023,
			procedimento: "Artrodese / fratura de acetábulo (ligamentotaxia) com fixador externo"
		},
		{
			codigo: 30724031,
			procedimento: "Artrodese coxo-femoral em geral - tratamento cirúrgico"
		},
		{
			codigo: 30724040,
			procedimento: "Artrodiastase de quadril"
		},
		{
			codigo: 30724058,
			procedimento: "Artroplastia (qualquer técnica ou versão de quadril) - tratamento cirúrgico"
		},
		{
			codigo: 30724066,
			procedimento: "Artroplastia de quadril infectada (retirada dos componentes) - tratamento cirúrgico"
		},
		{
			codigo: 30724074,
			procedimento: "Artroplastia de ressecção do quadril (Girdlestone) - tratamento cirúrgico"
		},
		{
			codigo: 30724082,
			procedimento: "Artroplastia parcial do quadril (tipo Thompson ou qualquer técnica) - tratamento cirúrgico"
		},
		{
			codigo: 30724090,
			procedimento: "Artrotomia de quadril infectada (incisão e drenagem de artrite séptica) sem retirada de componente - tratamento cirúrgico"
		},
		{
			codigo: 30724104,
			procedimento: "Artrotomia coxo-femoral - tratamento cirúrgico"
		},
		{
			codigo: 30724112,
			procedimento: "Biópsia cirúrgica coxo-femoral"
		},
		{
			codigo: 30724120,
			procedimento: "Desarticulação coxo-femoral - tratamento cirúrgico"
		},
		{
			codigo: 30724139,
			procedimento: "Epifisiodese com abaixamento do grande trocanter - tratamento cirúrgico"
		},
		{
			codigo: 30724147,
			procedimento: "Epifisiolistese proximal de fêmur (fixação \"in situ\") - tratamento cirúrgico"
		},
		{
			codigo: 30724155,
			procedimento: "Fratura de acetábulo (com uma ou mais abordagens) - tratamento cirúrgico"
		},
		{
			codigo: 30724163,
			procedimento: "Fratura de acetábulo - redução incruenta"
		},
		{
			codigo: 30724171,
			procedimento: "Fratura e/ou luxação e/ou avulsão coxo-femoral - redução incruenta"
		},
		{
			codigo: 30724180,
			procedimento: "Fratura e/ou luxação e/ou avulsão coxo-femoral - tratamento cirúrgico"
		},
		{
			codigo: 30724198,
			procedimento: "Luxação congênita de quadril (redução cirúrgica e osteotomia) - tratamento cirúrgico"
		},
		{
			codigo: 30724201,
			procedimento: "Luxação congênita de quadril (redução cirúrgica simples) - tratamento cirúrgico"
		},
		{
			codigo: 30724210,
			procedimento: "Luxação congênita de quadril (redução incruenta com ou sem tenotomia de adutores)"
		},
		{
			codigo: 30724228,
			procedimento: "Osteotomia - fixador externo"
		},
		{
			codigo: 30724236,
			procedimento: "Osteotomias  ao  nível  do  colo ou  região trocanteriana (Sugioka, Martin, Bombelli etc) - tratamento cirúrgico"
		},
		{
			codigo: 30724244,
			procedimento: "Osteotomias supra-acetabulares (Chiari, Pemberton, \"dial\", etc) - tratamento cirúrgico"
		},
		{
			codigo: 30724252,
			procedimento: "Punção-biópsia coxo-femoral-artrocentese"
		},
		{
			codigo: 30724260,
			procedimento: "Reconstrução de quadril com fixador externo"
		},
		{
			codigo: 30724279,
			procedimento: "Revisão de artroplastias de quadril com retirada de componentes e implante de prótese"
		},
		{
			codigo: 30724287,
			procedimento: "Tratamento  de necrose  avascular  por foragem de estaqueamento associada à necrose microcirúrgica  da cabeça femoral - tratamento cirúrgico"
		},
		{
			codigo: 30725011,
			procedimento: "Alongamento / transporte ósseo / pseudoartrose com fixador externo - coxa/fêmur"
		},
		{
			codigo: 30725020,
			procedimento: "Alongamento de fêmur - tratamento cirúrgico"
		},
		{
			codigo: 30725038,
			procedimento: "Amputação ao nível da coxa - tratamento cirúrgico"
		},
		{
			codigo: 30725046,
			procedimento: "Biópsia cirúrgica de fêmur"
		},
		{
			codigo: 30725054,
			procedimento: "Correção de deformidade adquirida de fêmur com fixador externo"
		},
		{
			codigo: 30725062,
			procedimento: "Descolamento epifisário (traumático ou não) - redução incruenta"
		},
		{
			codigo: 30725070,
			procedimento: "Descolamento epifisário (traumático ou não) - tratamento cirúrgico"
		},
		{
			codigo: 30725089,
			procedimento: "Encurtamento de fêmur - tratamento cirúrgico"
		},
		{
			codigo: 30725097,
			procedimento: "Epifisiodese (por segmento) - tratamento cirúrgico"
		},
		{
			codigo: 30725100,
			procedimento: "Fratura de fêmur - tratamento conservador com gesso"
		},
		{
			codigo: 30725119,
			procedimento: "Fraturas de fêmur - redução incruenta"
		},
		{
			codigo: 30725127,
			procedimento: "Fraturas de fêmur - tratamento cirúrgico"
		},
		{
			codigo: 30725135,
			procedimento: "Fraturas,  pseudartroses,  correção  de  deformidades e  alongamentos com fixador externo dinâmico - tratamento cirúrgico"
		},
		{
			codigo: 30725143,
			procedimento: "Osteomielite de fêmur - tratamento cirúrgico"
		},
		{
			codigo: 30725151,
			procedimento: "Pseudartroses e/ou osteotomias - tratamento cirúrgico"
		},
		{
			codigo: 30725160,
			procedimento: "Tratamento cirúrgico de fraturas com fixador externo - coxa/fêmur"
		},
		{
			codigo: 30725178,
			procedimento: "Fêmur - descolamento epifisário de extremidades superior - tratamento conservador com gesso"
		},
		{
			codigo: 30725186,
			procedimento: "Fêmur - descolamento epifisário de extremidades superior - tratamento conservador sem gesso"
		},
		{
			codigo: 30725194,
			procedimento: "Fratura de extremidade superior do fêmur ou cavidade cotilóide - tratamento conservador com gesso"
		},
		{
			codigo: 30725208,
			procedimento: "Necrose asséptica da cabeça femoral - tratamento conservador"
		},
		{
			codigo: 30726018,
			procedimento: "Artrite séptica - tratamento cirúrgico - joelho"
		},
		{
			codigo: 30726026,
			procedimento: "Artrodese de joelho - tratamento cirúrgico"
		},
		{
			codigo: 30726034,
			procedimento: "Artroplastia total de joelho com implantes - tratamento cirúrgico"
		},
		{
			codigo: 30726042,
			procedimento: "Artrotomia - tratamento cirúrgico - joelho"
		},
		{
			codigo: 30726050,
			procedimento: "Biópsia cirúrgica de joelho"
		},
		{
			codigo: 30726069,
			procedimento: "Desarticulação de joelho - tratamento cirúrgico"
		},
		{
			codigo: 30726077,
			procedimento: "Epifisites e tendinites - tratamento cirúrgico"
		},
		{
			codigo: 30726085,
			procedimento: "Fratura de joelho - tratamento conservador"
		},
		{
			codigo: 30726093,
			procedimento: "Fratura e/ou luxação de patela (inclusive osteocondral) - redução incruenta"
		},
		{
			codigo: 30726107,
			procedimento: "Fratura e/ou luxação de patela - tratamento cirúrgico"
		},
		{
			codigo: 30726115,
			procedimento: "Fraturas e/ou luxações ao nível do joelho - redução incruenta"
		},
		{
			codigo: 30726123,
			procedimento: "Fraturas e/ou luxações ao nível do joelho - tratamento cirúrgico"
		},
		{
			codigo: 30726131,
			procedimento: "Lesão aguda de ligamento colateral, associada a ligamento cruzado e menisco - tratamento cirúrgico"
		},
		{
			codigo: 30726140,
			procedimento: "Lesões agudas e/ou luxações de meniscos (1 ou ambos) - tratamento cirúrgico"
		},
		{
			codigo: 30726158,
			procedimento: "Lesões complexas de joelho (fratura com lesão ligamentar e meniscal) - tratamento cirúrgico"
		},
		{
			codigo: 30726166,
			procedimento: "Lesões intrínsecas  de  joelho  (lesões  condrais,  osteocondrite dissecante, plica patológica, corpos livres, artrofitose) - tratamento cirúrgico"
		},
		{
			codigo: 30726174,
			procedimento: "Lesões ligamentares agudas - tratamento incruento"
		},
		{
			codigo: 30726182,
			procedimento: "Lesões ligamentares agudas - tratamento cirúrgico"
		},
		{
			codigo: 30726190,
			procedimento: "Lesões ligamentares periféricas crônicas - tratamento cirúrgico"
		},
		{
			codigo: 30726204,
			procedimento: "Liberação lateral e facectomias - tratamento cirúrgico"
		},
		{
			codigo: 30726212,
			procedimento: "Meniscorrafia - tratamento cirúrgico"
		},
		{
			codigo: 30726220,
			procedimento: "Osteotomias ao nível do joelho - tratamento cirúrgico"
		},
		{
			codigo: 30726239,
			procedimento: "Realinhamentos do aparelho extensor - tratamento cirúrgico"
		},
		{
			codigo: 30726247,
			procedimento: "Reconstruções ligamentares do pivot central - tratamento cirúrgico"
		},
		{
			codigo: 30726255,
			procedimento: "Revisões de artroplastia total - tratamento cirúrgico"
		},
		{
			codigo: 30726263,
			procedimento: "Revisões de realinhamentos do aparelho extensor - tratamento cirúrgico"
		},
		{
			codigo: 30726271,
			procedimento: "Revisões de reconstruções intra-articulares - tratamento cirúrgico"
		},
		{
			codigo: 30726280,
			procedimento: "Toalete cirúrgica - correção de joelho flexo - tratamento cirúrgico"
		},
		{
			codigo: 30726298,
			procedimento: "Transplantes homólogos ao nível do joelho - tratamento cirúrgico"
		},
		{
			codigo: 30726301,
			procedimento: "Tratamento cirúrgico de luxações / artrodese / contraturas com fixador externo"
		},
		{
			codigo: 30726310,
			procedimento: "Bolsa pré-patelar - ressecção"
		},
		{
			codigo: 30727014,
			procedimento: "Alongamento / transporte ósseo / pseudoartrose com fixador externo - perna"
		},
		{
			codigo: 30727022,
			procedimento: "Alongamento com fixador dinâmico - tratamento cirúrgico"
		},
		{
			codigo: 30727030,
			procedimento: "Alongamento dos ossos da perna - tratamento cirúrgico"
		},
		{
			codigo: 30727049,
			procedimento: "Amputação de perna - tratamento cirúrgico"
		},
		{
			codigo: 30727057,
			procedimento: "Biópsia cirúrgica de tíbia ou fíbula"
		},
		{
			codigo: 30727065,
			procedimento: "Correção de deformidade adquirida de tíbia com fixador externo"
		},
		{
			codigo: 30727073,
			procedimento: "Correção de deformidades congênitas na perna com fixador externo"
		},
		{
			codigo: 30727081,
			procedimento: "Encurtamento dos ossos da perna - tratamento cirúrgico"
		},
		{
			codigo: 30727090,
			procedimento: "Epifisiodese de tíbia/fíbula - tratamento cirúrgico"
		},
		{
			codigo: 30727103,
			procedimento: "Fratura de osso da perna - tratamento conservador"
		},
		{
			codigo: 30727111,
			procedimento: "Fraturas de fíbula (inclui o descolamento epifisário) - tratamento cirúrgico"
		},
		{
			codigo: 30727120,
			procedimento: "Fraturas de fíbula (inclui descolamento epifisário) - redução incruenta"
		},
		{
			codigo: 30727138,
			procedimento: "Fraturas de tíbia associada ou não a fíbula (inclui descolamento epifisário) - tratamento cirúrgico"
		},
		{
			codigo: 30727146,
			procedimento: "Fraturas de tíbia e fíbula (inclui descolamento epifisário) - redução incruenta"
		},
		{
			codigo: 30727154,
			procedimento: "Osteomielite dos ossos da perna - tratamento cirúrgico"
		},
		{
			codigo: 30727162,
			procedimento: "Osteotomias e/ou pseudartroses - tratamento cirúrgico"
		},
		{
			codigo: 30727170,
			procedimento: "Transposição de fíbula/tíbia - tratamento cirúrgico"
		},
		{
			codigo: 30727189,
			procedimento: "Tratamento cirúrgico de fraturas de tíbia com fixador externo"
		},
		{
			codigo: 30727197,
			procedimento: "Fratura de dois ossos da perna - tratamento conservador"
		},
		{
			codigo: 30728010,
			procedimento: "Amputação ao nível do tornozelo - tratamento cirúrgico"
		},
		{
			codigo: 30728029,
			procedimento: "Artrite ou osteoartrite - tratamento cirúrgico"
		},
		{
			codigo: 30728037,
			procedimento: "Artrodese (com ou sem alongamento simultâneo) com fixador externo"
		},
		{
			codigo: 30728045,
			procedimento: "Artrodese ao nível do tornozelo - tratamento cirúrgico"
		},
		{
			codigo: 30728053,
			procedimento: "Artroplastia de tornozelo (com implante) - tratamento cirúrgico"
		},
		{
			codigo: 30728061,
			procedimento: "Artrorrise do tornozelo - tratamento cirúrgico"
		},
		{
			codigo: 30728070,
			procedimento: "Artrotomia de tornozelo - tratamento cirúrgico"
		},
		{
			codigo: 30728088,
			procedimento: "Biópsia cirúrgica do tornozelo"
		},
		{
			codigo: 30728096,
			procedimento: "Fratura de tornozelo - tratamento conservador"
		},
		{
			codigo: 30728100,
			procedimento: "Fraturas / pseudartroses / artroses ao nível do tornozelo com fixador externo dinâmico - tratamento cirúrgico"
		},
		{
			codigo: 30728118,
			procedimento: "Fraturas e/ou luxações ao nível do tornozelo - redução incruenta"
		},
		{
			codigo: 30728126,
			procedimento: "Fraturas e/ou luxações ao nível do tornozelo - tratamento cirúrgico"
		},
		{
			codigo: 30728134,
			procedimento: "Lesões ligamentares agudas ao nível do tornozelo - tratamento incruento"
		},
		{
			codigo: 30728142,
			procedimento: "Lesões ligamentares agudas ao nível do tornozelo - tratamento cirúrgico"
		},
		{
			codigo: 30728150,
			procedimento: "Lesões ligamentares crônicas ao nível do tornozelo - tratamento cirúrgico"
		},
		{
			codigo: 30728169,
			procedimento: "Osteocondrite de tornozelo - tratamento cirúrgico"
		},
		{
			codigo: 30728177,
			procedimento: "Pseudartroses ou osteotomias ao nível do tornozelo - tratamento cirúrgico"
		},
		{
			codigo: 30729017,
			procedimento: "Amputação ao nível do pé - tratamento cirúrgico"
		},
		{
			codigo: 30729025,
			procedimento: "Amputação/desarticulação de pododáctilos (por segmento) - tratamento cirúrgico"
		},
		{
			codigo: 30729033,
			procedimento: "Artrite ou osteoartrite dos ossos do pé (inclui osteomielite) - tratamento cirúrgico"
		},
		{
			codigo: 30729041,
			procedimento: "Artrodese de tarso e/ou médio pé - tratamento cirúrgico"
		},
		{
			codigo: 30729050,
			procedimento: "Artrodese metatarso - falângica ou interfalângica - tratamento cirúrgico"
		},
		{
			codigo: 30729068,
			procedimento: "Biópsia cirúrgica dos ossos do pé"
		},
		{
			codigo: 30729084,
			procedimento: "Correção de deformidades do pé com fixador externo dinâmico - tratamento cirúrgico"
		},
		{
			codigo: 30729092,
			procedimento: "Correção de pé torto congênito com fixador externo"
		},
		{
			codigo: 30729106,
			procedimento: "Deformidade dos dedos - tratamento cirúrgico"
		},
		{
			codigo: 30729114,
			procedimento: "Exérese ungueal"
		},
		{
			codigo: 30729122,
			procedimento: "Fasciotomia ou ressecção de fascia plantar - tratamento cirúrgico"
		},
		{
			codigo: 30729130,
			procedimento: "Fratura de osso do pé - tratamento conservador"
		},
		{
			codigo: 30729149,
			procedimento: "Fratura e/ou luxações do pé (exceto antepé) - redução incruenta"
		},
		{
			codigo: 30729157,
			procedimento: "Fratura e/ou luxações do pé (exceto antepé) - tratamento cirúrgico"
		},
		{
			codigo: 30729165,
			procedimento: "Fraturas e/ou luxações do antepé - redução incruenta"
		},
		{
			codigo: 30729173,
			procedimento: "Fraturas e/ou luxações do antepé - tratamento cirúrgico"
		},
		{
			codigo: 30729181,
			procedimento: "Hallux valgus (um pé) - tratamento cirúrgico"
		},
		{
			codigo: 30729190,
			procedimento: "Osteotomia ou pseudartrose do tarso e médio pé - tratamento cirúrgico"
		},
		{
			codigo: 30729203,
			procedimento: "Osteotomia ou pseudartrose dos metatarsos/falanges - tratamento cirúrgico"
		},
		{
			codigo: 30729211,
			procedimento: "Osteotomias / fraturas com fixador externo"
		},
		{
			codigo: 30729220,
			procedimento: "Pé plano/pé cavo/coalisão tarsal - tratamento cirúrgico"
		},
		{
			codigo: 30729238,
			procedimento: "Pé torto congênito (um pé) - tratamento cirúrgico"
		},
		{
			codigo: 30729246,
			procedimento: "Ressecção de osso do pé - tratamento cirúrgico"
		},
		{
			codigo: 30729254,
			procedimento: "Retração cicatricial dos dedos"
		},
		{
			codigo: 30729262,
			procedimento: "Rotura do tendão de Aquiles - tratamento incruento"
		},
		{
			codigo: 30729270,
			procedimento: "Rotura do tendão de Aquiles - tratamento cirúrgico"
		},
		{
			codigo: 30729289,
			procedimento: "Tratamento cirúrgico da sindactilia complexa e /ou múltipla"
		},
		{
			codigo: 30729297,
			procedimento: "Tratamento cirúrgico da sindactilia simples"
		},
		{
			codigo: 30729300,
			procedimento: "Tratamento cirúrgico de gigantismo"
		},
		{
			codigo: 30729319,
			procedimento: "Tratamento cirúrgico de linfedema ao nível do pé"
		},
		{
			codigo: 30729327,
			procedimento: "Tratamento cirúrgico de polidactilia múltipla e/ou complexa"
		},
		{
			codigo: 30729335,
			procedimento: "Tratamento cirúrgico de polidactilia simples"
		},
		{
			codigo: 30729343,
			procedimento: "Tratamento cirúrgico do mal perfurante plantar"
		},
		{
			codigo: 30730015,
			procedimento: "Alongamento"
		},
		{
			codigo: 30730023,
			procedimento: "Biópsia de músculo"
		},
		{
			codigo: 30730031,
			procedimento: "Desbridamento cirúrgico de feridas ou extremidades"
		},
		{
			codigo: 30730040,
			procedimento: "Desinserção ou miotomia"
		},
		{
			codigo: 30730058,
			procedimento: "Dissecção muscular"
		},
		{
			codigo: 30730066,
			procedimento: "Drenagem cirúrgica do psoas"
		},
		{
			codigo: 30730074,
			procedimento: "Fasciotomia"
		},
		{
			codigo: 30730082,
			procedimento: "Fasciotomia - por compartimento"
		},
		{
			codigo: 30730090,
			procedimento: "Fasciotomias (descompressivas)"
		},
		{
			codigo: 30730104,
			procedimento: "Fasciotomias acima do punho"
		},
		{
			codigo: 30730112,
			procedimento: "Miorrafias"
		},
		{
			codigo: 30730120,
			procedimento: "Terapia por ondas de choque extracorpórea em partes moles - acompanhamento 1ª aplicação"
		},
		{
			codigo: 30730139,
			procedimento: "Terapia por ondas de choque extracorpórea em partes moles - acompanhamento reaplicações"
		},
		{
			codigo: 30730155,
			procedimento: "Transposição muscular"
		},
		{
			codigo: 30730163,
			procedimento: "Lesão ligamentar aguda - tratamento conservador"
		},
		{
			codigo: 30730171,
			procedimento: "Lesões músculo tendinosas - tratamento incruento"
		},
		{
			codigo: 30731011,
			procedimento: "Abertura de bainha tendinosa - tratamento cirúrgico"
		},
		{
			codigo: 30731020,
			procedimento: "Biópsias cirúrgicas de tendões, bursas e sinóvias"
		},
		{
			codigo: 30731038,
			procedimento: "Bursectomia - tratamento cirúrgico"
		},
		{
			codigo: 30731046,
			procedimento: "Cisto sinovial - tratamento cirúrgico"
		},
		{
			codigo: 30731054,
			procedimento: "Encurtamento de tendão - tratamento cirúrgico"
		},
		{
			codigo: 30731062,
			procedimento: "Sinovectomia - tratamento cirúrgico"
		},
		{
			codigo: 30731070,
			procedimento: "Tenoartroplastia para ossos do carpo"
		},
		{
			codigo: 30731089,
			procedimento: "Tenodese"
		},
		{
			codigo: 30731097,
			procedimento: "Tenólise no túnel osteofibroso"
		},
		{
			codigo: 30731100,
			procedimento: "Tenólise/tendonese - tratamento cirúrgico"
		},
		{
			codigo: 30731119,
			procedimento: "Tenoplastia / enxerto de tendão - tratamento cirúrgico"
		},
		{
			codigo: 30731127,
			procedimento: "Tenoplastia de tendão em outras regiões"
		},
		{
			codigo: 30731135,
			procedimento: "Tenorrafia múltipla em outras regiões"
		},
		{
			codigo: 30731143,
			procedimento: "Tenorrafia no túnel osteofibroso - mais de 2 dígitos"
		},
		{
			codigo: 30731151,
			procedimento: "Tenorrafia no túnel osteofibroso até 2 dígitos"
		},
		{
			codigo: 30731160,
			procedimento: "Tenorrafia única em outras regiões"
		},
		{
			codigo: 30731178,
			procedimento: "Tenossinovectomia de mão ou punho"
		},
		{
			codigo: 30731186,
			procedimento: "Tenossinovites estenosantes - tratamento cirúrgico"
		},
		{
			codigo: 30731194,
			procedimento: "Tenossinovites infecciosas - drenagem"
		},
		{
			codigo: 30731208,
			procedimento: "Tenotomia"
		},
		{
			codigo: 30731216,
			procedimento: "Transposição de mais de 1 tendão - tratamento cirúrgico"
		},
		{
			codigo: 30731224,
			procedimento: "Transposição única de tendão"
		},
		{
			codigo: 30731232,
			procedimento: "Tumores de tendão ou sinovial - tratamento cirúrgico"
		},
		{
			codigo: 30731240,
			procedimento: "Alongamento de tendões - tratamento cruento"
		},
		{
			codigo: 30731259,
			procedimento: "Rotura de tendão de aquiles - tratamento conservador"
		},
		{
			codigo: 30732018,
			procedimento: "Curetagem ou ressecção em bloco de tumor com reconstrução e enxerto vascularizado"
		},
		{
			codigo: 30732026,
			procedimento: "Enxerto ósseo"
		},
		{
			codigo: 30732034,
			procedimento: "Ressecção da lesão com cimentação e osteosíntese"
		},
		{
			codigo: 30732042,
			procedimento: "Revisão de endoprótese"
		},
		{
			codigo: 30732050,
			procedimento: "Terapia por ondas de choque extracorpórea em partes ósseas - acompanhamento 1ª aplicação"
		},
		{
			codigo: 30732069,
			procedimento: "Terapia por ondas de choque extracorpórea em partes ósseas - acompanhamento reaplicações"
		},
		{
			codigo: 30732085,
			procedimento: "Tumor ósseo (ressecção com substituição)"
		},
		{
			codigo: 30732093,
			procedimento: "Tumor ósseo (ressecção e artrodese)"
		},
		{
			codigo: 30732107,
			procedimento: "Tumor ósseo (ressecção e cimento)"
		},
		{
			codigo: 30732115,
			procedimento: "Tumor ósseo (ressecção e enxerto)"
		},
		{
			codigo: 30732123,
			procedimento: "Tumor ósseo (ressecção segmentar)"
		},
		{
			codigo: 30732131,
			procedimento: "Tumor ósseo (ressecção simples)"
		},
		{
			codigo: 30733014,
			procedimento: "Sinovectomia total  - procedimento videoartroscópico de joelho"
		},
		{
			codigo: 30733022,
			procedimento: "Sinovectomia parcial ou subtotal - procedimento videoartroscópico de joelho"
		},
		{
			codigo: 30733030,
			procedimento: "Condroplastia (com remoção de corpos livres) - procedimento videoartroscópico de joelho"
		},
		{
			codigo: 30733049,
			procedimento: "Osteocondroplastia - estabilização, ressecção e/ou plastia #  - procedimento videoartroscópico de joelho"
		},
		{
			codigo: 30733057,
			procedimento: "Meniscectomia - um menisco - procedimento videoartroscópico de joelho"
		},
		{
			codigo: 30733065,
			procedimento: "Reparo ou sutura de um menisco - procedimento videoartroscópico de joelho"
		},
		{
			codigo: 30733073,
			procedimento: "Reconstrução, retencionamento ou reforço do ligamento cruzado anterior ou posterior #  - procedimento videoartroscópico de joelho"
		},
		{
			codigo: 30733081,
			procedimento: "Fratura com redução e/ou estabilização da superfície articular - um compartimento #  - procedimento videoartroscópico de joelho"
		},
		{
			codigo: 30733090,
			procedimento: "Tratamento cirúrgico da artrofibrose #  - procedimento videoartroscópico de joelho"
		},
		{
			codigo: 30733103,
			procedimento: "Instabilidade femoro-patelar, release lateral da patela, retencionamento, reforço ou reconstrução do ligamento patelo-femoral medial #  - procedimento videoartroscópico de joelho"
		},
		{
			codigo: 30734010,
			procedimento: "Sinovectomia total - procedimento videoartroscópico de tornozelo"
		},
		{
			codigo: 30734029,
			procedimento: "Sinovectomia parcial ou subtotal - procedimento videoartroscópico de tornozelo"
		},
		{
			codigo: 30734037,
			procedimento: "Condroplastia (com remoção de corpos livres) - procedimento videoartroscópico de tornozelo"
		},
		{
			codigo: 30734045,
			procedimento: "Osteocondroplastia - estabilização, ressecção e ou plastia (enxertia) # - procedimento videoartroscópico de tornozelo"
		},
		{
			codigo: 30734053,
			procedimento: "Reconstrução, retencionamento ou reforço de ligamento - procedimento videoartroscópico de tornozelo"
		},
		{
			codigo: 30734061,
			procedimento: "Fraturas - redução e estabilização de cada superfície - procedimento videoartroscópico de tornozelo"
		},
		{
			codigo: 30735017,
			procedimento: "Sinovectomia total - procedimento videoartroscópico de ombro"
		},
		{
			codigo: 30735025,
			procedimento: "Sinovectomia parcial ou subtotal  - procedimento videoartroscópico de ombro"
		},
		{
			codigo: 30735033,
			procedimento: "Acromioplastia - procedimento videoartroscópico de ombro"
		},
		{
			codigo: 30735041,
			procedimento: "Lesão labral - procedimento videoartroscópico de ombro"
		},
		{
			codigo: 30735050,
			procedimento: "Luxação gleno-umeral - procedimento videoartroscópico de ombro"
		},
		{
			codigo: 30735068,
			procedimento: "Ruptura do manguito rotador - procedimento videoartroscópico de ombro"
		},
		{
			codigo: 30735076,
			procedimento: "Instabilidade multidirecional - procedimento videoartroscópico de ombro"
		},
		{
			codigo: 30735084,
			procedimento: "Ressecção lateral da clavícula - procedimento videoartroscópico de ombro"
		},
		{
			codigo: 30735092,
			procedimento: "Tenotomia da porção longa do bíceps - procedimento videoartroscópico de ombro"
		},
		{
			codigo: 30736013,
			procedimento: "Sinovectomia  total - procedimento videoartroscópico de cotovelo"
		},
		{
			codigo: 30736021,
			procedimento: "Sinovectomia parcial ou subtotal - procedimento videoartroscópico de cotovelo"
		},
		{
			codigo: 30736030,
			procedimento: "Condroplastia (com remoção de corpos livres) - procedimento videoartroscópico de cotovelo"
		},
		{
			codigo: 30736048,
			procedimento: "Osteocondroplastia - estabilização, ressecção e/ou plastia (enxertia) # - procedimento videoartroscópico de cotovelo"
		},
		{
			codigo: 30736056,
			procedimento: "Reconstrução, retencionamento ou reforço de ligamento #  - procedimento videoartroscópico de cotovelo"
		},
		{
			codigo: 30736064,
			procedimento: "Fraturas: redução e estabilização para cada superfície - procedimento videoartroscópico de cotovelo"
		},
		{
			codigo: 30737010,
			procedimento: "Sinovectomia total - procedimento videoartroscópico de punho e túnel do carpo"
		},
		{
			codigo: 30737028,
			procedimento: "Sinovectomia parcial ou subtotal  - procedimento videoartroscópico de punho e túnel do carpo"
		},
		{
			codigo: 30737036,
			procedimento: "Condroplastia (com remoção de corpos livres) - procedimento videoartroscópico de punho e túnel do carpo"
		},
		{
			codigo: 30737044,
			procedimento: "Osteocondroplastia - estabilização, ressecção e/ou plastia (enxertia) - procedimento videoartroscópico de punho e túnel do carpo"
		},
		{
			codigo: 30737052,
			procedimento: "Reconstrução, retencionamento ou reforço de ligamento ou reparo de cartilagem triangular # - procedimento videoartroscópico de punho e túnel do carpo"
		},
		{
			codigo: 30737060,
			procedimento: "Fraturas - redução e estabilização de cada superfície - procedimento videoartroscópico de punho e túnel do carpo"
		},
		{
			codigo: 30737079,
			procedimento: "Túnel do carpo - descompressão - procedimento videoartroscópico de punho e túnel do carpo"
		},
		{
			codigo: 30738016,
			procedimento: "Sinovectomia total - procedimento videoartroscópico de coxofemoral"
		},
		{
			codigo: 30738024,
			procedimento: "Sinovectomia parcial e/ou remoção de corpos livres - procedimento videoartroscópico de coxofemoral"
		},
		{
			codigo: 30738032,
			procedimento: "Desbridamento do labrum ou ligamento redondo com ou sem condroplastia - procedimento videoartroscópico de coxofemoral"
		},
		{
			codigo: 30738040,
			procedimento: "Tratamento do impacto femoro-acetabular - procedimento videoartroscópico de coxofemoral"
		},
		{
			codigo: 30738059,
			procedimento: "Condroplastia com sutura labral - procedimento videoartroscópico de coxofemoral"
		},
		{
			codigo: 30801010,
			procedimento: "Colocação de órtese traqueal, traqueobrônquica ou brônquica, por via endoscópica (tubo de silicone ou metálico)"
		},
		{
			codigo: 30801028,
			procedimento: "Colocação de prótese traqueal ou traqueobrônquica (qualquer via)"
		},
		{
			codigo: 30801036,
			procedimento: "Fechamento de fístula tráqueo-cutânea"
		},
		{
			codigo: 30801044,
			procedimento: "Punção traqueal"
		},
		{
			codigo: 30801052,
			procedimento: "Ressecção carinal (traqueobrônquica)"
		},
		{
			codigo: 30801060,
			procedimento: "Ressecção de tumor traqueal"
		},
		{
			codigo: 30801079,
			procedimento: "Traqueoplastia (qualquer via)"
		},
		{
			codigo: 30801087,
			procedimento: "Traqueorrafia (qualquer via)"
		},
		{
			codigo: 30801095,
			procedimento: "Traqueostomia"
		},
		{
			codigo: 30801109,
			procedimento: "Traqueostomia com colocação de órtese traqueal ou traqueobrônquica por via cervical"
		},
		{
			codigo: 30801117,
			procedimento: "Traqueostomia mediastinal"
		},
		{
			codigo: 30801133,
			procedimento: "Plastia de traqueostoma"
		},
		{
			codigo: 30801141,
			procedimento: "Traqueotomia ou fechamento cirúrgico"
		},
		{
			codigo: 30801150,
			procedimento: "Troca de prótese tráqueo-esofágica"
		},
		{
			codigo: 30801168,
			procedimento: "Ressecção de tumor traqueal por videotoracoscopia"
		},
		{
			codigo: 30801176,
			procedimento: "Traqueorrafia por videotoracoscopia"
		},
		{
			codigo: 30801184,
			procedimento: "Traqueostomia com retirada de corpo estranho"
		},
		{
			codigo: 30802016,
			procedimento: "Broncoplastia e/ou arterioplastia"
		},
		{
			codigo: 30802024,
			procedimento: "Broncotomia e/ou broncorrafia"
		},
		{
			codigo: 30802032,
			procedimento: "Colocação de molde brônquico por toracotomia"
		},
		{
			codigo: 30802040,
			procedimento: "Broncoplastia e/ou arterioplastia por videotoracoscopia"
		},
		{
			codigo: 30802059,
			procedimento: "Broncotomia e/ou broncorrafia por videotoracoscopia"
		},
		{
			codigo: 30803012,
			procedimento: "Bulectomia unilateral"
		},
		{
			codigo: 30803020,
			procedimento: "Cirurgia redutora do volume pulmonar unilateral (qualquer técnica)"
		},
		{
			codigo: 30803039,
			procedimento: "Cisto pulmonar congênito - tratamento cirúrgico"
		},
		{
			codigo: 30803047,
			procedimento: "Correção de fístula bronco-pleural (qualquer técnica)"
		},
		{
			codigo: 30803055,
			procedimento: "Drenagem tubular aberta de cavidade pulmonar"
		},
		{
			codigo: 30803063,
			procedimento: "Embolectomia pulmonar"
		},
		{
			codigo: 30803071,
			procedimento: "Lobectomia por malformação pulmonar"
		},
		{
			codigo: 30803080,
			procedimento: "Lobectomia pulmonar"
		},
		{
			codigo: 30803098,
			procedimento: "Metastasectomia pulmonar unilateral (qualquer técnica)"
		},
		{
			codigo: 30803101,
			procedimento: "Pneumonectomia"
		},
		{
			codigo: 30803110,
			procedimento: "Pneumonectomia de totalização"
		},
		{
			codigo: 30803128,
			procedimento: "Pneumorrafia"
		},
		{
			codigo: 30803136,
			procedimento: "Pneumostomia (cavernostomia) com costectomia e estoma cutâneo-cavitário"
		},
		{
			codigo: 30803144,
			procedimento: "Posicionamento de agulhas radiativas por toracotomia (braquiterapia)"
		},
		{
			codigo: 30803152,
			procedimento: "Segmentectomia (qualquer técnica)"
		},
		{
			codigo: 30803160,
			procedimento: "Tromboendarterectomia pulmonar"
		},
		{
			codigo: 30803179,
			procedimento: "Bulectomia unilateral por videotoracoscopia"
		},
		{
			codigo: 30803187,
			procedimento: "Cirurgia redutora do volume pulmonar unilateral  por videotoracoscopia"
		},
		{
			codigo: 30803195,
			procedimento: "Correção de fístula bronco-pleural por videotoracoscopia"
		},
		{
			codigo: 30803209,
			procedimento: "Drenagem tubular aberta de cavidade pulmonar por videotoracoscopia"
		},
		{
			codigo: 30803217,
			procedimento: "Lobectomia pulmonar por videotoracoscopia"
		},
		{
			codigo: 30803225,
			procedimento: "Metastasectomia pulmonar unilateral por videotoracoscopia"
		},
		{
			codigo: 30803233,
			procedimento: "Segmentectomia por videotoracoscopia"
		},
		{
			codigo: 30803241,
			procedimento: "Biópsia transcutânea de pulmão por agulha"
		},
		{
			codigo: 30804019,
			procedimento: "Biópsia percutânea de pleura por agulha"
		},
		{
			codigo: 30804027,
			procedimento: "Descorticação pulmonar"
		},
		{
			codigo: 30804035,
			procedimento: "Pleurectomia"
		},
		{
			codigo: 30804043,
			procedimento: "Pleurodese (qualquer técnica)"
		},
		{
			codigo: 30804051,
			procedimento: "Pleuroscopia"
		},
		{
			codigo: 30804060,
			procedimento: "Pleurostomia (aberta)"
		},
		{
			codigo: 30804086,
			procedimento: "Punção pleural"
		},
		{
			codigo: 30804094,
			procedimento: "Repleção de cavidade pleural com solução de antibiótico para tratamento de empiema"
		},
		{
			codigo: 30804108,
			procedimento: "Ressecção de tumor da pleura localizado"
		},
		{
			codigo: 30804116,
			procedimento: "Retirada de dreno tubular torácico (colocado em outro serviço)"
		},
		{
			codigo: 30804124,
			procedimento: "Tenda pleural"
		},
		{
			codigo: 30804132,
			procedimento: "Toracostomia com drenagem pleural fechada"
		},
		{
			codigo: 30804140,
			procedimento: "Tratamento operatório da hemorragia intrapleural"
		},
		{
			codigo: 30804159,
			procedimento: "Descorticação pulmonar por videotoracoscopia"
		},
		{
			codigo: 30804167,
			procedimento: "Pleurectomia por videotoracoscopia"
		},
		{
			codigo: 30804175,
			procedimento: "Pleurodese por video"
		},
		{
			codigo: 30804183,
			procedimento: "Pleuroscopia por vídeo"
		},
		{
			codigo: 30804191,
			procedimento: "Ressecção de tumor da pleura localizado por vídeo"
		},
		{
			codigo: 30804205,
			procedimento: "Tenda pleural por vídeo"
		},
		{
			codigo: 30804213,
			procedimento: "Tratamento operatório da hemorragia intrapleural por  vídeo"
		},
		{
			codigo: 30805015,
			procedimento: "Ressecção de bócio intratorácico"
		},
		{
			codigo: 30805023,
			procedimento: "Biópsia de linfonodos pré-escalênicos ou do confluente venoso"
		},
		{
			codigo: 30805031,
			procedimento: "Biópsia de tumor do mediastino (qualquer via)"
		},
		{
			codigo: 30805040,
			procedimento: "Cisto ou duplicação brônquica ou esôfagica - tratamento cirúrgico"
		},
		{
			codigo: 30805074,
			procedimento: "Ligadura de artérias brônquicas por toracotomia para controle de hemoptise"
		},
		{
			codigo: 30805082,
			procedimento: "Ligadura de ducto-torácico (qualquer via)"
		},
		{
			codigo: 30805090,
			procedimento: "Linfadenectomia mediastinal"
		},
		{
			codigo: 30805104,
			procedimento: "Mediastinoscopia, via cervical"
		},
		{
			codigo: 30805112,
			procedimento: "Mediastinotomia (via paraesternal, transesternal, cervical)"
		},
		{
			codigo: 30805120,
			procedimento: "Mediastinotomia extrapleural por via posterior"
		},
		{
			codigo: 30805139,
			procedimento: "Pericardiotomia com abertura pleuro-pericárdica (qualquer técnica)"
		},
		{
			codigo: 30805147,
			procedimento: "Ressecção de tumor de mediastino"
		},
		{
			codigo: 30805155,
			procedimento: "Timectomia (qualquer via)"
		},
		{
			codigo: 30805163,
			procedimento: "Tratamento da mediastinite (qualquer via)"
		},
		{
			codigo: 30805171,
			procedimento: "Vagotomia troncular terapêutica por toracotomia"
		},
		{
			codigo: 30805180,
			procedimento: "Biópsia de tumor do mediastino por vídeo"
		},
		{
			codigo: 30805198,
			procedimento: "Cisto ou duplicação brônquica ou esofágica – tratamento cirúrgico por vídeo"
		},
		{
			codigo: 30805201,
			procedimento: "Ligadura de artérias brônquicas para controle de hemoptise por vídeo"
		},
		{
			codigo: 30805210,
			procedimento: "Ligadura de ducto-torácico por vídeo"
		},
		{
			codigo: 30805228,
			procedimento: "Linfadenectomia mediastinal por vídeo"
		},
		{
			codigo: 30805236,
			procedimento: "Mediastinoscopia, via cervical por vídeo"
		},
		{
			codigo: 30805244,
			procedimento: "Mediastinotomia extrapleural por via posterior por vídeo"
		},
		{
			codigo: 30805252,
			procedimento: "Pericardiotomia com abertura pleuro-pericárdica por vídeo"
		},
		{
			codigo: 30805260,
			procedimento: "Ressecção de tumor de mediastino por vídeo"
		},
		{
			codigo: 30805279,
			procedimento: "Timectomia por vídeo"
		},
		{
			codigo: 30805287,
			procedimento: "Tratamento da mediastinite por vídeo"
		},
		{
			codigo: 30805295,
			procedimento: "Retirada de corpo estranho do mediastino"
		},
		{
			codigo: 30806011,
			procedimento: "Abscesso subfrênico - tratamento cirúrgico"
		},
		{
			codigo: 30806020,
			procedimento: "Eventração diafragmática - tratamento cirúrgico"
		},
		{
			codigo: 30806038,
			procedimento: "Hérnia diafragmática - tratamento cirúrgico (qualquer técnica)"
		},
		{
			codigo: 30806046,
			procedimento: "Implante de marca-passo diafragmático definitivo"
		},
		{
			codigo: 30806054,
			procedimento: "Hérnia diafragmática – tratamento cirúrgico por vídeo"
		},
		{
			codigo: 30901014,
			procedimento: "Ampliação (anel valvar, grandes vasos, átrio, ventrículo)"
		},
		{
			codigo: 30901022,
			procedimento: "Canal arterial persistente - correção cirúrgica"
		},
		{
			codigo: 30901030,
			procedimento: "Coarctação da aorta - correção cirúrgica"
		},
		{
			codigo: 30901049,
			procedimento: "Confecção de bandagem da artéria pulmonar"
		},
		{
			codigo: 30901057,
			procedimento: "Correção cirúrgica da comunicação interatrial"
		},
		{
			codigo: 30901065,
			procedimento: "Correção cirúrgica da comunicação interventricular"
		},
		{
			codigo: 30901073,
			procedimento: "Correção de cardiopatia congênita + cirurgia valvar"
		},
		{
			codigo: 30901081,
			procedimento: "Correção de cardiopatia congênita + revascularização do miocárdio"
		},
		{
			codigo: 30901090,
			procedimento: "Redirecionamento do fluxo sanguíneo (com anastomose direta, retalho, tubo) - em defeitos cardíacos congenitos"
		},
		{
			codigo: 30901103,
			procedimento: "Ressecção (infundíbulo, septo, membranas, bandas) - em defeitos cardíacos congenitos"
		},
		{
			codigo: 30901111,
			procedimento: "Transposições (vasos, câmaras) - em defeitos cardíacos congenitos"
		},
		{
			codigo: 30902010,
			procedimento: "Ampliação do anel valvar"
		},
		{
			codigo: 30902029,
			procedimento: "Cirurgia multivalvar"
		},
		{
			codigo: 30902037,
			procedimento: "Comissurotomia valvar"
		},
		{
			codigo: 30902045,
			procedimento: "Plastia valvar"
		},
		{
			codigo: 30902053,
			procedimento: "Troca valvar"
		},
		{
			codigo: 30903017,
			procedimento: "Aneurismectomia de VE"
		},
		{
			codigo: 30903025,
			procedimento: "Revascularização do miocárdio"
		},
		{
			codigo: 30903033,
			procedimento: "Revascularização do miocárdio + cirurgia valvar"
		},
		{
			codigo: 30903041,
			procedimento: "Ventriculectomia parcial - em coronariopatias"
		},
		{
			codigo: 30904013,
			procedimento: "Cárdio-estimulação transesofágica (CETE), terapêutica ou diagnóstica"
		},
		{
			codigo: 30904021,
			procedimento: "Implante de desfibrilador interno, placas e eletrodos"
		},
		{
			codigo: 30904064,
			procedimento: "Implante de estimulador cardíaco artificial multissítio"
		},
		{
			codigo: 30904080,
			procedimento: "Instalação de marca-passo epimiocárdio temporário"
		},
		{
			codigo: 30904099,
			procedimento: "Implante de marca-passo temporário à beira do leito"
		},
		{
			codigo: 30904102,
			procedimento: "Recolocação de eletrodo / gerador com ou sem troca de unidades"
		},
		{
			codigo: 30904110,
			procedimento: "Retirada do sistema (não aplicável na troca do gerador)"
		},
		{
			codigo: 30904129,
			procedimento: "Troca de gerador"
		},
		{
			codigo: 30904137,
			procedimento: "Implante de marca-passo monocameral (gerador + eletrodo atrial ou ventricular)"
		},
		{
			codigo: 30904145,
			procedimento: "Implante de marca-passo bicameral (gerador + eletrodo atrial e ventricular)"
		},
		{
			codigo: 30904153,
			procedimento: "Remoção de cabo-eletrodo de marcapasso e/ou cárdio-desfibrilador implantável com auxílio de dilatador mecânico, laser ou radiofrequência"
		},
		{
			codigo: 30904161,
			procedimento: "Implante de cardiodesfibrilador multissítio - TRC-D (gerador e eletrodos)"
		},
		{
			codigo: 30904170,
			procedimento: "Implante de gerador de eventos (Looper implantável)"
		},
		{
			codigo: 30905010,
			procedimento: "Colocação de balão intra-aórtico"
		},
		{
			codigo: 30905028,
			procedimento: "Colocação de stent na aorta sem CEC"
		},
		{
			codigo: 30905036,
			procedimento: "Instalação do circuíto de circulação extracorpórea convencional"
		},
		{
			codigo: 30905044,
			procedimento: "Instalação do circuíto de circulação extracorpórea em crianças de baixo peso (10 kg)"
		},
		{
			codigo: 30905052,
			procedimento: "Derivação cavo-atrial"
		},
		{
			codigo: 30905060,
			procedimento: "Perfusionista - em procedimentos cardíacos"
		},
		{
			codigo: 30906016,
			procedimento: "Aneurisma de aorta abdominal infra-renal"
		},
		{
			codigo: 30906024,
			procedimento: "Aneurisma de aorta abdominal supra-renal"
		},
		{
			codigo: 30906032,
			procedimento: "Aneurisma de aorta-torácica"
		},
		{
			codigo: 30906040,
			procedimento: "Aneurisma de artérias viscerais"
		},
		{
			codigo: 30906059,
			procedimento: "Aneurisma de axilar, femoral, poplítea"
		},
		{
			codigo: 30906067,
			procedimento: "Aneurisma de carótida, subclávia, ilíaca"
		},
		{
			codigo: 30906075,
			procedimento: "Aneurismas - outros"
		},
		{
			codigo: 30906083,
			procedimento: "Aneurismas torácicos ou tóraco-abdominais"
		},
		{
			codigo: 30906113,
			procedimento: "Angioplastia transluminal transoperatória - por artéria"
		},
		{
			codigo: 30906121,
			procedimento: "Artéria hipogástrica - unilateral - qualquer técnica"
		},
		{
			codigo: 30906130,
			procedimento: "Artéria mesentérica inferior - qualquer técnica"
		},
		{
			codigo: 30906148,
			procedimento: "Artéria mesentérica superior - qualquer técnica"
		},
		{
			codigo: 30906156,
			procedimento: "Artéria renal bilateral revascularização"
		},
		{
			codigo: 30906164,
			procedimento: "Cateterismo da artéria radial - para PAM"
		},
		{
			codigo: 30906172,
			procedimento: "Correção das dissecções da aorta"
		},
		{
			codigo: 30906180,
			procedimento: "Endarterectomia aorto-ilíaca"
		},
		{
			codigo: 30906199,
			procedimento: "Endarterectomia carotídea - cada segmento arterial tratado"
		},
		{
			codigo: 30906202,
			procedimento: "Endarterectomia ilíaco-femoral"
		},
		{
			codigo: 30906210,
			procedimento: "Ligadura de carótida ou ramos"
		},
		{
			codigo: 30906229,
			procedimento: "Ponte aorto-bifemoral"
		},
		{
			codigo: 30906237,
			procedimento: "Ponte aorto-biilíaca"
		},
		{
			codigo: 30906245,
			procedimento: "Ponte aorto-femoral - unilateral"
		},
		{
			codigo: 30906253,
			procedimento: "Ponte aorto-ilíaca - unilateral"
		},
		{
			codigo: 30906261,
			procedimento: "Ponte axilo-bifemoral"
		},
		{
			codigo: 30906270,
			procedimento: "Ponte axilo-femoral"
		},
		{
			codigo: 30906288,
			procedimento: "Ponte distal"
		},
		{
			codigo: 30906296,
			procedimento: "Ponte fêmoro poplítea proximal"
		},
		{
			codigo: 30906300,
			procedimento: "Ponte fêmoro-femoral cruzada"
		},
		{
			codigo: 30906318,
			procedimento: "Ponte fêmoro-femoral ipsilateral"
		},
		{
			codigo: 30906326,
			procedimento: "Ponte subclávio bifemoral"
		},
		{
			codigo: 30906334,
			procedimento: "Ponte subclávio femoral"
		},
		{
			codigo: 30906342,
			procedimento: "Pontes aorto-cervicais ou endarterectomias dos troncos supra-aórticos"
		},
		{
			codigo: 30906350,
			procedimento: "Pontes transcervicais - qualquer tipo"
		},
		{
			codigo: 30906377,
			procedimento: "Preparo de veia autóloga para remendos vasculares"
		},
		{
			codigo: 30906385,
			procedimento: "Arterioplastia da femoral profunda (profundoplastia)"
		},
		{
			codigo: 30906393,
			procedimento: "Reoperação de aorta abdominal"
		},
		{
			codigo: 30906407,
			procedimento: "Retirada de enxerto infectado em posição não aórtica"
		},
		{
			codigo: 30906415,
			procedimento: "Revascularização aorto-femoral - unilateral"
		},
		{
			codigo: 30906423,
			procedimento: "Revascularização arterial de membro superior"
		},
		{
			codigo: 30906431,
			procedimento: "Tratamento cirúrgico da isquemia cerebral"
		},
		{
			codigo: 30906440,
			procedimento: "Tratamento cirúrgico de síndrome vértebro basilar"
		},
		{
			codigo: 30906458,
			procedimento: "Tratamento cirúrgico de tumor carotídeo"
		},
		{
			codigo: 30906466,
			procedimento: "Tronco celíaco - qualquer técnica"
		},
		{
			codigo: 30907012,
			procedimento: "Cirurgia de restauração venosa com pontes em cavidades"
		},
		{
			codigo: 30907020,
			procedimento: "Cirurgia de restauração venosa com pontes nos membros"
		},
		{
			codigo: 30907039,
			procedimento: "Cura cirúrgica da impotência coeundi venosa"
		},
		{
			codigo: 30907047,
			procedimento: "Cura cirúrgica de hipertensão portal - qualquer tipo"
		},
		{
			codigo: 30907063,
			procedimento: "Escleroterapia de veias - por sessão"
		},
		{
			codigo: 30907071,
			procedimento: "Fulguração de telangiectasias (por grupo)"
		},
		{
			codigo: 30907080,
			procedimento: "Implante de filtro de veia cava"
		},
		{
			codigo: 30907098,
			procedimento: "Interrupção cirúrgica veia cava inferior"
		},
		{
			codigo: 30907101,
			procedimento: "Tratamento cirúrgico de varizes com lipodermatoesclerose ou úlcera (um membro)"
		},
		{
			codigo: 30907110,
			procedimento: "Trombectomia venosa"
		},
		{
			codigo: 30907128,
			procedimento: "Valvuloplastia ou interposição de segmento valvulado venoso"
		},
		{
			codigo: 30907136,
			procedimento: "Varizes - tratamento cirúrgico de dois membros"
		},
		{
			codigo: 30907144,
			procedimento: "Varizes - tratamento cirúrgico de um membro"
		},
		{
			codigo: 30907152,
			procedimento: "Varizes - ressecção de colaterais com anestesia local em consultório / ambulatório"
		},
		{
			codigo: 30908019,
			procedimento: "Fístula aorto-cava, reno-cava ou ílio-ilíaca"
		},
		{
			codigo: 30908027,
			procedimento: "Fístula arteriovenosa - com enxerto"
		},
		{
			codigo: 30908035,
			procedimento: "Fístula arteriovenosa cervical ou cefálica extracraniana"
		},
		{
			codigo: 30908043,
			procedimento: "Fístula arteriovenosa congênita - reintervenção"
		},
		{
			codigo: 30908051,
			procedimento: "Fístula arteriovenosa congênita - correção cirúrgica radical"
		},
		{
			codigo: 30908060,
			procedimento: "Fístula arteriovenosa congênita para redução de fluxo"
		},
		{
			codigo: 30908078,
			procedimento: "Fístula arteriovenosa direta"
		},
		{
			codigo: 30908086,
			procedimento: "Fístula arteriovenosa dos grandes vasos intratorácicos"
		},
		{
			codigo: 30908094,
			procedimento: "Fístula arteriovenosa dos membros"
		},
		{
			codigo: 30908108,
			procedimento: "Tromboembolectomia de fístula arteriovenosa"
		},
		{
			codigo: 30909023,
			procedimento: "Hemodiálise contínua (12h)"
		},
		{
			codigo: 30909031,
			procedimento: "Hemodiálise crônica (por sessão)"
		},
		{
			codigo: 30909139,
			procedimento: "Hemodepuração de casos agudos (sessão hemodiálise, hemofiltração, hemodiafiltração isolada, plasmaferese ou hemoperfusão) - até 4 horas ou fração"
		},
		{
			codigo: 30909147,
			procedimento: "Hemodepuração de casos agudos (sessão hemodiálise, hemofiltração, hemodiafiltração isolada, plasmaferese ou hemoperfusão) - até 12 horas"
		},
		{
			codigo: 30910013,
			procedimento: "Aneurisma roto ou trombosado de aorta abdominal abaixo da artéria renal"
		},
		{
			codigo: 30910021,
			procedimento: "Aneurismas rotos ou trombosados - outros"
		},
		{
			codigo: 30910030,
			procedimento: "Aneurismas rotos ou trombosados de aorta abdominal acima da artéria renal"
		},
		{
			codigo: 30910048,
			procedimento: "Aneurismas rotos ou trombosados de artérias viscerais"
		},
		{
			codigo: 30910056,
			procedimento: "Aneurismas rotos ou trombosados de axilar, femoral, poplítea"
		},
		{
			codigo: 30910064,
			procedimento: "Aneurismas rotos ou trombosados de carótida, subclávia, ilíaca"
		},
		{
			codigo: 30910072,
			procedimento: "Aneurismas rotos ou trombosados torácicos ou tóraco-abdominais"
		},
		{
			codigo: 30910080,
			procedimento: "Embolectomia ou tromboembolectomia arterial"
		},
		{
			codigo: 30910099,
			procedimento: "Exploração vascular em traumas de outros segmentos"
		},
		{
			codigo: 30910102,
			procedimento: "Exploração vascular em traumas torácicos e abdominais"
		},
		{
			codigo: 30910110,
			procedimento: "Lesões vasculares cervicais e cérvico-torácicas"
		},
		{
			codigo: 30910129,
			procedimento: "Lesões vasculares de membro inferior ou superior - unilateral"
		},
		{
			codigo: 30910137,
			procedimento: "Lesões vasculares intra-abdominais"
		},
		{
			codigo: 30910145,
			procedimento: "Lesões vasculares traumáticas intratorácicas"
		},
		{
			codigo: 30911010,
			procedimento: "Avaliação da viabilidade miocárdica por cateter"
		},
		{
			codigo: 30911028,
			procedimento: "Avaliação fisiológica da gravidade de obstruções (cateter ou guia)"
		},
		{
			codigo: 30911036,
			procedimento: "Biópsia endomiocárdica"
		},
		{
			codigo: 30911044,
			procedimento: "Cateterismo cardíaco D e/ou E com  ou  sem  cinecoronariografia / cineangiografia  com  avaliação  de reatividade vascular pulmonar ou teste de sobrecarga hemodinânica"
		},
		{
			codigo: 30911052,
			procedimento: "Cateterismo cardíaco D e/ou E com estudo cineangiográfico e de revascularização cirúrgica do miocárdio"
		},
		{
			codigo: 30911060,
			procedimento: "Cateterismo cardíaco direito com estudo angiográfico da artéria pulmonar"
		},
		{
			codigo: 30911079,
			procedimento: "Cateterismo cardíaco E e/ou D com cineangiocoronariografia e ventriculografia"
		},
		{
			codigo: 30911087,
			procedimento: "Cateterismo cardíaco E e/ou D com cineangiocoronariografia, ventriculografia e estudo angiográfico  da aorta e/ou ramos tóraco-abdominais e/ou membros"
		},
		{
			codigo: 30911095,
			procedimento: "Cateterismo E e estudo cineangiográfico da aorta e/ou seus ramos"
		},
		{
			codigo: 30911109,
			procedimento: "Cateterização cardíaca E por via transeptal"
		},
		{
			codigo: 30911117,
			procedimento: "Estudo eletrofisiológico - mapeamento eletro-eletrônico tridimensional - do sistema de condução com ou sem ação farmacológica"
		},
		{
			codigo: 30911125,
			procedimento: "Estudo hemodinâmico das cardiopatias congênitas  estruturalmente  complexas (menos: CIA, CIV, PCA, Co, AO, estenose aórtica e pulmonar isoladas)"
		},
		{
			codigo: 30911133,
			procedimento: "Estudo hemodinâmico de cardiopatias congênitas e/ou valvopatias  com  ou  sem  cinecoronariografia  ou oximetria"
		},
		{
			codigo: 30911141,
			procedimento: "Estudo ultrassonográfico intravascular"
		},
		{
			codigo: 30911150,
			procedimento: "Mapeamento de feixes anômalos e focos ectópicos por eletrofisiologia intracavitária, com provas"
		},
		{
			codigo: 30911168,
			procedimento: "Teste de avaliação do limiar de fibrilação ventricular"
		},
		{
			codigo: 30911176,
			procedimento: "Mapeamento Eletrofisiológico Cardíaco Convencional"
		},
		{
			codigo: 30912016,
			procedimento: "Ablação de circuito arritmogênico por cateter de radiofrequência"
		},
		{
			codigo: 30912024,
			procedimento: "Angioplastia transluminal da aorta ou ramos ou da artéria pulmonar e ramos (por vaso)"
		},
		{
			codigo: 30912032,
			procedimento: "Angioplastia transluminal percutânea de múltiplos vasos, com implante de stent"
		},
		{
			codigo: 30912040,
			procedimento: "Angioplastia transluminal percutânea por balão (1 vaso)"
		},
		{
			codigo: 30912059,
			procedimento: "Atriosseptostomia por balão"
		},
		{
			codigo: 30912067,
			procedimento: "Atriosseptostomia por lâmina"
		},
		{
			codigo: 30912075,
			procedimento: "Emboloterapia"
		},
		{
			codigo: 30912083,
			procedimento: "Colocação de cateter intracavitário para monitorização hemodinâmica"
		},
		{
			codigo: 30912091,
			procedimento: "Implante de prótese intravascular na aorta/pulmonar ou ramos com ou sem angioplastia"
		},
		{
			codigo: 30912105,
			procedimento: "Implante de stent coronário com ou sem angioplastia por balão concomitante (1 vaso)"
		},
		{
			codigo: 30912113,
			procedimento: "Infusão seletiva intravascular de enzimas trombolíticas"
		},
		{
			codigo: 30912121,
			procedimento: "Oclusão percutânea de \"shunts\" intracardíacos"
		},
		{
			codigo: 30912130,
			procedimento: "Oclusão percutânea de fístula e/ou conexões sistêmico pulmonares"
		},
		{
			codigo: 30912148,
			procedimento: "Oclusão percutânea do canal arterial"
		},
		{
			codigo: 30912156,
			procedimento: "Punção saco pericárdico com introdução de cateter multipolar no espaço pericárdico"
		},
		{
			codigo: 30912164,
			procedimento: "Punção transeptal com introdução de cateter multipolar nas camaras esquerdas e/ou veias pulmonares"
		},
		{
			codigo: 30912172,
			procedimento: "Radiação ou antiproliferação intracoronária"
		},
		{
			codigo: 30912180,
			procedimento: "Recanalização arterial no IAM - angioplastia primária - com implante de stent com ou sem suporte circulatório (balão intra-órtico)"
		},
		{
			codigo: 30912199,
			procedimento: "Recanalização mecânica do IAM (angioplastia primária com balão)"
		},
		{
			codigo: 30912202,
			procedimento: "Redução miocárdica por infusão seletiva de drogas"
		},
		{
			codigo: 30912210,
			procedimento: "Retirada percutânea de corpos estranhos vasculares"
		},
		{
			codigo: 30912229,
			procedimento: "Revascularização transmiocárdica percutânea"
		},
		{
			codigo: 30912237,
			procedimento: "Tratamento percutâneo do aneurisma/dissecção da aorta"
		},
		{
			codigo: 30912245,
			procedimento: "Valvoplastia percutânea por via arterial ou venosa"
		},
		{
			codigo: 30912253,
			procedimento: "Valvoplastia percutânea por via transeptal"
		},
		{
			codigo: 30912261,
			procedimento: "Angioplastia transluminal percutânea de bifurcação e de tronco com implante de stent"
		},
		{
			codigo: 30912270,
			procedimento: "Ateromectomia rotacional, direcional, extracional ou uso de laser coronariano com ou sem angioplastia por balão, com ou sem implante de stent"
		},
		{
			codigo: 30912288,
			procedimento: "Procedimento terapêutico nas cardiopatias congênitas, exceto atriosseptostomia"
		},
		{
			codigo: 30913012,
			procedimento: "Implante de cateter venoso central por punção, para NPP, QT, Hemodepuração ou para infusão de soros/drogas"
		},
		{
			codigo: 30913020,
			procedimento: "Instalação de cateter para monitorização hemodinâmica à beira do leito (Swan-Ganz)"
		},
		{
			codigo: 30913047,
			procedimento: "Instalação de circuito para assistência mecânica circulatória prolongada (toracotomia)"
		},
		{
			codigo: 30913055,
			procedimento: "Manutenção de circuito para assistência mecânica circulatória prolongada - período de 6 horas"
		},
		{
			codigo: 30913071,
			procedimento: "Dissecção de vaso umbilical com colocação de cateter"
		},
		{
			codigo: 30913080,
			procedimento: "Dissecção de veia em RN ou lactente"
		},
		{
			codigo: 30913098,
			procedimento: "Dissecção de veia com colocação cateter venoso"
		},
		{
			codigo: 30913101,
			procedimento: "Implante cirúrgico de cateter de longa permanência para NPP, QT ou para Hemodepuração"
		},
		{
			codigo: 30913128,
			procedimento: "Retirada cirúrgica de cateter de longa permanência para NPP, QT ou para Hemodepuração"
		},
		{
			codigo: 30913144,
			procedimento: "Confecção de fístula AV para hemodiálise"
		},
		{
			codigo: 30913152,
			procedimento: "Retirada/desativação  de fístula AV para hemodiálise"
		},
		{
			codigo: 30914019,
			procedimento: "Anastomose linfovenosa"
		},
		{
			codigo: 30914027,
			procedimento: "Doenca de Hodgkin - estadiamento cirúrgico"
		},
		{
			codigo: 30914043,
			procedimento: "Linfadenectomia inguinal ou ilíaca"
		},
		{
			codigo: 30914051,
			procedimento: "Linfadenectomia cervical"
		},
		{
			codigo: 30914060,
			procedimento: "Linfadenectomia pélvica"
		},
		{
			codigo: 30914078,
			procedimento: "Linfadenectomia retroperitoneal"
		},
		{
			codigo: 30914086,
			procedimento: "Linfangioplastia"
		},
		{
			codigo: 30914094,
			procedimento: "Linfedema - ressecção total"
		},
		{
			codigo: 30914108,
			procedimento: "Linfedema genital - ressecção"
		},
		{
			codigo: 30914116,
			procedimento: "Marsupialização de linfocele"
		},
		{
			codigo: 30914124,
			procedimento: "Punção biópsia ganglionar"
		},
		{
			codigo: 30914132,
			procedimento: "Linfedema - ressecção parcial"
		},
		{
			codigo: 30914140,
			procedimento: "Linfadenectomia pélvica laparoscópica"
		},
		{
			codigo: 30914159,
			procedimento: "Linfadenectomia retroperitoneal laparoscópica"
		},
		{
			codigo: 30914167,
			procedimento: "Marsupialização laparoscópica de linfocele"
		},
		{
			codigo: 30915015,
			procedimento: "Correção cirúrgica das arritmias"
		},
		{
			codigo: 30915023,
			procedimento: "Drenagem do pericárdio"
		},
		{
			codigo: 30915031,
			procedimento: "Pericardiocentese"
		},
		{
			codigo: 30915040,
			procedimento: "Pericardiotomia / Pericardiectomia"
		},
		{
			codigo: 30915058,
			procedimento: "Drenagem do pericárdio por vídeo"
		},
		{
			codigo: 30915066,
			procedimento: "Pericardiotomia / Pericardiectomia por vídeo"
		},
		{
			codigo: 30916011,
			procedimento: "Hipotermia profunda com ou sem parada circulatória total"
		},
		{
			codigo: 30917018,
			procedimento: "Biópsia do miocárdio"
		},
		{
			codigo: 30917026,
			procedimento: "Cardiomioplastia"
		},
		{
			codigo: 30917034,
			procedimento: "Cardiotomia (ferimento, corpo estranho, exploração)"
		},
		{
			codigo: 30917042,
			procedimento: "Retirada de tumores intracardíacos"
		},
		{
			codigo: 30918014,
			procedimento: "Estudo eletrofisiológico cardíaco com ou sem sensibilização farmacológica"
		},
		{
			codigo: 30918022,
			procedimento: "Mapeamento de gatilhos ou substratos arritmogênicos por técnica eletrofisiológica com ou sem provas farmacológicas"
		},
		{
			codigo: 30918030,
			procedimento: "Mapeamento eletroanatômico tridimensional"
		},
		{
			codigo: 30918081,
			procedimento: "Ablação percutânea por cateter para tratamento de arritmias cardíacas complexas (Fibrilação atrial, Taquicardia Ventricular com modificação de cicatriz, Taquicardias Atriais Macrorreentrantes com modificaçõa de cicatriz) por energia de radiofrequência"
		},
		{
			codigo: 31001017,
			procedimento: "Atresia de esôfago com fístula traqueal - tratamento cirúrgico"
		},
		{
			codigo: 31001025,
			procedimento: "Atresia de esôfago sem fístula (dupla estomia) - tratamento cirúrgico"
		},
		{
			codigo: 31001033,
			procedimento: "Autotransplante com microcirurgia"
		},
		{
			codigo: 31001041,
			procedimento: "Esofagectomia distal com toracotomia"
		},
		{
			codigo: 31001050,
			procedimento: "Esofagectomia distal sem toracotomia"
		},
		{
			codigo: 31001068,
			procedimento: "Esofagoplastia (coloplastia)"
		},
		{
			codigo: 31001076,
			procedimento: "Esofagoplastia (gastroplastia)"
		},
		{
			codigo: 31001084,
			procedimento: "Estenose de esôfago - tratamento cirúrgico via torácica"
		},
		{
			codigo: 31001092,
			procedimento: "Faringo-laringo-esofagectomia total com ou sem toracotomia"
		},
		{
			codigo: 31001106,
			procedimento: "Fístula tráqueo esofágica - tratamento cirúrgico via cervical"
		},
		{
			codigo: 31001114,
			procedimento: "Fístula tráqueo esofágica - tratamento cirúrgico via torácica"
		},
		{
			codigo: 31001149,
			procedimento: "Reintervenção sobre a transição esôfago gástrica"
		},
		{
			codigo: 31001157,
			procedimento: "Ressecção do esôfago cervical e/ou torácico e transplante com microcirurgia"
		},
		{
			codigo: 31001165,
			procedimento: "Substituição esofágica - cólon ou tubo gástrico"
		},
		{
			codigo: 31001173,
			procedimento: "Tratamento cirúrgico das varizes esofágicas"
		},
		{
			codigo: 31001181,
			procedimento: "Tratamento cirúrgico conservador do megaesofago"
		},
		{
			codigo: 31001190,
			procedimento: "Tunelização esofágica"
		},
		{
			codigo: 31001203,
			procedimento: "Esofagorrafia cervical"
		},
		{
			codigo: 31001211,
			procedimento: "Esofagorrafia torácica"
		},
		{
			codigo: 31001220,
			procedimento: "Esofagostomia"
		},
		{
			codigo: 31001238,
			procedimento: "Tratamento cirúrgico do divertículo esofágico"
		},
		{
			codigo: 31001246,
			procedimento: "Tratamento cirúrgico do divertículo faringoesofágico"
		},
		{
			codigo: 31001254,
			procedimento: "Esofagectomia subtotal com linfadenectomia com ou sem toracotomia"
		},
		{
			codigo: 31001262,
			procedimento: "Refluxo gastroesofágico - tratamento cirúrgico (Hérnia de hiato)"
		},
		{
			codigo: 31001270,
			procedimento: "Reconstrução do esôfago cervical e torácico com transplante segmentar de intestino"
		},
		{
			codigo: 31001289,
			procedimento: "Reconstrução do esôfago cervical ou torácico, com transplante de intestino"
		},
		{
			codigo: 31001297,
			procedimento: "Dissecção do esôfago torácico (qualquer técnica)"
		},
		{
			codigo: 31001300,
			procedimento: "Esofagectomia distal com ou sem toracotomia por videolaparoscopia"
		},
		{
			codigo: 31001319,
			procedimento: "Reintervenção sobre a transição esôfago gástrica por videolaparoscopia"
		},
		{
			codigo: 31001327,
			procedimento: "Tratamento cirúrgico das varizes esofágicas por videolaparoscopia"
		},
		{
			codigo: 31001335,
			procedimento: "Tratamento cirúrgico conservador do megaesofago por videolaparoscopia"
		},
		{
			codigo: 31001343,
			procedimento: "Esofagorrafia torácica por videotoracoscopia"
		},
		{
			codigo: 31001351,
			procedimento: "Tratamento cirúrgico do divertículo esofágico por videotoracoscopia"
		},
		{
			codigo: 31001360,
			procedimento: "Refluxo gastroesofágico - tratamento cirúrgico (Hérnia de hiato) por videolaparoscopia"
		},
		{
			codigo: 31002013,
			procedimento: "Colocação de banda gástrica"
		},
		{
			codigo: 31002021,
			procedimento: "Conversão de anastomose gastrojejunal (qualquer técnica)"
		},
		{
			codigo: 31002030,
			procedimento: "Degastrogastrectomia com vagotomia"
		},
		{
			codigo: 31002048,
			procedimento: "Degastrogastrectomia sem vagotomia"
		},
		{
			codigo: 31002056,
			procedimento: "Gastrostomia confecção / fechamento"
		},
		{
			codigo: 31002064,
			procedimento: "Gastrectomia parcial com linfadenectomia"
		},
		{
			codigo: 31002072,
			procedimento: "Gastrectomia parcial com vagotomia"
		},
		{
			codigo: 31002080,
			procedimento: "Gastrectomia parcial sem vagotomia"
		},
		{
			codigo: 31002099,
			procedimento: "Gastrectomia polar superior com reconstrução jejunal com toracotomia"
		},
		{
			codigo: 31002102,
			procedimento: "Gastrectomia polar superior com reconstrução jejunal sem toracotomia"
		},
		{
			codigo: 31002110,
			procedimento: "Gastrectomia total com linfadenectomia"
		},
		{
			codigo: 31002129,
			procedimento: "Gastrectomia total via abdominal"
		},
		{
			codigo: 31002137,
			procedimento: "Gastroenteroanastomose"
		},
		{
			codigo: 31002145,
			procedimento: "Gastrorrafia"
		},
		{
			codigo: 31002153,
			procedimento: "Gastrotomia com sutura de varizes"
		},
		{
			codigo: 31002161,
			procedimento: "Gastrotomia para retirada de CE ou lesão isolada"
		},
		{
			codigo: 31002170,
			procedimento: "Gastrotomia para qualquer finalidade"
		},
		{
			codigo: 31002188,
			procedimento: "Membrana antral - tratamento cirúrgico"
		},
		{
			codigo: 31002196,
			procedimento: "Piloroplastia"
		},
		{
			codigo: 31002218,
			procedimento: "Gastroplastia para obesidade mórbida - qualquer técnica"
		},
		{
			codigo: 31002242,
			procedimento: "Tratamento cirúrgico das varizes gástricas"
		},
		{
			codigo: 31002250,
			procedimento: "Vagotomia com operação de drenagem"
		},
		{
			codigo: 31002269,
			procedimento: "Vagotomia gástrica proximal ou superseletiva com duodenoplastia (operação de drenagem)"
		},
		{
			codigo: 31002277,
			procedimento: "Vagotomia superseletiva ou vagotomia gástrica proximal"
		},
		{
			codigo: 31002285,
			procedimento: "Colocação de banda gástrica por videolaparoscopia"
		},
		{
			codigo: 31002293,
			procedimento: "Conversão de anastomose gastrojejunal por videolaparoscopia"
		},
		{
			codigo: 31002307,
			procedimento: "Gastrectomia parcial com linfadenectomia por videolaparoscopia"
		},
		{
			codigo: 31002315,
			procedimento: "Gastrectomia parcial com vagotomia por videolaparoscopia"
		},
		{
			codigo: 31002323,
			procedimento: "Gastrectomia parcial sem vagotomia por videolaparoscopia"
		},
		{
			codigo: 31002331,
			procedimento: "Gastrectomia total com linfadenectomia por videolaparoscopia"
		},
		{
			codigo: 31002340,
			procedimento: "Gastrectomia total via abdominal por videolaparoscopia"
		},
		{
			codigo: 31002358,
			procedimento: "Gastroenteroanastomose por videolaparoscopia"
		},
		{
			codigo: 31002366,
			procedimento: "Gastrotomia para retirada de CE ou lesão isolada por videolaparoscopia"
		},
		{
			codigo: 31002374,
			procedimento: "Piloroplastia por videolaparoscopia"
		},
		{
			codigo: 31002390,
			procedimento: "Gastroplastia para obesidade mórbida por videolaparoscopia"
		},
		{
			codigo: 31002404,
			procedimento: "Vagotomia gástrica proximal ou superseletiva com duodenoplastia (operação de drenagem) por videolaparoscopia"
		},
		{
			codigo: 31002412,
			procedimento: "Vagotomia superseletiva ou vagotomia gástrica proximal por videolaparoscopia"
		},
		{
			codigo: 31003010,
			procedimento: "Amputação abdômino-perineal do reto (completa)"
		},
		{
			codigo: 31003028,
			procedimento: "Amputação do reto por procidência"
		},
		{
			codigo: 31003036,
			procedimento: "Anomalia anorretal - correção via sagital posterior"
		},
		{
			codigo: 31003044,
			procedimento: "Anomalia anorretal - tratamento cirúrgico via abdômino-perineal"
		},
		{
			codigo: 31003052,
			procedimento: "Anomalia anorretal - tratamento cirúrgico via perineal"
		},
		{
			codigo: 31003060,
			procedimento: "Anorretomiomectomia"
		},
		{
			codigo: 31003079,
			procedimento: "Apendicectomia"
		},
		{
			codigo: 31003087,
			procedimento: "Apple-Peel - tratamento cirúrgico"
		},
		{
			codigo: 31003095,
			procedimento: "Atresia de cólon - tratamento cirúrgico"
		},
		{
			codigo: 31003109,
			procedimento: "Atresia de duodeno - tratamento cirúrgico"
		},
		{
			codigo: 31003117,
			procedimento: "Atresia jejunal distal ou ileal - tratamento cirúrgico"
		},
		{
			codigo: 31003125,
			procedimento: "Atresia jejunal proximal - tratamento cirúrgico"
		},
		{
			codigo: 31003133,
			procedimento: "Cirurgia de abaixamento (qualquer técnica)"
		},
		{
			codigo: 31003141,
			procedimento: "Cirurgia de acesso posterior"
		},
		{
			codigo: 31003150,
			procedimento: "Cisto mesentérico - tratamento cirúrgico"
		},
		{
			codigo: 31003168,
			procedimento: "Colectomia parcial com colostomia"
		},
		{
			codigo: 31003176,
			procedimento: "Colectomia parcial sem colostomia"
		},
		{
			codigo: 31003184,
			procedimento: "Colectomia total com íleo-reto-anastomose"
		},
		{
			codigo: 31003192,
			procedimento: "Colectomia total com ileostomia"
		},
		{
			codigo: 31003206,
			procedimento: "Colocação de sonda enteral"
		},
		{
			codigo: 31003214,
			procedimento: "Colostomia ou enterostomia"
		},
		{
			codigo: 31003230,
			procedimento: "Colotomia e colorrafia"
		},
		{
			codigo: 31003249,
			procedimento: "Distorção de volvo por laparotomia"
		},
		{
			codigo: 31003257,
			procedimento: "Distorção de volvo por via endoscópica"
		},
		{
			codigo: 31003265,
			procedimento: "Divertículo de Meckel - exérese"
		},
		{
			codigo: 31003273,
			procedimento: "Duplicação do tubo digestivo - tratamento cirúrgico"
		},
		{
			codigo: 31003281,
			procedimento: "Enterectomia segmentar"
		},
		{
			codigo: 31003290,
			procedimento: "Entero-anastomose  (qualquer segmento)"
		},
		{
			codigo: 31003303,
			procedimento: "Enterocolite necrotizante - tratamento cirúrgico"
		},
		{
			codigo: 31003311,
			procedimento: "Enteropexia (qualquer segmento)"
		},
		{
			codigo: 31003320,
			procedimento: "Enterotomia e/ou enterorrafia de qualquer segmento (por sutura ou ressecção)"
		},
		{
			codigo: 31003338,
			procedimento: "Esporão retal - ressecção"
		},
		{
			codigo: 31003346,
			procedimento: "Esvaziamento pélvico anterior ou posterior - procedimento cirúrgico"
		},
		{
			codigo: 31003354,
			procedimento: "Esvaziamento pélvico total - procedimento cirurgico"
		},
		{
			codigo: 31003362,
			procedimento: "Fecaloma - remoção manual"
		},
		{
			codigo: 31003370,
			procedimento: "Fechamento de colostomia ou enterostomia"
		},
		{
			codigo: 31003389,
			procedimento: "Fixação do reto por via abdominal"
		},
		{
			codigo: 31003397,
			procedimento: "Íleo meconial - tratamento cirúrgico"
		},
		{
			codigo: 31003427,
			procedimento: "Invaginação intestinal - ressecção"
		},
		{
			codigo: 31003435,
			procedimento: "Invaginação intestinal sem ressecção - tratamento cirúrgico"
		},
		{
			codigo: 31003451,
			procedimento: "Má-rotação intestinal - tratamento cirúrgico"
		},
		{
			codigo: 31003460,
			procedimento: "Megacólon congênito - tratamento cirúrgico"
		},
		{
			codigo: 31003478,
			procedimento: "Membrana duodenal - tratamento cirúrgico"
		},
		{
			codigo: 31003486,
			procedimento: "Pâncreas anular - tratamento cirúrgico"
		},
		{
			codigo: 31003494,
			procedimento: "Perfuração duodenal ou delgado - tratamento cirúrgico"
		},
		{
			codigo: 31003508,
			procedimento: "Piloromiotomia"
		},
		{
			codigo: 31003516,
			procedimento: "Procidência do reto - redução manual"
		},
		{
			codigo: 31003524,
			procedimento: "Proctocolectomia total"
		},
		{
			codigo: 31003532,
			procedimento: "Proctocolectomia total com reservatório ileal"
		},
		{
			codigo: 31003540,
			procedimento: "Ressecção total de intestino delgado"
		},
		{
			codigo: 31003559,
			procedimento: "Retossigmoidectomia abdominal"
		},
		{
			codigo: 31003567,
			procedimento: "Tumor anorretal - ressecção anorretal, tratamento cirúrgico"
		},
		{
			codigo: 31003575,
			procedimento: "Amputação abdômino-perineal do reto (completa) por videolaparoscopia"
		},
		{
			codigo: 31003583,
			procedimento: "Apendicectomia por videolaparoscopia"
		},
		{
			codigo: 31003591,
			procedimento: "Cirurgia de abaixamento por videolaparoscopia"
		},
		{
			codigo: 31003605,
			procedimento: "Cisto mesentérico - tratamento cirúrgico por videolaparoscopia"
		},
		{
			codigo: 31003613,
			procedimento: "Colectomia parcial com colostomia por videolaparoscopia"
		},
		{
			codigo: 31003621,
			procedimento: "Colectomia parcial sem colostomia por videolaparoscopia"
		},
		{
			codigo: 31003630,
			procedimento: "Colectomia total com íleo-reto-anastomose por videolaparoscopia"
		},
		{
			codigo: 31003648,
			procedimento: "Colectomia total com ileostomia por videolaparoscopia"
		},
		{
			codigo: 31003656,
			procedimento: "Distorção de volvo por videolaparoscopia"
		},
		{
			codigo: 31003664,
			procedimento: "Divertículo de Meckel - exérese por videolaparoscopia"
		},
		{
			codigo: 31003672,
			procedimento: "Enterectomia segmentar por videolaparoscopia"
		},
		{
			codigo: 31003680,
			procedimento: "Entero-anastomose (qualque segmento) por videolaparoscopia"
		},
		{
			codigo: 31003699,
			procedimento: "Enteropexia (qualquer segmento) por videolaparoscopia"
		},
		{
			codigo: 31003702,
			procedimento: "Esvaziamento pélvico anterior ou posterior por videolaparoscopia"
		},
		{
			codigo: 31003710,
			procedimento: "Esvaziamento pélvico total por videolaparoscopia"
		},
		{
			codigo: 31003729,
			procedimento: "Fixação do reto por via abdominal por videolaparoscopia"
		},
		{
			codigo: 31003737,
			procedimento: "Megacólon congênito - tratamento cirúrgico por videolaparoscopia"
		},
		{
			codigo: 31003745,
			procedimento: "Pâncreas anular - tratamento cirúrgico por videolaparoscopia"
		},
		{
			codigo: 31003753,
			procedimento: "Perfuração duodenal ou delgado - tratamento cirúrgico por videolaparoscopia"
		},
		{
			codigo: 31003761,
			procedimento: "Piloromiotomia por videolaparoscopia"
		},
		{
			codigo: 31003770,
			procedimento: "Proctocolectomia total com reservatório ileal por videolaparoscopia"
		},
		{
			codigo: 31003788,
			procedimento: "Proctocolectomia total por videolaparoscopia"
		},
		{
			codigo: 31003796,
			procedimento: "Retossigmoidectomia abdominal por videolaparoscopia"
		},
		{
			codigo: 31004016,
			procedimento: "Abscesso anorretal - drenagem"
		},
		{
			codigo: 31004024,
			procedimento: "Abscesso isquio-retal - drenagem"
		},
		{
			codigo: 31004032,
			procedimento: "Cerclagem anal"
		},
		{
			codigo: 31004040,
			procedimento: "Corpo estranho do reto - retirada"
		},
		{
			codigo: 31004059,
			procedimento: "Criptectomia (única ou múltipla)"
		},
		{
			codigo: 31004067,
			procedimento: "Dilatação digital ou instrumental do ânus e/ou do reto"
		},
		{
			codigo: 31004075,
			procedimento: "Esfincteroplastia anal (qualquer técnica)"
		},
		{
			codigo: 31004083,
			procedimento: "Estenose anal - tratamento cirúrgico (qualquer técnica)"
		},
		{
			codigo: 31004091,
			procedimento: "Excisão de plicoma"
		},
		{
			codigo: 31004105,
			procedimento: "Fissurectomia com ou sem esfincterotomia"
		},
		{
			codigo: 31004113,
			procedimento: "Fístula reto-vaginal e fístula anal em ferradura - tratamento cirúrgico via perineal"
		},
		{
			codigo: 31004121,
			procedimento: "Fistulectomia anal em dois tempos"
		},
		{
			codigo: 31004130,
			procedimento: "Fistulectomia anal em ferradura"
		},
		{
			codigo: 31004148,
			procedimento: "Fistulectomia anal em um tempo"
		},
		{
			codigo: 31004156,
			procedimento: "Fistulectomia anorretal com abaixamento mucoso"
		},
		{
			codigo: 31004164,
			procedimento: "Fistulectomia perineal"
		},
		{
			codigo: 31004172,
			procedimento: "Hemorróidas - fotocoagulação com raio infravermelho (por sessão)"
		},
		{
			codigo: 31004180,
			procedimento: "Hemorróidas - ligadura elástica (por sessão)"
		},
		{
			codigo: 31004199,
			procedimento: "Hemorróidas - tratamento esclerosante (por sessão)"
		},
		{
			codigo: 31004202,
			procedimento: "Hemorroidectomia aberta ou fechada, com ou sem esfincterotomia"
		},
		{
			codigo: 31004210,
			procedimento: "Laceração anorretal - tratamento cirúrgico por via perineal"
		},
		{
			codigo: 31004229,
			procedimento: "Lesão anal - eletrocauterização"
		},
		{
			codigo: 31004237,
			procedimento: "Papilectomia (única ou múltipla)"
		},
		{
			codigo: 31004245,
			procedimento: "Pólipo retal - ressecção endoanal"
		},
		{
			codigo: 31004253,
			procedimento: "Prolapso retal - esclerose (por sessão)"
		},
		{
			codigo: 31004261,
			procedimento: "Prolapso retal - tratamento cirúrgico"
		},
		{
			codigo: 31004270,
			procedimento: "Reconstituição de esfincter anal por plástica muscular (qualquer técnica)"
		},
		{
			codigo: 31004288,
			procedimento: "Reconstrução total anoperineal"
		},
		{
			codigo: 31004300,
			procedimento: "Tratamento cirúrgico de retocele (colpoperineoplastia posterior)"
		},
		{
			codigo: 31004318,
			procedimento: "Trombose hemorroidária - exérese"
		},
		{
			codigo: 31004326,
			procedimento: "Prurido anal - tratamento cirúrgico"
		},
		{
			codigo: 31004334,
			procedimento: "Esfincterotomia  - ânus"
		},
		{
			codigo: 31004342,
			procedimento: "Anopexia mecânica com grampeador"
		},
		{
			codigo: 31005012,
			procedimento: "Abscesso hepático - drenagem cirúrgica (até 3 fragmentos)"
		},
		{
			codigo: 31005020,
			procedimento: "Alcoolização percutânea dirigida de tumor hepático"
		},
		{
			codigo: 31005039,
			procedimento: "Anastomose biliodigestiva intra-hepática"
		},
		{
			codigo: 31005047,
			procedimento: "Atresia de vias biliares - tratamento cirúrgico"
		},
		{
			codigo: 31005063,
			procedimento: "Biópsia hepática por laparotomia (até 3 fragmentos)"
		},
		{
			codigo: 31005071,
			procedimento: "Biópsia hepática transparietal (até 3 fragmentos)"
		},
		{
			codigo: 31005080,
			procedimento: "Laparotomia para implantação cirúrgica de cateter arterial visceral para quimioterapia"
		},
		{
			codigo: 31005098,
			procedimento: "Cisto de colédoco - tratamento cirúrgico"
		},
		{
			codigo: 31005101,
			procedimento: "Colecistectomia com colangiografia"
		},
		{
			codigo: 31005110,
			procedimento: "Colecistectomia com fístula biliodigestiva"
		},
		{
			codigo: 31005128,
			procedimento: "Colecistectomia sem colangiografia"
		},
		{
			codigo: 31005136,
			procedimento: "Colecistojejunostomia"
		},
		{
			codigo: 31005144,
			procedimento: "Colecistostomia"
		},
		{
			codigo: 31005152,
			procedimento: "Colédoco ou hepático-jejunostomia (qualquer técnica)"
		},
		{
			codigo: 31005160,
			procedimento: "Colédoco ou hepaticoplastia"
		},
		{
			codigo: 31005179,
			procedimento: "Colédoco-duodenostomia"
		},
		{
			codigo: 31005187,
			procedimento: "Coledocotomia ou coledocostomia sem colecistectomia"
		},
		{
			codigo: 31005195,
			procedimento: "Coledocoscopia intra-operatória"
		},
		{
			codigo: 31005209,
			procedimento: "Derivação porto sistêmica"
		},
		{
			codigo: 31005217,
			procedimento: "Desconexão ázigos - portal com esplenectomia"
		},
		{
			codigo: 31005225,
			procedimento: "Desconexão ázigos - portal sem esplenectomia"
		},
		{
			codigo: 31005233,
			procedimento: "Desvascularização hepática"
		},
		{
			codigo: 31005241,
			procedimento: "Drenagem biliar trans-hepática"
		},
		{
			codigo: 31005250,
			procedimento: "Enucleação de metástases hepáticas"
		},
		{
			codigo: 31005268,
			procedimento: "Enucleação de metástases, por metástase"
		},
		{
			codigo: 31005276,
			procedimento: "Hepatorrafia"
		},
		{
			codigo: 31005284,
			procedimento: "Hepatorrafia complexa com lesão de estruturas vasculares biliares"
		},
		{
			codigo: 31005292,
			procedimento: "Lobectomia hepática direita"
		},
		{
			codigo: 31005306,
			procedimento: "Lobectomia hepática esquerda"
		},
		{
			codigo: 31005314,
			procedimento: "Papilotomia transduodenal"
		},
		{
			codigo: 31005322,
			procedimento: "Punção hepática para drenagem de abscessos"
		},
		{
			codigo: 31005330,
			procedimento: "Radioablação / termoablação de tumores hepáticos"
		},
		{
			codigo: 31005357,
			procedimento: "Ressecção de cisto hepático com hepatectomia"
		},
		{
			codigo: 31005365,
			procedimento: "Ressecção de cisto hepático sem hepatectomia"
		},
		{
			codigo: 31005373,
			procedimento: "Ressecção de tumor de vesícula ou da via biliar com hepatectomia"
		},
		{
			codigo: 31005381,
			procedimento: "Ressecção de tumor de vesícula ou da via biliar sem hepatectomia"
		},
		{
			codigo: 31005390,
			procedimento: "Segmentectomia hepática"
		},
		{
			codigo: 31005403,
			procedimento: "Sequestrectomia hepática"
		},
		{
			codigo: 31005420,
			procedimento: "Tratamento cirúrgico de estenose cicatricial das vias biliares"
		},
		{
			codigo: 31005438,
			procedimento: "Trissegmentectomias"
		},
		{
			codigo: 31005446,
			procedimento: "Coledocotomia ou coledocostomia com colecistectomia"
		},
		{
			codigo: 31005454,
			procedimento: "Abscesso hepático - drenagem cirúrgica por videolaparoscopia"
		},
		{
			codigo: 31005462,
			procedimento: "Alcoolização percutânea dirigida de tumor hepático por videolaparoscopia"
		},
		{
			codigo: 31005470,
			procedimento: "Colecistectomia com colangiografia por videolaparoscopia"
		},
		{
			codigo: 31005489,
			procedimento: "Colecistectomia com fístula biliodigestiva por videolaparoscopia"
		},
		{
			codigo: 31005497,
			procedimento: "Colecistectomia sem colangiografia por videolaparoscopia"
		},
		{
			codigo: 31005500,
			procedimento: "Colecistojejunostomia por videolaparoscopia"
		},
		{
			codigo: 31005519,
			procedimento: "Colecistostomia por videolaparoscopia"
		},
		{
			codigo: 31005527,
			procedimento: "Colédoco ou hepático-jejunostomia por videolaparoscopia"
		},
		{
			codigo: 31005535,
			procedimento: "Colédoco-duodenostomia por videolaparoscopia"
		},
		{
			codigo: 31005543,
			procedimento: "Coledocotomia ou coledocostomia com colecistectomia por videolaparoscopia"
		},
		{
			codigo: 31005551,
			procedimento: "Coledocotomia ou coledocostomia sem colecistectomia por videolaparoscopia"
		},
		{
			codigo: 31005560,
			procedimento: "Desconexão ázigos - portal com esplenectomia por videolaparoscopia"
		},
		{
			codigo: 31005578,
			procedimento: "Desconexão ázigos - portal sem esplenectomia por videolaparoscopia"
		},
		{
			codigo: 31005586,
			procedimento: "Enucleação de metástase hepáticas por videolaparoscopia"
		},
		{
			codigo: 31005594,
			procedimento: "Hepatorrafia complexa com lesão de estruturas vasculares biliares por videolaparoscopia"
		},
		{
			codigo: 31005608,
			procedimento: "Hepatorrafia por videolaparoscopia"
		},
		{
			codigo: 31005616,
			procedimento: "Lobectomia hepática direita por videolaparoscopia"
		},
		{
			codigo: 31005624,
			procedimento: "Lobectomia hepática esquerda por videolaparoscopia"
		},
		{
			codigo: 31005632,
			procedimento: "Punção hepática para drenagem de abcessos por videolaparoscopia"
		},
		{
			codigo: 31005640,
			procedimento: "Radioablação / termoablação de tumores hepáticos por videolaparoscopia"
		},
		{
			codigo: 31005659,
			procedimento: "Ressecção de cisto hepático com hepatectomia por videolaparoscopia"
		},
		{
			codigo: 31005667,
			procedimento: "Ressecção de cisto hepático sem hepatectomia por videolaparoscopia"
		},
		{
			codigo: 31005675,
			procedimento: "Biópsia hepática por videolaparoscopia"
		},
		{
			codigo: 31005683,
			procedimento: "Biópsia hepática por laparotomia (acima de 3 fragmentos)"
		},
		{
			codigo: 31005691,
			procedimento: "Biópsia hepática transparietal (acima de 3 fragmentos)"
		},
		{
			codigo: 31006019,
			procedimento: "Biópsia de pâncreas por laparotomia"
		},
		{
			codigo: 31006027,
			procedimento: "Biópsia de pâncreas por punção dirigida"
		},
		{
			codigo: 31006035,
			procedimento: "Enucleação de tumores pancreáticos"
		},
		{
			codigo: 31006043,
			procedimento: "Hipoglicemia - tratamento cirúrgico (pancreatotomia parcial ou total)"
		},
		{
			codigo: 31006051,
			procedimento: "Pancreatectomia corpo caudal com preservação do baço"
		},
		{
			codigo: 31006060,
			procedimento: "Pancreatectomia parcial ou sequestrectomia"
		},
		{
			codigo: 31006078,
			procedimento: "Pancreato-duodenectomia com linfadenectomia"
		},
		{
			codigo: 31006086,
			procedimento: "Pancreato-enterostomia"
		},
		{
			codigo: 31006094,
			procedimento: "Pancreatorrafia"
		},
		{
			codigo: 31006108,
			procedimento: "Pseudocisto pâncreas - drenagem externa (qualquer técnica)"
		},
		{
			codigo: 31006116,
			procedimento: "Pseudocisto pâncreas - drenagem interna (qualquer técnica)"
		},
		{
			codigo: 31006124,
			procedimento: "Cisto pancreático - cistojejunoanastomose - tratamento cirúrgico"
		},
		{
			codigo: 31006132,
			procedimento: "Cisto pancreático - gastroanastomose - tratamento cirúrgico"
		},
		{
			codigo: 31006159,
			procedimento: "Biópsia de pâncreas por videolaparoscopia"
		},
		{
			codigo: 31006167,
			procedimento: "Enucleação de tumores pancreáticos por videolaparoscopia"
		},
		{
			codigo: 31006175,
			procedimento: "Pseudocisto pâncreas - drenagem externa por videolaparoscopia"
		},
		{
			codigo: 31006183,
			procedimento: "Pseudocisto pâncreas - drenagem interna por videolaparoscopia"
		},
		{
			codigo: 31007015,
			procedimento: "Biópsia esplênica"
		},
		{
			codigo: 31007023,
			procedimento: "Esplenectomia parcial"
		},
		{
			codigo: 31007031,
			procedimento: "Esplenectomia total"
		},
		{
			codigo: 31007040,
			procedimento: "Esplenorrafia"
		},
		{
			codigo: 31007058,
			procedimento: "Esplenectomia parcial por videolaparoscopia"
		},
		{
			codigo: 31007066,
			procedimento: "Esplenectomia total por videolaparoscopia"
		},
		{
			codigo: 31007074,
			procedimento: "Esplenorrafia por videolaparoscopia"
		},
		{
			codigo: 31008011,
			procedimento: "Diálise peritoneal intermitente - agudo ou crônico (por sessão)"
		},
		{
			codigo: 31008020,
			procedimento: "Diálise peritoneal ambulatorial contínua (CAPD) 9 dias - treinamento"
		},
		{
			codigo: 31008038,
			procedimento: "Diálise peritoneal ambulatorial contínua (CAPD) por mês/paciente"
		},
		{
			codigo: 31008046,
			procedimento: "Diálise peritoneal automática (APD) - tratamento (agudo ou crônico)"
		},
		{
			codigo: 31008054,
			procedimento: "Epiploplastia"
		},
		{
			codigo: 31008062,
			procedimento: "Implante de cateter peritoneal"
		},
		{
			codigo: 31008070,
			procedimento: "Instalação de cateter Tenckhoff"
		},
		{
			codigo: 31008097,
			procedimento: "Retirada de cateter Tenckhoff"
		},
		{
			codigo: 31008100,
			procedimento: "Epiploplastia por videolaparoscopia"
		},
		{
			codigo: 31008119,
			procedimento: "Diálise peritoneal automática por mês (agudo ou crônico)"
		},
		{
			codigo: 31009018,
			procedimento: "Abscesso perineal - drenagem cirúrgica"
		},
		{
			codigo: 31009026,
			procedimento: "Biópsia de parede abdominal"
		},
		{
			codigo: 31009042,
			procedimento: "Cisto sacro-coccígeo - tratamento cirúrgico"
		},
		{
			codigo: 31009050,
			procedimento: "Diástase dos retos-abdominais - tratamento cirúrgico"
		},
		{
			codigo: 31009069,
			procedimento: "Hérnia inguinal encarcerada em RN ou lactente - tratamento cirúrgico"
		},
		{
			codigo: 31009077,
			procedimento: "Herniorrafia com ressecção intestinal - estrangulada"
		},
		{
			codigo: 31009085,
			procedimento: "Herniorrafia crural - unilateral"
		},
		{
			codigo: 31009093,
			procedimento: "Herniorrafia epigástrica"
		},
		{
			codigo: 31009107,
			procedimento: "Herniorrafia incisional"
		},
		{
			codigo: 31009115,
			procedimento: "Herniorrafia inguinal - unilateral"
		},
		{
			codigo: 31009123,
			procedimento: "Herniorrafia inguinal no RN ou lactente"
		},
		{
			codigo: 31009131,
			procedimento: "Herniorrafia lombar"
		},
		{
			codigo: 31009140,
			procedimento: "Herniorrafia recidivante"
		},
		{
			codigo: 31009158,
			procedimento: "Herniorrafia sem ressecção intestinal encarcerada"
		},
		{
			codigo: 31009166,
			procedimento: "Herniorrafia umbilical"
		},
		{
			codigo: 31009174,
			procedimento: "Laparotomia exploradora, ou para biópsia, ou para drenagem de abscesso, ou para liberação de bridas em vigência de oclusão"
		},
		{
			codigo: 31009204,
			procedimento: "Neuroblastoma abdominal - exérese"
		},
		{
			codigo: 31009220,
			procedimento: "Onfalocele/gastrosquise em 1 tempo ou primeiro tempo ou prótese - tratamento cirúrgico"
		},
		{
			codigo: 31009239,
			procedimento: "Onfalocele/gastrosquise - segundo tempo - tratamento cirúrgico"
		},
		{
			codigo: 31009247,
			procedimento: "Paracentese abdominal"
		},
		{
			codigo: 31009255,
			procedimento: "Reconstrução da parede abdominal com retalho muscular ou miocutâneo"
		},
		{
			codigo: 31009263,
			procedimento: "Reparação de outras hérnias (inclui herniorrafia muscular)"
		},
		{
			codigo: 31009271,
			procedimento: "Ressecção de cisto ou fístula de úraco"
		},
		{
			codigo: 31009280,
			procedimento: "Ressecção de cisto ou fístula ou restos do ducto onfalomesentérico"
		},
		{
			codigo: 31009298,
			procedimento: "Ressutura da parede abdominal (por deiscência total ou evisceração)"
		},
		{
			codigo: 31009301,
			procedimento: "Teratoma sacro-coccígeo - exérese"
		},
		{
			codigo: 31009310,
			procedimento: "Herniorrafia com ressecção intestinal - estrangulada - por videolaparoscopia"
		},
		{
			codigo: 31009328,
			procedimento: "Herniorrafia crural - unilateral por videolaparoscopia"
		},
		{
			codigo: 31009336,
			procedimento: "Herniorrafia inguinal - unilateral por videolaparoscopia"
		},
		{
			codigo: 31009344,
			procedimento: "Herniorrafia recidivante por videolaparoscopia"
		},
		{
			codigo: 31009352,
			procedimento: "Laparotomia exploradora, ou para biópsia, ou para drenagem de abscesso, ou para liberação de bridas em vigência de oclusão por videolaparoscopia"
		},
		{
			codigo: 31009360,
			procedimento: "Herniorrafia inguinal em criança - unilateral"
		},
		{
			codigo: 31101011,
			procedimento: "Abscesso renal ou peri-renal - drenagem cirúrgica"
		},
		{
			codigo: 31101020,
			procedimento: "Abscesso renal ou peri-renal - drenagem percutânea"
		},
		{
			codigo: 31101038,
			procedimento: "Adrenalectomia unilateral"
		},
		{
			codigo: 31101046,
			procedimento: "Angioplastia renal unilateral a céu aberto"
		},
		{
			codigo: 31101054,
			procedimento: "Angioplastia renal unilateral transluminal"
		},
		{
			codigo: 31101062,
			procedimento: "Autotransplante renal unilateral"
		},
		{
			codigo: 31101070,
			procedimento: "Biópsia renal cirúrgica unilateral"
		},
		{
			codigo: 31101089,
			procedimento: "Cisto renal - escleroterapia percutânea - por cisto"
		},
		{
			codigo: 31101097,
			procedimento: "Endopielotomia percutânea unilateral"
		},
		{
			codigo: 31101100,
			procedimento: "Estenose de junção pieloureteral - tratamento cirúrgico"
		},
		{
			codigo: 31101119,
			procedimento: "Fístula pielo-cutânea - tratamento cirúrgico"
		},
		{
			codigo: 31101127,
			procedimento: "Lombotomia exploradora"
		},
		{
			codigo: 31101135,
			procedimento: "Marsupialização de cistos renais unilateral"
		},
		{
			codigo: 31101151,
			procedimento: "Nefrectomia parcial com ureterectomia"
		},
		{
			codigo: 31101160,
			procedimento: "Nefrectomia parcial unilateral"
		},
		{
			codigo: 31101178,
			procedimento: "Nefrectomia parcial unilateral extracorpórea"
		},
		{
			codigo: 31101186,
			procedimento: "Nefrectomia radical unilateral"
		},
		{
			codigo: 31101194,
			procedimento: "Nefrectomia total unilateral"
		},
		{
			codigo: 31101208,
			procedimento: "Nefro ou pieloenterocistostomia unilateral"
		},
		{
			codigo: 31101216,
			procedimento: "Nefrolitotomia anatrófica unilateral"
		},
		{
			codigo: 31101224,
			procedimento: "Nefrolitotomia percutânea unilateral"
		},
		{
			codigo: 31101232,
			procedimento: "Nefrolitotomia simples unilateral"
		},
		{
			codigo: 31101240,
			procedimento: "Nefrolitotripsia extracorpórea - 1ª sessão"
		},
		{
			codigo: 31101259,
			procedimento: "Nefrolitotripsia extracorpórea - reaplicações (até 3 meses)"
		},
		{
			codigo: 31101275,
			procedimento: "Nefrolitotripsia percutânea unilateral (MEC., E.H., ou US)"
		},
		{
			codigo: 31101283,
			procedimento: "Nefropexia unilateral"
		},
		{
			codigo: 31101291,
			procedimento: "Nefrorrafia (trauma) unilateral"
		},
		{
			codigo: 31101305,
			procedimento: "Nefrostomia a céu aberto unilateral"
		},
		{
			codigo: 31101313,
			procedimento: "Nefrostomia percutânea unilateral"
		},
		{
			codigo: 31101321,
			procedimento: "Nefroureterectomia com ressecção vesical unilateral"
		},
		{
			codigo: 31101330,
			procedimento: "Pielolitotomia com nefrolitotomia anatrófica unilateral"
		},
		{
			codigo: 31101348,
			procedimento: "Pielolitotomia com nefrolitotomia simples unilateral"
		},
		{
			codigo: 31101356,
			procedimento: "Pielolitotomia unilateral"
		},
		{
			codigo: 31101364,
			procedimento: "Pieloplastia"
		},
		{
			codigo: 31101372,
			procedimento: "Pielostomia unilateral"
		},
		{
			codigo: 31101380,
			procedimento: "Pielotomia exploradora unilateral"
		},
		{
			codigo: 31101399,
			procedimento: "Punção aspirativa renal para diagnóstico de rejeição (ato médico)"
		},
		{
			codigo: 31101402,
			procedimento: "Punção biópsia renal percutânea"
		},
		{
			codigo: 31101410,
			procedimento: "Revascularização renal - qualquer técnica"
		},
		{
			codigo: 31101429,
			procedimento: "Sinfisiotomia (rim em ferradura)"
		},
		{
			codigo: 31101437,
			procedimento: "Transuretero anastomose"
		},
		{
			codigo: 31101445,
			procedimento: "Tratamento cirúrgico da fístula pielo-intestinal"
		},
		{
			codigo: 31101453,
			procedimento: "Tumor renal - enucleação unilateral"
		},
		{
			codigo: 31101461,
			procedimento: "Tumor Wilms - tratamento cirúrgico"
		},
		{
			codigo: 31101470,
			procedimento: "Tumores retro-peritoneais  malignos unilaterais - exérese"
		},
		{
			codigo: 31101488,
			procedimento: "Adrenalectomia laparoscópica unilateral"
		},
		{
			codigo: 31101496,
			procedimento: "Marsupialização laparoscópica de cisto renal unilateral"
		},
		{
			codigo: 31101500,
			procedimento: "Biópsia renal laparoscópica unilateral"
		},
		{
			codigo: 31101518,
			procedimento: "Nefropexia laparoscópica unilateral"
		},
		{
			codigo: 31101526,
			procedimento: "Pieloplastia laparoscópica unilateral"
		},
		{
			codigo: 31101534,
			procedimento: "Pielolitotomia laparoscópica unilateral"
		},
		{
			codigo: 31101542,
			procedimento: "Nefroureterectomia com ressecção vesical laparoscópica unilateral"
		},
		{
			codigo: 31101550,
			procedimento: "Nefrectomia radical laparoscópica unilateral"
		},
		{
			codigo: 31101569,
			procedimento: "Nefrectomia parcial laparoscópica unilateral"
		},
		{
			codigo: 31101577,
			procedimento: "Nefrolitotripsia percutânea unilateral a laser"
		},
		{
			codigo: 31101585,
			procedimento: "Nefrectomia total unilateral por videolaparoscopia"
		},
		{
			codigo: 31101593,
			procedimento: "Cisto de supra-renal - tratamento cirúrgico"
		},
		{
			codigo: 31102018,
			procedimento: "Biópsia cirúrgica de ureter unilateral"
		},
		{
			codigo: 31102026,
			procedimento: "Biópsia endoscópica de ureter unilateral"
		},
		{
			codigo: 31102034,
			procedimento: "Cateterismo ureteral unilateral"
		},
		{
			codigo: 31102042,
			procedimento: "Colocação cirúrgica de duplo J unilateral"
		},
		{
			codigo: 31102050,
			procedimento: "Colocação cistoscópica de duplo J unilateral"
		},
		{
			codigo: 31102069,
			procedimento: "Colocação nefroscópica de duplo J unilateral"
		},
		{
			codigo: 31102077,
			procedimento: "Colocação ureteroscópica de duplo J unilateral"
		},
		{
			codigo: 31102085,
			procedimento: "Dilatação endoscópica unilateral"
		},
		{
			codigo: 31102093,
			procedimento: "Duplicação pieloureteral - tratamento cirúrgico"
		},
		{
			codigo: 31102107,
			procedimento: "Fístula uretero-cutânea unilateral (tratamento cirúrgico)"
		},
		{
			codigo: 31102115,
			procedimento: "Fístula uretero-intestinal unilateral (tratamento cirúrgico)"
		},
		{
			codigo: 31102123,
			procedimento: "Fístula uretero-vaginal unilateral (tratamento cirúrgico)"
		},
		{
			codigo: 31102131,
			procedimento: "Meatotomia endoscópica unilateral"
		},
		{
			codigo: 31102174,
			procedimento: "Reimplante ureterointestinal uni ou bilateral"
		},
		{
			codigo: 31102182,
			procedimento: "Reimplante ureteral por via extra ou intravesical unilateral"
		},
		{
			codigo: 31102204,
			procedimento: "Reimplante uretero-vesical unilateral - via combinada"
		},
		{
			codigo: 31102220,
			procedimento: "Retirada endoscópica de cálculo de ureter unilateral"
		},
		{
			codigo: 31102239,
			procedimento: "Transureterostomia"
		},
		{
			codigo: 31102247,
			procedimento: "Ureterectomia unilateral"
		},
		{
			codigo: 31102255,
			procedimento: "Ureterocele unilateral - ressecção a céu aberto"
		},
		{
			codigo: 31102263,
			procedimento: "Ureteroceles - tratamento endoscópico"
		},
		{
			codigo: 31102271,
			procedimento: "Ureteroileocistostomia unilateral"
		},
		{
			codigo: 31102280,
			procedimento: "Ureteroileostomia cutânea unilateral"
		},
		{
			codigo: 31102298,
			procedimento: "Ureterólise unilateral"
		},
		{
			codigo: 31102301,
			procedimento: "Ureterolitotomia unilateral"
		},
		{
			codigo: 31102310,
			procedimento: "Ureterolitotripsia extracorpórea - 1ª sessão"
		},
		{
			codigo: 31102328,
			procedimento: "Ureterolitotripsia extracorpórea - reaplicações (até 3 meses)"
		},
		{
			codigo: 31102344,
			procedimento: "Ureteroplastia unilateral"
		},
		{
			codigo: 31102352,
			procedimento: "Ureterorrenolitotomia unilateral"
		},
		{
			codigo: 31102360,
			procedimento: "Ureterorrenolitotripsia flexível a laser unilateral"
		},
		{
			codigo: 31102379,
			procedimento: "Ureterorrenolitotripsia rígida unilateral"
		},
		{
			codigo: 31102409,
			procedimento: "Ureterossigmoidoplastia unilateral"
		},
		{
			codigo: 31102417,
			procedimento: "Ureterossigmoidostomia unilateral"
		},
		{
			codigo: 31102425,
			procedimento: "Ureterostomia cutânea unilateral"
		},
		{
			codigo: 31102433,
			procedimento: "Ureterotomia interna percutânea unilateral"
		},
		{
			codigo: 31102441,
			procedimento: "Ureterotomia interna ureteroscópica flexível unilateral"
		},
		{
			codigo: 31102450,
			procedimento: "Ureterotomia interna ureteroscópica rígida unilateral"
		},
		{
			codigo: 31102468,
			procedimento: "Ureteroureterocistoneostomia"
		},
		{
			codigo: 31102476,
			procedimento: "Ureteroureterostomia unilateral"
		},
		{
			codigo: 31102492,
			procedimento: "Ureterolitotomia laparoscópica unilateral"
		},
		{
			codigo: 31102506,
			procedimento: "Ureterólise laparoscópica unilateral"
		},
		{
			codigo: 31102514,
			procedimento: "Ureteroureterostomia laparoscópica unilateral"
		},
		{
			codigo: 31102522,
			procedimento: "Ureteroplastia laparoscópica unilateral"
		},
		{
			codigo: 31102530,
			procedimento: "Correção laparoscópica de refluxo vesico-ureteral unilateral"
		},
		{
			codigo: 31102549,
			procedimento: "Reimplante uretero-vesical laparoscópico unilateral"
		},
		{
			codigo: 31102557,
			procedimento: "Reimplante ureterointestinal laparoscópico unilateral"
		},
		{
			codigo: 31102565,
			procedimento: "Ureterorrenolitotripsia rígida unilateral a laser"
		},
		{
			codigo: 31102573,
			procedimento: "Ureteroenterostomia cutânea - unilateral"
		},
		{
			codigo: 31102581,
			procedimento: "Ureterolitotripsia transureteroscópica"
		},
		{
			codigo: 31102590,
			procedimento: "Refluxo vésico-ureteral - tratamento endoscópico"
		},
		{
			codigo: 31103014,
			procedimento: "Ampliação vesical"
		},
		{
			codigo: 31103022,
			procedimento: "Bexiga psóica - tratamento cirúrgico"
		},
		{
			codigo: 31103030,
			procedimento: "Biópsia endoscópica de bexiga (inclui cistoscopia)"
		},
		{
			codigo: 31103049,
			procedimento: "Biópsia vesical a céu aberto"
		},
		{
			codigo: 31103057,
			procedimento: "Cálculo vesical - extração endoscópica"
		},
		{
			codigo: 31103065,
			procedimento: "Cistectomia parcial"
		},
		{
			codigo: 31103073,
			procedimento: "Cistectomia radical (inclui próstata ou útero)"
		},
		{
			codigo: 31103081,
			procedimento: "Cistectomia total"
		},
		{
			codigo: 31103090,
			procedimento: "Cistolitotomia"
		},
		{
			codigo: 31103103,
			procedimento: "Cistolitotripsia extracorpórea - 1ª sessão"
		},
		{
			codigo: 31103111,
			procedimento: "Cistolitotripsia extracorpórea - reaplicações (até 3 meses)"
		},
		{
			codigo: 31103138,
			procedimento: "Cistolitotripsia percutânea (U.S., E.H., E.C.)"
		},
		{
			codigo: 31103146,
			procedimento: "Cistolitotripsia transuretral (U.S., E.H., E.C.)"
		},
		{
			codigo: 31103154,
			procedimento: "Cistoplastia redutora"
		},
		{
			codigo: 31103162,
			procedimento: "Cistorrafia (trauma)"
		},
		{
			codigo: 31103170,
			procedimento: "Cistostomia cirúrgica"
		},
		{
			codigo: 31103189,
			procedimento: "Cistostomia com procedimento endoscópico"
		},
		{
			codigo: 31103197,
			procedimento: "Cistostomia por punção com trocater"
		},
		{
			codigo: 31103200,
			procedimento: "Colo de divertículo - ressecção endoscópica"
		},
		{
			codigo: 31103219,
			procedimento: "Colo vesical - ressecção endoscópica"
		},
		{
			codigo: 31103227,
			procedimento: "Corpo estranho - extração cirúrgica"
		},
		{
			codigo: 31103235,
			procedimento: "Corpo estranho - extração endoscópica"
		},
		{
			codigo: 31103243,
			procedimento: "Diverticulectomia vesical"
		},
		{
			codigo: 31103251,
			procedimento: "Enterocistoplastia (ampliação vesical)"
		},
		{
			codigo: 31103260,
			procedimento: "Extrofia em cloaca - tratamento cirúrgico"
		},
		{
			codigo: 31103278,
			procedimento: "Extrofia vesical - tratamento cirúrgico"
		},
		{
			codigo: 31103286,
			procedimento: "Fístula vésico-cutânea - tratamento cirúrgico"
		},
		{
			codigo: 31103294,
			procedimento: "Fístula vésico-entérica - tratamento cirúrgico"
		},
		{
			codigo: 31103308,
			procedimento: "Fístula vésico-retal - tratamento cirúrgico"
		},
		{
			codigo: 31103316,
			procedimento: "Fístula vésico-uterina - tratamento cirúrgico"
		},
		{
			codigo: 31103324,
			procedimento: "Fístula vésico-vaginal - tratamento cirúrgico"
		},
		{
			codigo: 31103332,
			procedimento: "Incontinência urinária - \"sling\" vaginal ou abdominal"
		},
		{
			codigo: 31103340,
			procedimento: "Incontinência urinária - suspensão endoscópica de colo"
		},
		{
			codigo: 31103359,
			procedimento: "Incontinência urinária - tratamento cirúrgico supra-púbico"
		},
		{
			codigo: 31103367,
			procedimento: "Incontinência urinária - tratamento endoscópico (injeção)"
		},
		{
			codigo: 31103375,
			procedimento: "Incontinência urinária com colpoplastia anterior - tratamento cirúrgico (com ou sem uso de prótese)"
		},
		{
			codigo: 31103383,
			procedimento: "Pólipos vesicais - ressecção cirúrgica"
		},
		{
			codigo: 31103391,
			procedimento: "Pólipos vesicais - ressecção endoscópica"
		},
		{
			codigo: 31103405,
			procedimento: "Punção e aspiração vesical"
		},
		{
			codigo: 31103413,
			procedimento: "Reimplante uretero-vesical à Boari"
		},
		{
			codigo: 31103430,
			procedimento: "Retenção por coágulo - aspiração vesical"
		},
		{
			codigo: 31103448,
			procedimento: "Tumor vesical - fotocoagulação a laser"
		},
		{
			codigo: 31103456,
			procedimento: "Tumor vesical - ressecção endoscópica"
		},
		{
			codigo: 31103464,
			procedimento: "Vesicostomia cutânea"
		},
		{
			codigo: 31103472,
			procedimento: "Retirada endoscópica de duplo J"
		},
		{
			codigo: 31103480,
			procedimento: "Neobexiga cutânea continente"
		},
		{
			codigo: 31103499,
			procedimento: "Neobexiga retal continente"
		},
		{
			codigo: 31103502,
			procedimento: "Neobexiga uretral continente"
		},
		{
			codigo: 31103510,
			procedimento: "Correção laparoscópica de incontinência urinária"
		},
		{
			codigo: 31103529,
			procedimento: "Cistectomia parcial laparoscópica"
		},
		{
			codigo: 31103537,
			procedimento: "Cistectomia radical laparoscópica (inclui próstata ou útero)"
		},
		{
			codigo: 31103545,
			procedimento: "Neobexiga laparoscópica"
		},
		{
			codigo: 31103553,
			procedimento: "Diverticulectomia vesical laparoscópica"
		},
		{
			codigo: 31103561,
			procedimento: "Cistolitotripsia a laser"
		},
		{
			codigo: 31103570,
			procedimento: "Colo vesical - ressecção cirúrgica"
		},
		{
			codigo: 31103588,
			procedimento: "Tumor vesical, ressecção a céu aberto"
		},
		{
			codigo: 31103596,
			procedimento: "Tratamento da hiperatividade vesical: injeção intravesical de toxina botulínica"
		},
		{
			codigo: 31104010,
			procedimento: "Abscesso periuretral - tratamento cirúrgico"
		},
		{
			codigo: 31104029,
			procedimento: "Biópsia endoscópica de uretra"
		},
		{
			codigo: 31104037,
			procedimento: "Corpo estranho ou cálculo - extração cirúrgica"
		},
		{
			codigo: 31104045,
			procedimento: "Corpo estranho ou cálculo - extração endoscópica"
		},
		{
			codigo: 31104053,
			procedimento: "Divertículo uretral - tratamento cirúrgico"
		},
		{
			codigo: 31104061,
			procedimento: "Eletrocoagulação endoscópica"
		},
		{
			codigo: 31104070,
			procedimento: "Esfincterotomia - uretra"
		},
		{
			codigo: 31104088,
			procedimento: "Fístula uretro-cutânea - correção cirúrgica"
		},
		{
			codigo: 31104096,
			procedimento: "Fístula uretro-retal - correção cirúrgica"
		},
		{
			codigo: 31104100,
			procedimento: "Fístula uretro-vaginal - correção cirúrgica"
		},
		{
			codigo: 31104118,
			procedimento: "Incontinência urinária masculina - tratamento cirúrgico (exclui implante de esfincter artificial)"
		},
		{
			codigo: 31104126,
			procedimento: "Injeções periuretrais (incluindo uretrocistocopia) por tratamento"
		},
		{
			codigo: 31104134,
			procedimento: "Meatoplastia (retalho cutâneo)"
		},
		{
			codigo: 31104142,
			procedimento: "Meatotomia uretral"
		},
		{
			codigo: 31104150,
			procedimento: "Neouretra proximal (cistouretroplastia)"
		},
		{
			codigo: 31104169,
			procedimento: "Ressecção de carúncula"
		},
		{
			codigo: 31104177,
			procedimento: "Ressecção de válvula uretral posterior"
		},
		{
			codigo: 31104185,
			procedimento: "Tumor uretral - excisão"
		},
		{
			codigo: 31104193,
			procedimento: "Uretroplastia anterior"
		},
		{
			codigo: 31104207,
			procedimento: "Uretroplastia posterior"
		},
		{
			codigo: 31104215,
			procedimento: "Uretrostomia"
		},
		{
			codigo: 31104223,
			procedimento: "Uretrotomia interna"
		},
		{
			codigo: 31104231,
			procedimento: "Uretrotomia interna com prótese endouretral"
		},
		{
			codigo: 31104240,
			procedimento: "Uretrectomia total"
		},
		{
			codigo: 31104258,
			procedimento: "Ressecção de corda da uretra"
		},
		{
			codigo: 31104266,
			procedimento: "Uretrotomia externa para retirada de cálculo ou corpo estranho"
		},
		{
			codigo: 31104274,
			procedimento: "Incontinência urinária masculina - \"sling\""
		},
		{
			codigo: 31104282,
			procedimento: "Incontinência urinária masculina - esfincter artificial"
		},
		{
			codigo: 31104290,
			procedimento: "Retirada e/ou substituição de implante no tratamento da incontinência urinária masculina - esfincter artificial"
		},
		{
			codigo: 31201016,
			procedimento: "Ablação prostática a laser"
		},
		{
			codigo: 31201024,
			procedimento: "Abscesso de próstata - drenagem"
		},
		{
			codigo: 31201032,
			procedimento: "Biópsia prostática - até 8 fragmentos"
		},
		{
			codigo: 31201040,
			procedimento: "Biópsia prostática - mais de 8 fragmentos"
		},
		{
			codigo: 31201059,
			procedimento: "Eletrovaporização de próstata"
		},
		{
			codigo: 31201067,
			procedimento: "Hemorragia da loja prostática - evacuação e irrigação"
		},
		{
			codigo: 31201075,
			procedimento: "Hemorragia da loja prostática - revisão endoscópica"
		},
		{
			codigo: 31201083,
			procedimento: "Hipertrofia prostática - hipertermia ou termoterapia"
		},
		{
			codigo: 31201091,
			procedimento: "Hipertrofia prostática - implante de prótese"
		},
		{
			codigo: 31201105,
			procedimento: "Hipertrofia prostática - tratamento por dilatação"
		},
		{
			codigo: 31201113,
			procedimento: "Prostatavesiculectomia radical"
		},
		{
			codigo: 31201121,
			procedimento: "Prostatectomia a céu aberto"
		},
		{
			codigo: 31201130,
			procedimento: "Ressecção endoscópica da próstata"
		},
		{
			codigo: 31201148,
			procedimento: "Prostatavesiculectomia radical laparoscópica"
		},
		{
			codigo: 31201156,
			procedimento: "Exérese laparoscópica de cisto de vesícula seminal unilateral"
		},
		{
			codigo: 31201164,
			procedimento: "Hipertrofia prostática - tratamento por diatemia"
		},
		{
			codigo: 31202012,
			procedimento: "Biópsia escrotal"
		},
		{
			codigo: 31202020,
			procedimento: "Drenagem de abscesso - escroto"
		},
		{
			codigo: 31202039,
			procedimento: "Elefantíase peno-escrotal - tratamento cirúrgico"
		},
		{
			codigo: 31202047,
			procedimento: "Exérese de cisto escrotal"
		},
		{
			codigo: 31202055,
			procedimento: "Plástica escrotal"
		},
		{
			codigo: 31202063,
			procedimento: "Reconstrução da bolsa escrotal com retalho inguinal pediculado - por estágio"
		},
		{
			codigo: 31202071,
			procedimento: "Ressecção parcial da bolsa escrotal"
		},
		{
			codigo: 31203019,
			procedimento: "Autotransplante de um testículo"
		},
		{
			codigo: 31203027,
			procedimento: "Biópsia unilateral de testículo"
		},
		{
			codigo: 31203035,
			procedimento: "Escroto agudo - exploração cirúrgica"
		},
		{
			codigo: 31203043,
			procedimento: "Hidrocele unilateral - correção cirúrgica"
		},
		{
			codigo: 31203051,
			procedimento: "Implante de prótese testicular unilateral"
		},
		{
			codigo: 31203060,
			procedimento: "Orquidopexia unilateral"
		},
		{
			codigo: 31203078,
			procedimento: "Orquiectomia unilateral"
		},
		{
			codigo: 31203086,
			procedimento: "Punção da vaginal"
		},
		{
			codigo: 31203094,
			procedimento: "Reparação plástica (trauma)"
		},
		{
			codigo: 31203108,
			procedimento: "Torção de testículo - cura cirúrgica"
		},
		{
			codigo: 31203116,
			procedimento: "Tumor de testículo - ressecção"
		},
		{
			codigo: 31203124,
			procedimento: "Varicocele unilateral - correção cirúrgica"
		},
		{
			codigo: 31203132,
			procedimento: "Orquidopexia laparoscópica unilateral"
		},
		{
			codigo: 31203140,
			procedimento: "Orquiectomia intra-abdominal laparoscópica unilateral"
		},
		{
			codigo: 31203159,
			procedimento: "Correção laparoscópica de varicocele unilateral"
		},
		{
			codigo: 31204015,
			procedimento: "Biópsia de epidídimo"
		},
		{
			codigo: 31204023,
			procedimento: "Drenagem de abscesso - epidídimo"
		},
		{
			codigo: 31204031,
			procedimento: "Epididimectomia unilateral"
		},
		{
			codigo: 31204040,
			procedimento: "Epididimovasoplastia unilateral"
		},
		{
			codigo: 31204058,
			procedimento: "Epididimovasoplastia unilateral microcirúrgica"
		},
		{
			codigo: 31204066,
			procedimento: "Exérese de cisto unilateral"
		},
		{
			codigo: 31205011,
			procedimento: "Espermatocelectomia unilateral"
		},
		{
			codigo: 31205020,
			procedimento: "Exploração cirúrgica do deferente unilateral"
		},
		{
			codigo: 31205038,
			procedimento: "Recanalização dos ductus deferentes"
		},
		{
			codigo: 31205046,
			procedimento: "Vasectomia unilateral"
		},
		{
			codigo: 31205054,
			procedimento: "Vaso-vasostomia microcirúrgica unilateral (recanalização dos ductos deferentes)"
		},
		{
			codigo: 31205070,
			procedimento: "Cirurgia esterilizadora masculina"
		},
		{
			codigo: 31205089,
			procedimento: "Vasostomia"
		},
		{
			codigo: 31206018,
			procedimento: "Amputação parcial"
		},
		{
			codigo: 31206026,
			procedimento: "Amputação total"
		},
		{
			codigo: 31206034,
			procedimento: "Biópsia peniana"
		},
		{
			codigo: 31206042,
			procedimento: "Doença de Peyronie - tratamento cirúrgico"
		},
		{
			codigo: 31206050,
			procedimento: "Eletrocoagulação de lesões cutâneas"
		},
		{
			codigo: 31206069,
			procedimento: "Emasculação"
		},
		{
			codigo: 31206077,
			procedimento: "Epispadia - reconstrução por etapa"
		},
		{
			codigo: 31206085,
			procedimento: "Epispadia com incontinência - tratamento cirúrgico"
		},
		{
			codigo: 31206093,
			procedimento: "Fratura de pênis - tratamento cirúrgico"
		},
		{
			codigo: 31206107,
			procedimento: "Hipospadia - por estágio - tratamento cirúrgico"
		},
		{
			codigo: 31206115,
			procedimento: "Hipospadia distal - tratamento em 1 tempo - tratamento cirúrgico"
		},
		{
			codigo: 31206123,
			procedimento: "Hipospadia proximal - tratamento em 1 tempo - tratamento cirúrgico"
		},
		{
			codigo: 31206131,
			procedimento: "Implante de prótese inflável"
		},
		{
			codigo: 31206140,
			procedimento: "Implante de prótese semi-rígida (exclui próteses infláveis)"
		},
		{
			codigo: 31206158,
			procedimento: "Neofaloplastia - por estágio"
		},
		{
			codigo: 31206166,
			procedimento: "Neofaloplastia com retalho inguinal pediculado com reconstrução uretral - por estágio"
		},
		{
			codigo: 31206174,
			procedimento: "Parafimose - redução manual ou cirúrgica"
		},
		{
			codigo: 31206182,
			procedimento: "Pênis curvo congênito - tratamento cirúrgico"
		},
		{
			codigo: 31206190,
			procedimento: "Plástica - retalho cutâneo à distância"
		},
		{
			codigo: 31206204,
			procedimento: "Plástica de corpo cavernoso"
		},
		{
			codigo: 31206212,
			procedimento: "Plástica do freio bálano-prepucial"
		},
		{
			codigo: 31206220,
			procedimento: "Postectomia"
		},
		{
			codigo: 31206239,
			procedimento: "Priapismo - tratamento cirúrgico"
		},
		{
			codigo: 31206247,
			procedimento: "Reconstrução de pênis com enxerto - plástica total"
		},
		{
			codigo: 31206255,
			procedimento: "Reimplante do pênis"
		},
		{
			codigo: 31206263,
			procedimento: "Revascularização peniana"
		},
		{
			codigo: 31301010,
			procedimento: "Bartolinectomia unilateral"
		},
		{
			codigo: 31301029,
			procedimento: "Biópsia de vulva"
		},
		{
			codigo: 31301037,
			procedimento: "Cauterização química, ou eletrocauterização, ou criocauterização de lesões da vulva (por grupo de até 5 lesões)"
		},
		{
			codigo: 31301045,
			procedimento: "Clitorectomia (parcial ou total)"
		},
		{
			codigo: 31301053,
			procedimento: "Clitoroplastia"
		},
		{
			codigo: 31301061,
			procedimento: "Excisão radical local da vulva (não inclui a linfadenectomia)"
		},
		{
			codigo: 31301070,
			procedimento: "Exérese de glândula de Skene"
		},
		{
			codigo: 31301088,
			procedimento: "Exérese de lesão da vulva e/ou do períneo (por grupo de até 5 lesões)"
		},
		{
			codigo: 31301096,
			procedimento: "Hipertrofia dos pequenos lábios - correção cirúrgica"
		},
		{
			codigo: 31301100,
			procedimento: "Incisão e drenagem da glândula de Bartholin ou Skene"
		},
		{
			codigo: 31301118,
			procedimento: "Marsupialização da glândula de Bartholin"
		},
		{
			codigo: 31301126,
			procedimento: "Vulvectomia ampliada (não inclui a linfadenectomia)"
		},
		{
			codigo: 31301134,
			procedimento: "Vulvectomia simples"
		},
		{
			codigo: 31301142,
			procedimento: "Laserterapia, trato gential inferior feminino"
		},
		{
			codigo: 31302017,
			procedimento: "Biópsia de vagina"
		},
		{
			codigo: 31302025,
			procedimento: "Colpectomia"
		},
		{
			codigo: 31302033,
			procedimento: "Colpocleise (Lefort)"
		},
		{
			codigo: 31302041,
			procedimento: "Colpoplastia anterior"
		},
		{
			codigo: 31302050,
			procedimento: "Colpoplastia posterior com perineorrafia"
		},
		{
			codigo: 31302068,
			procedimento: "Colporrafia ou colpoperineoplastia incluindo ressecção de septo ou ressutura de parede vaginal"
		},
		{
			codigo: 31302076,
			procedimento: "Colpotomia ou culdocentese"
		},
		{
			codigo: 31302084,
			procedimento: "Exérese de cisto vaginal"
		},
		{
			codigo: 31302092,
			procedimento: "Extração de corpo estranho com anestesia geral ou bloqueio"
		},
		{
			codigo: 31302106,
			procedimento: "Fístula ginecológica - tratamento cirúrgico"
		},
		{
			codigo: 31302114,
			procedimento: "Himenotomia"
		},
		{
			codigo: 31302122,
			procedimento: "Neovagina (cólon, delgado, tubo de pele)"
		},
		{
			codigo: 31302130,
			procedimento: "Cauterização química, ou eletrocauterização, ou criocauterização de lesões da vagina (por grupo de até 5 lesões)"
		},
		{
			codigo: 31303013,
			procedimento: "Aspiração manual intra-uterina (AMIU)"
		},
		{
			codigo: 31303021,
			procedimento: "Biópsia do colo uterino"
		},
		{
			codigo: 31303030,
			procedimento: "Biópsia do endométrio"
		},
		{
			codigo: 31303056,
			procedimento: "Curetagem ginecológica semiótica e/ou terapêutica com ou sem dilatação de colo uterino"
		},
		{
			codigo: 31303064,
			procedimento: "Dilatação do colo uterino"
		},
		{
			codigo: 31303072,
			procedimento: "Excisão de pólipo cervical"
		},
		{
			codigo: 31303080,
			procedimento: "Histerectomia subtotal com ou sem anexectomia, uni ou bilateral - qualquer via"
		},
		{
			codigo: 31303102,
			procedimento: "Histerectomia total - qualquer via"
		},
		{
			codigo: 31303110,
			procedimento: "Histerectomia total ampliada - qualquer via - (não inclui a linfadenectomia pélvica)"
		},
		{
			codigo: 31303129,
			procedimento: "Histerectomia total com anexectomia uni ou bilateral - qualquer via"
		},
		{
			codigo: 31303137,
			procedimento: "Metroplastia (Strassmann ou outra técnica)"
		},
		{
			codigo: 31303145,
			procedimento: "Miomectomia uterina"
		},
		{
			codigo: 31303153,
			procedimento: "Traquelectomia - amputação, conização - (com ou sem cirurgia de alta frequência / CAF)"
		},
		{
			codigo: 31303161,
			procedimento: "Traquelectomia radical (não inclui a linfadenectomia)"
		},
		{
			codigo: 31303170,
			procedimento: "Histeroscopia cirúrgica com biópsia e/ou curetagem uterina, lise de sinéquias, retirada de corpo estranho"
		},
		{
			codigo: 31303188,
			procedimento: "Histeroscopia com ressectoscópio para miomectomia, polipectomia, metroplastia, endometrectomia e ressecção de sinéquias"
		},
		{
			codigo: 31303196,
			procedimento: "Cauterização química, ou eletrocauterização, ou criocauterização de lesões de colo uterino (por sessão)"
		},
		{
			codigo: 31303200,
			procedimento: "Histerectomia subtotal laparoscópica com ou sem anexectomia, uni ou bilateral - via alta"
		},
		{
			codigo: 31303218,
			procedimento: "Histerectomia total laparoscópica"
		},
		{
			codigo: 31303226,
			procedimento: "Histerectomia total laparoscópica ampliada"
		},
		{
			codigo: 31303234,
			procedimento: "Histerectomia total laparoscópica com anexectomia uni ou bilateral"
		},
		{
			codigo: 31303242,
			procedimento: "Metroplastia laparoscópica"
		},
		{
			codigo: 31303250,
			procedimento: "Miomectomia uterina laparoscópica"
		},
		{
			codigo: 31303269,
			procedimento: "Implante de dispositivo intra-uterino (DIU) não hormonal"
		},
		{
			codigo: 31303285,
			procedimento: "Histerectomia puerperal"
		},
		{
			codigo: 31303293,
			procedimento: "Implante de dispositivo intra-uterino (DIU) hormonal"
		},
		{
			codigo: 31303307,
			procedimento: "Retirada de DIU por histeroscopia"
		},
		{
			codigo: 31303315,
			procedimento: "Curetagem uterina pós-parto"
		},
		{
			codigo: 31303323,
			procedimento: "Histerectomia pós-parto"
		},
		{
			codigo: 31304010,
			procedimento: "Esterilização tubária"
		},
		{
			codigo: 31304028,
			procedimento: "Neossalpingostomia distal"
		},
		{
			codigo: 31304036,
			procedimento: "Recanalização tubária (qualquer técnica), uni ou bilateral (com microscópio ou lupa)"
		},
		{
			codigo: 31304044,
			procedimento: "Salpingectomia uni ou bilateral"
		},
		{
			codigo: 31304052,
			procedimento: "Laqueadura tubária laparoscópica"
		},
		{
			codigo: 31304060,
			procedimento: "Neossalpingostomia distal laparoscópica"
		},
		{
			codigo: 31304079,
			procedimento: "Recanalização tubária laparoscópica uni ou bilateral"
		},
		{
			codigo: 31304087,
			procedimento: "Salpingectomia uni ou bilateral laparoscópica"
		},
		{
			codigo: 31304095,
			procedimento: "Implante de dispositivo intratubário não hormonal"
		},
		{
			codigo: 31305016,
			procedimento: "Ooforectomia uni ou bilateral ou ooforoplastia uni ou bilateral"
		},
		{
			codigo: 31305024,
			procedimento: "Translocação de ovários"
		},
		{
			codigo: 31305032,
			procedimento: "Ooforectomia laparoscópica uni ou bilateral ou ooforoplastia uni ou bilateral"
		},
		{
			codigo: 31306012,
			procedimento: "Correção de defeito lateral"
		},
		{
			codigo: 31306020,
			procedimento: "Correção de enterocele"
		},
		{
			codigo: 31306039,
			procedimento: "Correção de rotura perineal de III  grau  (com lesão  do  esfincter)  e  reconstituição  por  plástica - qualquer técnica"
		},
		{
			codigo: 31306047,
			procedimento: "Perineorrafia (não obstétrica) e/ou episiotomia e/ou episiorrafia"
		},
		{
			codigo: 31306055,
			procedimento: "Reconstrução perineal com retalhos miocutâneos"
		},
		{
			codigo: 31306063,
			procedimento: "Ressecção de tumor do septo reto-vaginal"
		},
		{
			codigo: 31306071,
			procedimento: "Seio urogenital - plástica"
		},
		{
			codigo: 31306080,
			procedimento: "Retração cicraticial perineal"
		},
		{
			codigo: 31307019,
			procedimento: "Câncer de ovário (Debulking)"
		},
		{
			codigo: 31307027,
			procedimento: "Cirurgia (via alta  ou  baixa)  do  prolápso  de  cúpula  vaginal (fixação  sacral  ou  no  ligamento sacro-espinhoso) qualquer técnica"
		},
		{
			codigo: 31307035,
			procedimento: "Culdoplastia (Mac Call, Moschowicz, etc.)"
		},
		{
			codigo: 31307043,
			procedimento: "Endometriose peritonial - tratamento cirúrgico"
		},
		{
			codigo: 31307051,
			procedimento: "Epiploplastia ou aplicação de membranas antiaderentes"
		},
		{
			codigo: 31307060,
			procedimento: "Laparoscopia ginecológica com ou sem biópsia (inclui a cromotubagem)"
		},
		{
			codigo: 31307078,
			procedimento: "Liberação de aderências pélvicas com ou sem ressecção de cistos peritoniais ou salpingólise"
		},
		{
			codigo: 31307086,
			procedimento: "Ligadura de veia ovariana"
		},
		{
			codigo: 31307094,
			procedimento: "Ligamentopexia pélvica"
		},
		{
			codigo: 31307108,
			procedimento: "Neurectomia pré-sacral ou do nervo gênito-femoral"
		},
		{
			codigo: 31307116,
			procedimento: "Omentectomia"
		},
		{
			codigo: 31307124,
			procedimento: "Ressecção de tumor de parede abdominal pélvica"
		},
		{
			codigo: 31307132,
			procedimento: "Ressecção ou ligadura de varizes pélvicas"
		},
		{
			codigo: 31307140,
			procedimento: "Secção de ligamentos útero-sacros"
		},
		{
			codigo: 31307159,
			procedimento: "Câncer de ovário (Debulking) laparoscópica"
		},
		{
			codigo: 31307167,
			procedimento: "Cirurgia laparoscópica do prolapso de cúpula vaginal (fixação sacral ou no ligamento sacro-espinhoso)"
		},
		{
			codigo: 31307175,
			procedimento: "Culdoplastia laparoscópica (Mac Call, Moschowicz, etc)"
		},
		{
			codigo: 31307183,
			procedimento: "Endometriose peritoneal - tratamento cirúrgico via laparoscópica"
		},
		{
			codigo: 31307191,
			procedimento: "Epiploplastia ou aplicação de membranas antiaderentes via laparoscópica"
		},
		{
			codigo: 31307205,
			procedimento: "Liberação laparoscópica de aderências pélvicas com ou sem ressecção de cistos peritoneais ou salpingólise"
		},
		{
			codigo: 31307213,
			procedimento: "Ligadura de veia ovariana laparoscópica"
		},
		{
			codigo: 31307221,
			procedimento: "Ligamentopexia pélvica laparoscópica"
		},
		{
			codigo: 31307230,
			procedimento: "Neurectomia laparoscópica pré-sacral ou do nervo gênito-femoral"
		},
		{
			codigo: 31307248,
			procedimento: "Omentectomia laparoscópica"
		},
		{
			codigo: 31307256,
			procedimento: "Ressecção laparoscópica de tumor de parede abdominal"
		},
		{
			codigo: 31307264,
			procedimento: "Ressecção ou ligadura laparoscópica de varizes pélvicas"
		},
		{
			codigo: 31307272,
			procedimento: "Secção laparoscópica de ligamentos útero-sacros"
		},
		{
			codigo: 31307280,
			procedimento: "Endometriose  - tratamento cirúrgico via laparoscópica"
		},
		{
			codigo: 31308015,
			procedimento: "Aspiração de folículos para fertilização"
		},
		{
			codigo: 31308023,
			procedimento: "GIFT (transferência de gametas para as trompas)"
		},
		{
			codigo: 31308031,
			procedimento: "Inseminação artificial"
		},
		{
			codigo: 31308040,
			procedimento: "Transferência de embrião para o útero"
		},
		{
			codigo: 31309011,
			procedimento: "Amniorredução ou amnioinfusão"
		},
		{
			codigo: 31309020,
			procedimento: "Aspiração manual intra-uterina (AMIU) pós-abortamento"
		},
		{
			codigo: 31309038,
			procedimento: "Assistência ao trabalho de parto, por hora (até o limite de 6 horas). Não deverá ser considerado se o parto ocorrer na primeira hora após o início da assistência. Após a primeira hora, além da assistência, remunera-se o parto (via baixa ou cesariana)."
		},
		{
			codigo: 31309046,
			procedimento: "Cerclagem do colo uterino (qualquer técnica)"
		},
		{
			codigo: 31309054,
			procedimento: "Cesariana"
		},
		{
			codigo: 31309062,
			procedimento: "Curetagem pós-abortamento"
		},
		{
			codigo: 31309070,
			procedimento: "Derivações em cirurgia fetal"
		},
		{
			codigo: 31309089,
			procedimento: "Gravidez  ectópica - cirurgia"
		},
		{
			codigo: 31309097,
			procedimento: "Maturação cervical para indução de abortamento ou de trabalho de parto"
		},
		{
			codigo: 31309100,
			procedimento: "Inversão uterina aguda - redução manual"
		},
		{
			codigo: 31309119,
			procedimento: "Inversão uterina - tratamento cirúrgico"
		},
		{
			codigo: 31309127,
			procedimento: "Parto (via vaginal)"
		},
		{
			codigo: 31309135,
			procedimento: "Parto múltiplo (cada um subsequente ao inicial)"
		},
		{
			codigo: 31309143,
			procedimento: "Punção escalpofetal para avaliação PH fetal"
		},
		{
			codigo: 31309151,
			procedimento: "Revisão obstétrica de parto ocorrido fora do hospital (inclui exame, dequitação e sutura de lacerações até de 2º grau)"
		},
		{
			codigo: 31309178,
			procedimento: "Versão cefálica externa"
		},
		{
			codigo: 31309186,
			procedimento: "Gravidez ectópica - cirurgia laparoscópica"
		},
		{
			codigo: 31309194,
			procedimento: "Inversão uterina - tratamento cirúrgico laparoscópico"
		},
		{
			codigo: 31309208,
			procedimento: "Cesariana com histerectomia"
		},
		{
			codigo: 31309216,
			procedimento: "Cirurgia fetal guiada por ultrassonografia"
		},
		{
			codigo: 31309224,
			procedimento: "Cirurgia fetal endoscópica (guiada por ultrassonografia e fetoscópio)"
		},
		{
			codigo: 31309232,
			procedimento: "Intervenção do obstetra na cirurgia fetal a céu aberto"
		},
		{
			codigo: 31309259,
			procedimento: "Amniodrenagem ou amnioinfusão guiadas por ultrassonografia"
		},
		{
			codigo: 31401015,
			procedimento: "Biópsia estereotáxica de encéfalo"
		},
		{
			codigo: 31401023,
			procedimento: "Cingulotomia ou capsulotomia unilateral"
		},
		{
			codigo: 31401031,
			procedimento: "Cirurgia intracraniana por via endoscópica"
		},
		{
			codigo: 31401040,
			procedimento: "Craniotomia para remoção de corpo estranho"
		},
		{
			codigo: 31401058,
			procedimento: "Derivação ventricular externa"
		},
		{
			codigo: 31401066,
			procedimento: "Drenagem estereotáxica - cistos, hematomas ou abscessos"
		},
		{
			codigo: 31401074,
			procedimento: "Hipofisectomia por qualquer método"
		},
		{
			codigo: 31401082,
			procedimento: "Implante de cateter intracraniano"
		},
		{
			codigo: 31401090,
			procedimento: "Implante de eletrodo cerebral profundo"
		},
		{
			codigo: 31401104,
			procedimento: "Implante de eletrodos cerebral ou medular"
		},
		{
			codigo: 31401112,
			procedimento: "Implante estereotáxico de cateter para braquiterapia"
		},
		{
			codigo: 31401120,
			procedimento: "Implante intratecal de bombas para infusão de fármacos"
		},
		{
			codigo: 31401139,
			procedimento: "Localização estereotáxica de corpo estranho intracraniano com remoção"
		},
		{
			codigo: 31401147,
			procedimento: "Localização estereotáxica de lesões intracranianas com remoção"
		},
		{
			codigo: 31401155,
			procedimento: "Microcirurgia para tumores intracranianos"
		},
		{
			codigo: 31401163,
			procedimento: "Microcirurgia por via transesfenoidal"
		},
		{
			codigo: 31401171,
			procedimento: "Microcirurgia vascular intracraniana"
		},
		{
			codigo: 31401198,
			procedimento: "Punção subdural ou ventricular transfontanela"
		},
		{
			codigo: 31401201,
			procedimento: "Ressecção de mucocele frontal"
		},
		{
			codigo: 31401228,
			procedimento: "Revisão de sistema de neuroestimulação"
		},
		{
			codigo: 31401236,
			procedimento: "Sistema de derivação ventricular interna com válvulas ou revisões"
		},
		{
			codigo: 31401244,
			procedimento: "Terceiro ventriculostomia"
		},
		{
			codigo: 31401252,
			procedimento: "Tratamento cirúrgico da epilepsia"
		},
		{
			codigo: 31401260,
			procedimento: "Tratamento cirúrgico da fístula liquórica"
		},
		{
			codigo: 31401279,
			procedimento: "Tratamento cirúrgico da meningoencefalocele"
		},
		{
			codigo: 31401287,
			procedimento: "Tratamento cirúrgico de tumores cerebrais sem microscopia"
		},
		{
			codigo: 31401295,
			procedimento: "Tratamento cirúrgico do abscesso encefálico"
		},
		{
			codigo: 31401309,
			procedimento: "Tratamento cirúrgico do hematoma intracraniano"
		},
		{
			codigo: 31401333,
			procedimento: "Tratamento pré-natal das hidrocefalias e cistos cerebrais"
		},
		{
			codigo: 31401341,
			procedimento: "Acesso endoscópico ao tratamento cirúrgico dos tumores da região selar"
		},
		{
			codigo: 31401350,
			procedimento: "Implantação de halo para radiocirurgia"
		},
		{
			codigo: 31401368,
			procedimento: "Craniectomia para tumores cerebelares"
		},
		{
			codigo: 31401376,
			procedimento: "Craniotomia exploradora com ou sem biópsia"
		},
		{
			codigo: 31401384,
			procedimento: "Traumatismo cranioencefálico - tratamento cirúrgico"
		},
		{
			codigo: 31401392,
			procedimento: "Trepanação para propedêutica neurocirúrgica"
		},
		{
			codigo: 31401406,
			procedimento: "Tumores extracranianos - tratamento cirúrgico"
		},
		{
			codigo: 31402011,
			procedimento: "Cordotomia-mielotomias por radiofrequência"
		},
		{
			codigo: 31402020,
			procedimento: "Lesão de substância gelatinosa medular (DREZ) por radiofrequência"
		},
		{
			codigo: 31402038,
			procedimento: "Tampão sanguíneo peridural para tratamento de cefaléia após punção (não indicada na profilaxia da cefaléia)"
		},
		{
			codigo: 31403018,
			procedimento: "Biópsia de nervo"
		},
		{
			codigo: 31403026,
			procedimento: "Bloqueio de nervo periférico - nervos periféricos"
		},
		{
			codigo: 31403034,
			procedimento: "Denervação percutânea de faceta articular - por segmento"
		},
		{
			codigo: 31403042,
			procedimento: "Enxerto de nervo"
		},
		{
			codigo: 31403050,
			procedimento: "Enxerto de nervo interfascicular, pediculado (1º estágio)"
		},
		{
			codigo: 31403069,
			procedimento: "Enxerto de nervo interfascicular, pediculado (2º estágio)"
		},
		{
			codigo: 31403077,
			procedimento: "Enxerto interfascicular de nervo vascularizado"
		},
		{
			codigo: 31403085,
			procedimento: "Enxerto interfascicular"
		},
		{
			codigo: 31403093,
			procedimento: "Enxerto para reparo de 2 ou mais nervos"
		},
		{
			codigo: 31403107,
			procedimento: "Excisão de tumores de nervos periféricos com enxerto interfascicular"
		},
		{
			codigo: 31403115,
			procedimento: "Excisão de tumores dos nervos periféricos"
		},
		{
			codigo: 31403123,
			procedimento: "Exploração cirúrgica de nervo (neurólise externa)"
		},
		{
			codigo: 31403131,
			procedimento: "Extirpação de neuroma"
		},
		{
			codigo: 31403140,
			procedimento: "Implante de gerador para neuroestimulação"
		},
		{
			codigo: 31403158,
			procedimento: "Lesão de nervos associada à lesão óssea - tratamento cirúrgico"
		},
		{
			codigo: 31403166,
			procedimento: "Lesão estereotáxica de estruturas profundas para tratamento da dor ou movimento anormal"
		},
		{
			codigo: 31403174,
			procedimento: "Microcirurgia do plexo braquial com a exploração, neurólise e enxertos interfasciculares para reparo das lesões"
		},
		{
			codigo: 31403182,
			procedimento: "Microcirurgia do plexo braquial com exploração e neurólise"
		},
		{
			codigo: 31403204,
			procedimento: "Microneurólise intraneural ou intrafascicular de um nervo"
		},
		{
			codigo: 31403212,
			procedimento: "Microneurólise intraneural ou intrafascicular de dois ou mais nervos"
		},
		{
			codigo: 31403220,
			procedimento: "Microneurólise múltiplas"
		},
		{
			codigo: 31403239,
			procedimento: "Microneurólise única"
		},
		{
			codigo: 31403255,
			procedimento: "Microneurorrafia de dedos da mão"
		},
		{
			codigo: 31403263,
			procedimento: "Microneurorrafia múltipla (plexo nervoso)"
		},
		{
			codigo: 31403271,
			procedimento: "Microneurorrafia única"
		},
		{
			codigo: 31403280,
			procedimento: "Neurólise das síndromes compressivas"
		},
		{
			codigo: 31403298,
			procedimento: "Neurotripsia (cada extremidade)"
		},
		{
			codigo: 31403301,
			procedimento: "Reposição de fármaco(s) em bombas implantadas"
		},
		{
			codigo: 31403310,
			procedimento: "Ressecção de neuroma"
		},
		{
			codigo: 31403328,
			procedimento: "Revisão de sistema implantados para infusão de fármacos"
		},
		{
			codigo: 31403336,
			procedimento: "Rizotomia percutânea por segmento - qualquer método"
		},
		{
			codigo: 31403344,
			procedimento: "Simpatectomia"
		},
		{
			codigo: 31403352,
			procedimento: "Transposição de nervo"
		},
		{
			codigo: 31403360,
			procedimento: "Tratamento microcirúrgico das neuropatias compressivas (tumoral, inflamatório, etc)"
		},
		{
			codigo: 31403379,
			procedimento: "Simpatectomia por videotoracoscopia"
		},
		{
			codigo: 31403387,
			procedimento: "Neurotomia"
		},
		{
			codigo: 31404014,
			procedimento: "Descompressão vascular de nervos cranianos"
		},
		{
			codigo: 31404022,
			procedimento: "Neurotomia seletiva do trigêmio"
		},
		{
			codigo: 31404030,
			procedimento: "Tratamento de nevralgia do trigêmio por técnica cirúrgica percutânea - qualquer método (quando orientado por imagem, cobrar código correspondente)"
		},
		{
			codigo: 31405010,
			procedimento: "Bloqueio do sistema nervoso autônomo"
		},
		{
			codigo: 31405029,
			procedimento: "Tratamento cirúrgico de lesão do sistema nervoso autônomo - qualquer método"
		},
		{
			codigo: 31405037,
			procedimento: "Tratamento cirúrgico da síndrome do desfiladeiro cérvico torácico"
		},
		{
			codigo: 31501010,
			procedimento: "Transplante de córnea"
		},
		{
			codigo: 31501028,
			procedimento: "Retirada para transplante - córnea"
		},
		{
			codigo: 31502016,
			procedimento: "Transplante cardíaco (doador)"
		},
		{
			codigo: 31502024,
			procedimento: "Transplante cardíaco (receptor)"
		},
		{
			codigo: 31503012,
			procedimento: "Transplante cardiopulmonar (doador)"
		},
		{
			codigo: 31503020,
			procedimento: "Transplante cardiopulmonar (receptor)"
		},
		{
			codigo: 31504019,
			procedimento: "Transplante pulmonar (doador)"
		},
		{
			codigo: 31504027,
			procedimento: "Transplante pulmonar unilateral (receptor)"
		},
		{
			codigo: 31505015,
			procedimento: "Transplante hepático (receptor)"
		},
		{
			codigo: 31505023,
			procedimento: "Transplante hepático (doador)"
		},
		{
			codigo: 31506011,
			procedimento: "Transplante renal (receptor)"
		},
		{
			codigo: 31506038,
			procedimento: "Nefrectomia em doador vivo - para transplante"
		},
		{
			codigo: 31506046,
			procedimento: "Nefrectomia laparoscópica em doador vivo - para transplante"
		},
		{
			codigo: 31507018,
			procedimento: "Transplante pancreático (receptor)"
		},
		{
			codigo: 31507026,
			procedimento: "Transplante pancreático (doador)"
		},
		{
			codigo: 31601014,
			procedimento: "Acupuntura por sessão"
		},
		{
			codigo: 31602010,
			procedimento: "Analgesia controlada pelo paciente - por dia subsequente"
		},
		{
			codigo: 31602029,
			procedimento: "Analgesia por dia subsequente. Acompanhamento de analgesia por cateter peridural"
		},
		{
			codigo: 31602037,
			procedimento: "Anestesia geral ou condutiva para realização de bloqueio neurolítico"
		},
		{
			codigo: 31602045,
			procedimento: "Bloqueio anestésico de nervos cranianos"
		},
		{
			codigo: 31602053,
			procedimento: "Bloqueio anestésico de plexo celíaco"
		},
		{
			codigo: 31602061,
			procedimento: "Bloqueio anestésico de simpático lombar"
		},
		{
			codigo: 31602070,
			procedimento: "Bloqueio anestésico simpático"
		},
		{
			codigo: 31602088,
			procedimento: "Bloqueio de articulação têmporo-mandibular"
		},
		{
			codigo: 31602096,
			procedimento: "Bloqueio de gânglio estrelado com anestésico local"
		},
		{
			codigo: 31602100,
			procedimento: "Bloqueio de gânglio estrelado com neurolítico"
		},
		{
			codigo: 31602118,
			procedimento: "Bloqueio de nervo periférico - bloqueios anestésicos de nervos e estímulos neurovasculares"
		},
		{
			codigo: 31602126,
			procedimento: "Bloqueio facetário para-espinhoso"
		},
		{
			codigo: 31602134,
			procedimento: "Bloqueio neurolítico de nervos cranianos ou cérvico-torácico"
		},
		{
			codigo: 31602142,
			procedimento: "Bloqueio neurolítico do plexo celíaco, simpático lombar ou torácico"
		},
		{
			codigo: 31602150,
			procedimento: "Bloqueio neurolítico peridural ou subaracnóideo"
		},
		{
			codigo: 31602169,
			procedimento: "Bloqueio peridural ou subaracnóideo com corticóide"
		},
		{
			codigo: 31602177,
			procedimento: "Bloqueio simpático por via venosa"
		},
		{
			codigo: 31602185,
			procedimento: "Estimulação elétrica transcutânea"
		},
		{
			codigo: 31602207,
			procedimento: "Instalação de bomba de infusão para analgesia em dor aguda ou crônica, por qualquer via"
		},
		{
			codigo: 31602215,
			procedimento: "Laser - por sessão"
		},
		{
			codigo: 31602223,
			procedimento: "Passagem de catéter peridural ou subaracnóideo com bloqueio de prova"
		},
		{
			codigo: 31602231,
			procedimento: "Anestesia para endoscopia diagnóstica"
		},
		{
			codigo: 31602240,
			procedimento: "Anestesia para endoscopia intervencionista"
		},
		{
			codigo: 31602258,
			procedimento: "Anestesia para exames radiológicos de angiorradiologia"
		},
		{
			codigo: 31602266,
			procedimento: "Anestesia para exames de ultrassonografia"
		},
		{
			codigo: 31602274,
			procedimento: "Anestesia para exames de tomografia computadorizada "
		},
		{
			codigo: 31602282,
			procedimento: "Anestesia para exames de ressonância magnética "
		},
		{
			codigo: 31602290,
			procedimento: "Anestesia para procedimentos de radioterapia"
		},
		{
			codigo: 31602304,
			procedimento: "Anestesia para exames específicos, teste para diagnóstico e outros procedimentos diagnósticos"
		},
		{
			codigo: 31602312,
			procedimento: "Anestesia para procedimentos clínicos ambulatoriais e hospitalares"
		},
		{
			codigo: 31602320,
			procedimento: "Anestesia para procedimentos de medicina nuclear"
		},
		{
			codigo: 31602339,
			procedimento: "Bloqueio anestésico de plexos nervosos (lombossacro, braquial, cervical) para tratamento de dor"
		},
		{
			codigo: 40101010,
			procedimento: "ECG convencional de até 12 derivações"
		},
		{
			codigo: 40101029,
			procedimento: "ECG de alta resolução"
		},
		{
			codigo: 40101037,
			procedimento: "Teste ergométrico computadorizado (inclui ECG basal convencional)"
		},
		{
			codigo: 40101045,
			procedimento: "Teste ergométrico convencional - 3 ou mais derivações simultâneas (inclui ECG basal convencional)"
		},
		{
			codigo: 40101053,
			procedimento: "Variabilidade da frequência cardíaca"
		},
		{
			codigo: 40101061,
			procedimento: "Ergoespirometria ou teste cardiopulmonar de exercício completo (espirometria forçada, consumo de O2, produção de CO2 e derivados, ECG, oximetria)"
		},
		{
			codigo: 40102017,
			procedimento: "Bilimetria gástrica ou esofágica de 24 horas"
		},
		{
			codigo: 40102025,
			procedimento: "Manometria computadorizada anorretal"
		},
		{
			codigo: 40102033,
			procedimento: "Manometria computadorizada anorretal para biofeedback - 1ª sessão"
		},
		{
			codigo: 40102041,
			procedimento: "Manometria computadorizada anorretal para biofeedback - demais sessões"
		},
		{
			codigo: 40102050,
			procedimento: "Manometria esofágica computadorizada com teste provocativo"
		},
		{
			codigo: 40102068,
			procedimento: "Manometria esofágica computadorizada sem teste provocativo"
		},
		{
			codigo: 40102076,
			procedimento: "Manometria esofágica para localização dos esfíncteres pré-pH-metria"
		},
		{
			codigo: 40102084,
			procedimento: "pH-metria esofágica computadorizada com um canal"
		},
		{
			codigo: 40102092,
			procedimento: "pH-metria esofágica computadorizada com dois canais"
		},
		{
			codigo: 40102106,
			procedimento: "pH-metria esofágica computadorizada com três canais"
		},
		{
			codigo: 40102114,
			procedimento: "Impedâncio pH-metria esofágica"
		},
		{
			codigo: 40102122,
			procedimento: "pH-metria gástrica de 24 horas com quatro canais"
		},
		{
			codigo: 40102130,
			procedimento: "pH-metria esofágica de 24 horas com quatro canais"
		},
		{
			codigo: 40102149,
			procedimento: "Manometria Biliar"
		},
		{
			codigo: 40103013,
			procedimento: "Análise computadorizada da voz"
		},
		{
			codigo: 40103021,
			procedimento: "Análise computadorizada de papila e/ou fibras nervosas - monocular (GDX)"
		},
		{
			codigo: 40103030,
			procedimento: "Análise computadorizada do segmento anterior - monocular"
		},
		{
			codigo: 40103048,
			procedimento: "Audiometria (tipo Von Bekesy)"
		},
		{
			codigo: 40103056,
			procedimento: "Potencial evocado estacionário (Steady State)"
		},
		{
			codigo: 40103064,
			procedimento: "Audiometria de tronco cerebral (PEA) BERA"
		},
		{
			codigo: 40103072,
			procedimento: "Audiometria tonal limiar com testes de discriminação"
		},
		{
			codigo: 40103080,
			procedimento: "Audiometria tonal limiar infantil condicionada (qualquer técnica) - Peep-show"
		},
		{
			codigo: 40103099,
			procedimento: "Audiometria vocal - pesquisa de limiar de discriminação"
		},
		{
			codigo: 40103102,
			procedimento: "Audiometria vocal - pesquisa de limiar de inteligibilidade"
		},
		{
			codigo: 40103110,
			procedimento: "Audiometria vocal com mensagem competitiva (SSI, SSW)"
		},
		{
			codigo: 40103129,
			procedimento: "Avaliação neurofisiológica  da função  sexual (inclui eletroneuromiografia de MMII, RBC, NCDP, PEGC)"
		},
		{
			codigo: 40103137,
			procedimento: "Campimetria computadorizada - monocular"
		},
		{
			codigo: 40103145,
			procedimento: "Variação de contingente negativo (PE/Tardio)"
		},
		{
			codigo: 40103153,
			procedimento: "Craniocorporografia"
		},
		{
			codigo: 40103161,
			procedimento: "Decay do reflexo estapédico"
		},
		{
			codigo: 40103170,
			procedimento: "EEG de rotina"
		},
		{
			codigo: 40103188,
			procedimento: "EEG intra-operatório para monitorização cirúrgica (EEG/IO) - por hora de monitorização"
		},
		{
			codigo: 40103196,
			procedimento: "EEGQ quantitativo (mapeamento cerebral)"
		},
		{
			codigo: 40103200,
			procedimento: "Eletrencefalograma especial: terapia intensiva, morte encefálica, EEG prolongado (até 2 horas)"
		},
		{
			codigo: 40103234,
			procedimento: "Eletrencefalograma em vigília, e sono espontâneo ou induzido"
		},
		{
			codigo: 40103242,
			procedimento: "Eletro-oculografia - monocular"
		},
		{
			codigo: 40103250,
			procedimento: "Eletro-retinografia - monocular"
		},
		{
			codigo: 40103269,
			procedimento: "Eletrococleografia (Ecochg)"
		},
		{
			codigo: 40103277,
			procedimento: "Eletrocorticografia intra-operatória (ECOG) - por hora de monitorização"
		},
		{
			codigo: 40103285,
			procedimento: "Eletroglotografia"
		},
		{
			codigo: 40103307,
			procedimento: "Eletroneuromiografia (velocidade de condução) testes de estímulos para paralisia facial"
		},
		{
			codigo: 40103315,
			procedimento: "Eletroneuromiografia de MMII"
		},
		{
			codigo: 40103323,
			procedimento: "Eletroneuromiografia de MMSS"
		},
		{
			codigo: 40103331,
			procedimento: "Eletroneuromiografia de MMSS e MMII"
		},
		{
			codigo: 40103340,
			procedimento: "Eletroneuromiografia de segmento complementar"
		},
		{
			codigo: 40103358,
			procedimento: "Eletroneuromiografia de segmento especial"
		},
		{
			codigo: 40103366,
			procedimento: "Eletroneuromiografia genitoperineal"
		},
		{
			codigo: 40103374,
			procedimento: "EMG com registro de movimento involuntário (teste dinâmico de escrita; estudo funcional de tremores)"
		},
		{
			codigo: 40103382,
			procedimento: "EMG para monitoração de quimodenervação (por sessão)"
		},
		{
			codigo: 40103390,
			procedimento: "EMG quantitativa ou EMG de fibra única"
		},
		{
			codigo: 40103404,
			procedimento: "Espectrografia vocal"
		},
		{
			codigo: 40103412,
			procedimento: "Gustometria"
		},
		{
			codigo: 40103420,
			procedimento: "Imitanciometria de alta frequência"
		},
		{
			codigo: 40103439,
			procedimento: "Impedanciometria"
		},
		{
			codigo: 40103447,
			procedimento: "Método de Proetz (por sessão)"
		},
		{
			codigo: 40103455,
			procedimento: "Otoemissões acústicas produto de distorção"
		},
		{
			codigo: 40103463,
			procedimento: "Otoemissões evocadas transientes"
		},
		{
			codigo: 40103471,
			procedimento: "Perimetria com scanning laser ophthalmoscope - monocular"
		},
		{
			codigo: 40103480,
			procedimento: "Pesquisa de pares cranianos relacionados com o VIII PAR"
		},
		{
			codigo: 40103498,
			procedimento: "Potencial evocado auditivo de tronco cerebral (PEA-TC)"
		},
		{
			codigo: 40103501,
			procedimento: "Pesquisa do fenômeno de Tullio"
		},
		{
			codigo: 40103510,
			procedimento: "Poligrafia de recém-nascido (maior ou igual 2 horas) (PG/RN)"
		},
		{
			codigo: 40103528,
			procedimento: "Polissonografia de noite inteira (PSG) (inclui polissonogramas)"
		},
		{
			codigo: 40103536,
			procedimento: "Polissonograma com EEG de noite inteira"
		},
		{
			codigo: 40103544,
			procedimento: "Polissonograma com teste de CPAP nasal"
		},
		{
			codigo: 40103552,
			procedimento: "Posturografia"
		},
		{
			codigo: 40103560,
			procedimento: "Potencial evocado - P300"
		},
		{
			codigo: 40103579,
			procedimento: "Potencial evocado auditivo de média latência (PEA-ML) bilateral"
		},
		{
			codigo: 40103587,
			procedimento: "Potencial somato-sensitivo para localização funcional da área central (monitorização por hora) até 3 horas"
		},
		{
			codigo: 40103595,
			procedimento: "Potencial evocado gênito-cortical (PEGC)"
		},
		{
			codigo: 40103609,
			procedimento: "Potencial evocado motor - PEM (bilateral)"
		},
		{
			codigo: 40103617,
			procedimento: "Potencial evocado somato-sensitivo - membros inferiores (PESS)"
		},
		{
			codigo: 40103625,
			procedimento: "Potencial evocado somato-sensitivo - membros superiores (PESS)"
		},
		{
			codigo: 40103633,
			procedimento: "Potencial evocado visual (PEV)"
		},
		{
			codigo: 40103641,
			procedimento: "Provas de função tubária"
		},
		{
			codigo: 40103650,
			procedimento: "Registro do nistagmo pendular"
		},
		{
			codigo: 40103668,
			procedimento: "Rinomanometria computadorizada"
		},
		{
			codigo: 40103676,
			procedimento: "Rinometria acústica"
		},
		{
			codigo: 40103684,
			procedimento: "Reflexo cutâneo-simpático"
		},
		{
			codigo: 40103714,
			procedimento: "Teste de estimulação repetitiva (um ou mais músculos)"
		},
		{
			codigo: 40103722,
			procedimento: "Teste de fístula perilinfática com eletronistagmografia"
		},
		{
			codigo: 40103730,
			procedimento: "Teste de latências múltiplas de sono (TLMS) diurno pós PSG"
		},
		{
			codigo: 40103749,
			procedimento: "Vectoeletronistagmografia - computadorizada"
		},
		{
			codigo: 40103757,
			procedimento: "Vídeo-eletrencefalografia contínua não invasiva - 12 horas (vídeo EEG/NT)"
		},
		{
			codigo: 40103765,
			procedimento: "Videonistagmografia infravermelha"
		},
		{
			codigo: 40103781,
			procedimento: "Audiometria ocupacional ou de seleção"
		},
		{
			codigo: 40103790,
			procedimento: "Audiometrias de altas frequências"
		},
		{
			codigo: 40103803,
			procedimento: "Avaliação da função auditiva central"
		},
		{
			codigo: 40103811,
			procedimento: "Eletrodiagnóstico"
		},
		{
			codigo: 40103820,
			procedimento: "Pesquisa do nistagmo optocinético"
		},
		{
			codigo: 40103838,
			procedimento: "Prova de Doerfler-Stewart"
		},
		{
			codigo: 40103846,
			procedimento: "Prova de Stenger"
		},
		{
			codigo: 40103854,
			procedimento: "Teste de Fowler"
		},
		{
			codigo: 40103862,
			procedimento: "Eletroencefalograma com eletrodos especiais"
		},
		{
			codigo: 40103870,
			procedimento: "Potencial evocado do nervo trigêmeo"
		},
		{
			codigo: 40103889,
			procedimento: "Processamento auditivo central infantil (de 3 a 7 anos)"
		},
		{
			codigo: 40103897,
			procedimento: "Processamento auditivo central (a partir dos 7 anos e adulto)"
		},
		{
			codigo: 40104010,
			procedimento: "Avaliação muscular por dinamometria computadorizada (isocinética) - por articulação"
		},
		{
			codigo: 40104028,
			procedimento: "Cronaximetria"
		},
		{
			codigo: 40104036,
			procedimento: "Curva  I/T - medida de latência de nervo periférico"
		},
		{
			codigo: 40104044,
			procedimento: "Ergotonometria músculo-esquelético (tetra, paraparesia e hemiparesia)"
		},
		{
			codigo: 40104125,
			procedimento: "Sistema tridimensional de avaliação do movimento que inclui vídeo acoplado à plataforma da força e eletromiografia"
		},
		{
			codigo: 40105016,
			procedimento: "Determinação das pressões respiratórias máximas"
		},
		{
			codigo: 40105024,
			procedimento: "Determinação dos volumes pulmonares por diluição de gases"
		},
		{
			codigo: 40105032,
			procedimento: "Determinação dos volumes pulmonares por pletismografia"
		},
		{
			codigo: 40105040,
			procedimento: "Medida da difusão do monóxido de carbono"
		},
		{
			codigo: 40105059,
			procedimento: "Medida de pico de fluxo expiratório"
		},
		{
			codigo: 40105067,
			procedimento: "Medida seriada por 3 semanas do pico de fluxo expiratório"
		},
		{
			codigo: 40105075,
			procedimento: "Prova de função pulmonar completa (ou espirometria)"
		},
		{
			codigo: 40105083,
			procedimento: "Resistência das vias aéreas por oscilometria"
		},
		{
			codigo: 40105091,
			procedimento: "Resistência das vias aéreas por pletismografia"
		},
		{
			codigo: 40105105,
			procedimento: "Espirografia Simples - capacidade vital lenta"
		},
		{
			codigo: 40105113,
			procedimento: "Regulação ventilatória - 1) medida de ventilação e do padrão ventilatório"
		},
		{
			codigo: 40105121,
			procedimento: "Regulação ventilatória - 2) determinação da pressão de oclusão"
		},
		{
			codigo: 40105130,
			procedimento: "Regulação ventilatória - 3) resposta a hipoxia e hipercapnia"
		},
		{
			codigo: 40105148,
			procedimento: "Espirometria"
		},
		{
			codigo: 40201015,
			procedimento: "Amnioscopia"
		},
		{
			codigo: 40201023,
			procedimento: "Anuscopia (interna e externa)"
		},
		{
			codigo: 40201031,
			procedimento: "Broncoscopia com biópsia transbrônquica"
		},
		{
			codigo: 40201058,
			procedimento: "Broncoscopia com ou sem aspirado ou lavado brônquico bilateral"
		},
		{
			codigo: 40201066,
			procedimento: "Cistoscopia e/ou uretroscopia"
		},
		{
			codigo: 40201074,
			procedimento: "Colangiopancreatografia retrógrada endoscópica"
		},
		{
			codigo: 40201082,
			procedimento: "Colonoscopia (inclui a retossigmoidoscopia)"
		},
		{
			codigo: 40201090,
			procedimento: "Colonoscopia com magnificação"
		},
		{
			codigo: 40201104,
			procedimento: "Ecoendoscopia alta"
		},
		{
			codigo: 40201112,
			procedimento: "Ecoendoscopia baixa"
		},
		{
			codigo: 40201120,
			procedimento: "Endoscopia digestiva alta"
		},
		{
			codigo: 40201139,
			procedimento: "Endoscopia digestiva alta com magnificação"
		},
		{
			codigo: 40201147,
			procedimento: "Enteroscopia"
		},
		{
			codigo: 40201155,
			procedimento: "Histeroscopia diagnóstica com biópsia"
		},
		{
			codigo: 40201163,
			procedimento: "Laparoscopia"
		},
		{
			codigo: 40201171,
			procedimento: "Retossigmoidoscopia flexível"
		},
		{
			codigo: 40201180,
			procedimento: "Retossigmoidoscopia rígida"
		},
		{
			codigo: 40201198,
			procedimento: "Vídeo-endoscopia do esfíncter velo-palatino com ótica flexível"
		},
		{
			codigo: 40201201,
			procedimento: "Vídeo-endoscopia do esfíncter velo-palatino com ótica rígida"
		},
		{
			codigo: 40201210,
			procedimento: "Vídeo-endoscopia naso-sinusal com ótica flexível"
		},
		{
			codigo: 40201228,
			procedimento: "Vídeo-endoscopia naso-sinusal com ótica rígida"
		},
		{
			codigo: 40201236,
			procedimento: "Vídeo-laringo-estroboscopia com endoscópio flexível"
		},
		{
			codigo: 40201244,
			procedimento: "Vídeo-laringo-estroboscopia com endoscópio rígido"
		},
		{
			codigo: 40201252,
			procedimento: "Vídeo-faringo-laringoscopia com endoscópio flexível"
		},
		{
			codigo: 40201260,
			procedimento: "Vídeo-faringo-laringoscopia com endoscópio rígido"
		},
		{
			codigo: 40201279,
			procedimento: "Ureteroscopia flexível unilateral"
		},
		{
			codigo: 40201287,
			procedimento: "Ureteroscopia rígida unilateral"
		},
		{
			codigo: 40201309,
			procedimento: "Avaliação endoscópica da deglutição (FEES)"
		},
		{
			codigo: 40201317,
			procedimento: "Medida de pressão de varizes de esôfago endoscópica"
		},
		{
			codigo: 40201325,
			procedimento: "Videoquimografia laríngea"
		},
		{
			codigo: 40201333,
			procedimento: "Endoscopia digestiva alta com cromoscopia"
		},
		{
			codigo: 40201341,
			procedimento: "Enteroscopia do intestino delgado com cápsula endoscópica"
		},
		{
			codigo: 40201350,
			procedimento: "Colonoscopia com cromoscopia"
		},
		{
			codigo: 40201368,
			procedimento: "Broncoscopia com cromoscopia"
		},
		{
			codigo: 40201376,
			procedimento: "Aplicação de plasma de argônio por endoscopia digestiva alta"
		},
		{
			codigo: 40201384,
			procedimento: "Aplicação de plasma de argônio por broncoscopia"
		},
		{
			codigo: 40201392,
			procedimento: "Aplicação de plasma de argônio por colonoscopia"
		},
		{
			codigo: 40201406,
			procedimento: "Aplicação de plasma de argônio por sigmoidoscopia"
		},
		{
			codigo: 40202011,
			procedimento: "Aritenoidectomia microcirúrgica endoscópica"
		},
		{
			codigo: 40202038,
			procedimento: "Endoscopia digestiva alta com biópsia e/ou citologia"
		},
		{
			codigo: 40202046,
			procedimento: "Biópsias por laparoscopia"
		},
		{
			codigo: 40202054,
			procedimento: "Broncoscopia com biópsia transbrônquica com acompanhamento radioscópico"
		},
		{
			codigo: 40202062,
			procedimento: "Cecostomia"
		},
		{
			codigo: 40202070,
			procedimento: "Cistoenterostomia com colocação de prótese ou dreno"
		},
		{
			codigo: 40202089,
			procedimento: "Colagem de fístula por via endoscópica"
		},
		{
			codigo: 40202097,
			procedimento: "Colocação de cânula sob orientação endoscópica"
		},
		{
			codigo: 40202100,
			procedimento: "Colocação de cateter para braquiterapia endobrônquica"
		},
		{
			codigo: 40202119,
			procedimento: "Colocação de prótese coledociana por via endoscópica"
		},
		{
			codigo: 40202127,
			procedimento: "Colocação de prótese traqueal ou brônquica"
		},
		{
			codigo: 40202135,
			procedimento: "Colonoscopia com magnificação e tatuagem"
		},
		{
			codigo: 40202143,
			procedimento: "Descompressão colônica por colonoscopia"
		},
		{
			codigo: 40202151,
			procedimento: "Desobstrução brônquica com laser ou eletrocautério"
		},
		{
			codigo: 40202160,
			procedimento: "Desobstrução brônquica por broncoaspiração"
		},
		{
			codigo: 40202178,
			procedimento: "Dilatação de estenose laringo-traqueo-brônquica"
		},
		{
			codigo: 40202186,
			procedimento: "Dilatação instrumental do esôfago, estômago ou duodeno"
		},
		{
			codigo: 40202194,
			procedimento: "Dilatação instrumental e injeção de substância medicamentosa por endoscopia"
		},
		{
			codigo: 40202208,
			procedimento: "Diverticulotomia - aparelho digestivo"
		},
		{
			codigo: 40202216,
			procedimento: "Drenagem cavitária por laparoscopia"
		},
		{
			codigo: 40202224,
			procedimento: "Ecoendoscopia com cistoenterostomia"
		},
		{
			codigo: 40202232,
			procedimento: "Ecoendoscopia com neurólise de plexo celíaco"
		},
		{
			codigo: 40202240,
			procedimento: "Ecoendoscopia com punção por agulha"
		},
		{
			codigo: 40202259,
			procedimento: "Esclerose de varizes de esôfago, estômago ou duodeno"
		},
		{
			codigo: 40202267,
			procedimento: "Estenostomia endoscópica"
		},
		{
			codigo: 40202283,
			procedimento: "Gastrostomia endoscópica"
		},
		{
			codigo: 40202291,
			procedimento: "Hemostasia mecânica do esôfago, estômago ou duodeno"
		},
		{
			codigo: 40202305,
			procedimento: "Hemostasia térmica por endoscopia"
		},
		{
			codigo: 40202313,
			procedimento: "Hemostasias de cólon"
		},
		{
			codigo: 40202330,
			procedimento: "Injeção de substância medicamentosa por endoscopia"
		},
		{
			codigo: 40202348,
			procedimento: "Introdução de prótese no esôfago"
		},
		{
			codigo: 40202356,
			procedimento: "Jejunostomia endoscópica"
		},
		{
			codigo: 40202364,
			procedimento: "Laringoscopia com microscopia para exérese de pólipo/nódulo/papiloma"
		},
		{
			codigo: 40202372,
			procedimento: "Laringoscopia com retirada de corpo estranho de laringe/faringe (tubo flexível)"
		},
		{
			codigo: 40202399,
			procedimento: "Laringoscopia/traqueoscopia com exérese de pólipo/nódulo/papiloma"
		},
		{
			codigo: 40202410,
			procedimento: "Laringoscopia/traqueoscopia com retirada de corpo estranho (tubo rígido)"
		},
		{
			codigo: 40202429,
			procedimento: "Laringoscopia/traqueoscopia para diagnóstico e biópsia (tubo rígido)"
		},
		{
			codigo: 40202437,
			procedimento: "Laringoscopia/traqueoscopia para diagnóstico e biópsia com aparelho flexível"
		},
		{
			codigo: 40202445,
			procedimento: "Laringoscopia/traqueoscopia para intubação oro ou nasotraqueal"
		},
		{
			codigo: 40202453,
			procedimento: "Ligadura elástica do esôfago, estômago ou duodeno"
		},
		{
			codigo: 40202470,
			procedimento: "Mucosectomia"
		},
		{
			codigo: 40202488,
			procedimento: "Nasofibrolaringoscopia para dignóstico e/ou biópsia"
		},
		{
			codigo: 40202496,
			procedimento: "Papilotomia biópsia e/ou citologia biliar e pancreática"
		},
		{
			codigo: 40202500,
			procedimento: "Papilotomia e dilatação biliar ou pancreática"
		},
		{
			codigo: 40202518,
			procedimento: "Papilotomia endoscópica (para retirada de cálculos coledocianos ou drenagem biliar)"
		},
		{
			codigo: 40202526,
			procedimento: "Papilotomia, dilatação e colocação de prótese ou dreno biliar ou pancreático"
		},
		{
			codigo: 40202534,
			procedimento: "Passagem de sonda naso-enteral"
		},
		{
			codigo: 40202542,
			procedimento: "Polipectomia de cólon (independente do número de pólipos)"
		},
		{
			codigo: 40202550,
			procedimento: "Polipectomia do esôfago, estômago ou duodeno (independente do número de pólipos)"
		},
		{
			codigo: 40202569,
			procedimento: "Retirada de corpo estranho do cólon"
		},
		{
			codigo: 40202577,
			procedimento: "Retirada de corpo estranho do esôfago, estômago ou duodeno"
		},
		{
			codigo: 40202585,
			procedimento: "Retirada de corpo estranho no brônquio ou brônquico"
		},
		{
			codigo: 40202593,
			procedimento: "Retirada de tumor ou papiloma por broncoscopia"
		},
		{
			codigo: 40202607,
			procedimento: "Tamponamento de varizes do esôfago e estômago"
		},
		{
			codigo: 40202615,
			procedimento: "Endoscopia digestiva alta com biópsia e teste de urease (pesquisa Helicobacter pylori)"
		},
		{
			codigo: 40202623,
			procedimento: "Traqueostomia por punção percutânea"
		},
		{
			codigo: 40202631,
			procedimento: "Tratamento endoscópico de hemoptise"
		},
		{
			codigo: 40202640,
			procedimento: "Uretrotomia endoscópica"
		},
		{
			codigo: 40202658,
			procedimento: "Colocação de balão intragástrico por via endoscópica para obesidade mórbida"
		},
		{
			codigo: 40202666,
			procedimento: "Colonoscopia com biópsia e/ou citologia"
		},
		{
			codigo: 40202674,
			procedimento: "Colonoscopia com dilatação segmentar"
		},
		{
			codigo: 40202682,
			procedimento: "Retossigmoidoscopia flexível com polipectomia"
		},
		{
			codigo: 40202690,
			procedimento: "Retossigmoidoscopia flexível com biópsia e/ou citologia"
		},
		{
			codigo: 40202704,
			procedimento: "Colonoscopia com estenostomia"
		},
		{
			codigo: 40202712,
			procedimento: "Colonoscopia com mucosectomia"
		},
		{
			codigo: 40202720,
			procedimento: "Retossigmoidoscopia rígida com biópsia e/ou citologia"
		},
		{
			codigo: 40202739,
			procedimento: "Retossigmoidoscopia rígida com polipectomia"
		},
		{
			codigo: 40202747,
			procedimento: "Endoscopia digestiva alta com cromoscopia e biópsia e/ou citologia"
		},
		{
			codigo: 40202755,
			procedimento: "Colonoscopia com tratamento de fístula"
		},
		{
			codigo: 40202763,
			procedimento: "Laringoscopia/traqueoscopia com laser para exérese de papiloma/tumor"
		},
		{
			codigo: 40202771,
			procedimento: "Retirada de balão intragástrico por via endoscópica"
		},
		{
			codigo: 40301010,
			procedimento: "3-metil histidina, pesquisa e/ou dosagem no soro"
		},
		{
			codigo: 40301028,
			procedimento: "5-nucleotidase - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301036,
			procedimento: "Acetaminofen - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301044,
			procedimento: "Acetilcolinesterase, em eritrócitos - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301052,
			procedimento: "Acetona, pesquisa e/ou dosagem no soro"
		},
		{
			codigo: 40301060,
			procedimento: "Ácido ascórbico (vitamina C) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301079,
			procedimento: "Ácido beta hidroxi butírico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301087,
			procedimento: "Ácido fólico, pesquisa e/ou dosagem nos eritrócitos"
		},
		{
			codigo: 40301095,
			procedimento: "Ácido glioxílico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301109,
			procedimento: "Ácido láctico (lactato) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301117,
			procedimento: "Ácido orótico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301125,
			procedimento: "Ácido oxálico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301133,
			procedimento: "Ácido pirúvico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301141,
			procedimento: "Ácido siálico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301150,
			procedimento: "Ácido úrico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301168,
			procedimento: "Ácido valpróico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301176,
			procedimento: "Ácidos biliares - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301184,
			procedimento: "Ácidos graxos livres - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301192,
			procedimento: "Ácidos orgânicos (perfil quantitativo)"
		},
		{
			codigo: 40301206,
			procedimento: "Acilcarnitinas (perfil qualitativo)"
		},
		{
			codigo: 40301214,
			procedimento: "Acilcarnitinas (perfil quantitativo)"
		},
		{
			codigo: 40301222,
			procedimento: "Albumina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301230,
			procedimento: "Aldolase - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301249,
			procedimento: "Alfa-1-antitripsina, pesquisa e/ou dosagem no soro"
		},
		{
			codigo: 40301257,
			procedimento: "Alfa-1-glicoproteína ácida - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301265,
			procedimento: "Alfa-2-macroglobulina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301273,
			procedimento: "Alumínio, pesquisa e/ou dosagem no soro"
		},
		{
			codigo: 40301281,
			procedimento: "Amilase - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301290,
			procedimento: "Aminoácidos, fracionamento e quantificação"
		},
		{
			codigo: 40301303,
			procedimento: "Amiodarona - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301311,
			procedimento: "Amitriptilina, nortriptilina (cada) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301320,
			procedimento: "Amônia - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301338,
			procedimento: "Anfetaminas, pesquisa e/ou dosagem"
		},
		{
			codigo: 40301346,
			procedimento: "Antibióticos, pesquisa e/ou dosagem no soro, cada"
		},
		{
			codigo: 40301354,
			procedimento: "Apolipoproteína A (Apo A) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301362,
			procedimento: "Apolipoproteína B (Apo B) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301370,
			procedimento: "Barbitúricos, antidepressivos tricíclicos (cada) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301389,
			procedimento: "Beta-glicuronidase - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301397,
			procedimento: "Bilirrubinas (direta, indireta e total) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301400,
			procedimento: "Cálcio - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301419,
			procedimento: "Cálcio iônico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301427,
			procedimento: "Capacidade de fixação de ferro - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301435,
			procedimento: "Carbamazepina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301443,
			procedimento: "Carnitina livre - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301451,
			procedimento: "Carnitina total e frações - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301460,
			procedimento: "Caroteno - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301478,
			procedimento: "Ceruloplasmina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301486,
			procedimento: "Ciclosporina, methotrexate - cada - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301494,
			procedimento: "Clearance de ácido úrico"
		},
		{
			codigo: 40301508,
			procedimento: "Clearance de creatinina"
		},
		{
			codigo: 40301516,
			procedimento: "Clearance de fosfato"
		},
		{
			codigo: 40301524,
			procedimento: "Clearance de uréia"
		},
		{
			codigo: 40301532,
			procedimento: "Clearance osmolar"
		},
		{
			codigo: 40301540,
			procedimento: "Clomipramina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301559,
			procedimento: "Cloro - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301567,
			procedimento: "Cobre - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301575,
			procedimento: "Cocaína, pesquisa e/ou dosagem"
		},
		{
			codigo: 40301583,
			procedimento: "Colesterol (HDL) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301591,
			procedimento: "Colesterol (LDL) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301605,
			procedimento: "Colesterol total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301613,
			procedimento: "Cotinina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301621,
			procedimento: "Creatina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301630,
			procedimento: "Creatinina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301648,
			procedimento: "Creatino fosfoquinase total (CK) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301656,
			procedimento: "Creatino fosfoquinase - fração MB - massa - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301664,
			procedimento: "Creatino fosfoquinase - fração MB - atividade - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301672,
			procedimento: "Cromatografia de aminoácidos (perfil qualitatitivo) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301680,
			procedimento: "Curva glicêmica (4 dosagens) via oral ou endovenosa"
		},
		{
			codigo: 40301699,
			procedimento: "Desidrogenase alfa-hidroxibutírica - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301702,
			procedimento: "Desidrogenase glutâmica - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301710,
			procedimento: "Desidrogenase isocítrica - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301729,
			procedimento: "Desidrogenase láctica - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301737,
			procedimento: "Desidrogenase láctica - isoenzimas fracionadas - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301745,
			procedimento: "Benzodiazepínicos e similares (cada) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301753,
			procedimento: "Digitoxina ou digoxina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301761,
			procedimento: "Eletroferese de proteínas"
		},
		{
			codigo: 40301770,
			procedimento: "Eletroforese de glicoproteínas"
		},
		{
			codigo: 40301788,
			procedimento: "Eletroforese de lipoproteínas"
		},
		{
			codigo: 40301796,
			procedimento: "Enolase - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301800,
			procedimento: "Etossuximida - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301818,
			procedimento: "Fenilalanina, pesquisa e/ou dosagem"
		},
		{
			codigo: 40301826,
			procedimento: "Fenitoína - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301834,
			procedimento: "Fenobarbital - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301842,
			procedimento: "Ferro sérico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301850,
			procedimento: "Formaldeído - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301869,
			procedimento: "Fosfatase ácida fração prostática - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301877,
			procedimento: "Fosfatase ácida total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301885,
			procedimento: "Fosfatase alcalina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301893,
			procedimento: "Fosfatase alcalina com fracionamento de isoenzimas - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301907,
			procedimento: "Fosfatase alcalina fração óssea - Elisa - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301915,
			procedimento: "Fosfatase alcalina termo-estável - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301923,
			procedimento: "Fosfolipídios - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301931,
			procedimento: "Fósforo - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301940,
			procedimento: "Fósforo, prova de reabsorção tubular"
		},
		{
			codigo: 40301958,
			procedimento: "Frutosaminas (proteínas glicosiladas) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301966,
			procedimento: "Frutose - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301974,
			procedimento: "Galactose - pesquisa e/ou dosagem"
		},
		{
			codigo: 40301982,
			procedimento: "Galactose 1-fosfatouridil transferase, pesquisa e/ou dosagem"
		},
		{
			codigo: 40301990,
			procedimento: "Gama-glutamil transferase - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302016,
			procedimento: "Gasometria (pH, pCO2, SA, O2, excesso base) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302024,
			procedimento: "Gasometria + Hb + Ht + Na +  K + Cl + Ca + glicose + lactato (quando efetuado no gasômetro) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302032,
			procedimento: "Glicemia após sobrecarga com dextrosol ou glicose - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302040,
			procedimento: "Glicose - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302059,
			procedimento: "Glicose-6-fosfato deidrogenase (G6FD) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302067,
			procedimento: "Haptoglobina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302075,
			procedimento: "Hemoglobina glicada (A1 total) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302083,
			procedimento: "Hemoglobina plasmática livre - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302091,
			procedimento: "Hexosaminidase A - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302105,
			procedimento: "Hidroxiprolina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302113,
			procedimento: "Homocisteína - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302121,
			procedimento: "Imipramina - desipramina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302130,
			procedimento: "Amilase ou alfa-amilase, isoenzimas - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302148,
			procedimento: "Isomerase fosfohexose - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302156,
			procedimento: "Isoniazida - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302164,
			procedimento: "Lactose, teste de tolerância"
		},
		{
			codigo: 40302172,
			procedimento: "Leucino aminopeptidase - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302180,
			procedimento: "Lidocaina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302199,
			procedimento: "Lipase - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302202,
			procedimento: "Lipase lipoprotéica - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302210,
			procedimento: "Lipoproteína (a) - Lp (a) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302229,
			procedimento: "Lítio - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302237,
			procedimento: "Magnésio - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302245,
			procedimento: "Mioglobina, pesquisa e/ou dosagem"
		},
		{
			codigo: 40302253,
			procedimento: "Nitrogênio amoniacal - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302261,
			procedimento: "Nitrogênio total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302270,
			procedimento: "Osmolalidade - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302288,
			procedimento: "Oxcarbazepina, pesquisa e/ou dosagem"
		},
		{
			codigo: 40302296,
			procedimento: "Piruvato quinase - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302300,
			procedimento: "Porfirinas quantitativas (cada) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302318,
			procedimento: "Potássio - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302326,
			procedimento: "Pré-albumina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302334,
			procedimento: "Primidona - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302342,
			procedimento: "Procainamida - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302350,
			procedimento: "Propanolol - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302369,
			procedimento: "Proteína ligadora do retinol - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302377,
			procedimento: "Proteínas totais - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302385,
			procedimento: "Proteínas totais albumina e globulina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302393,
			procedimento: "Quinidina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302407,
			procedimento: "Reserva alcalina (bicarbonato) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302415,
			procedimento: "Sacarose, teste de tolerância"
		},
		{
			codigo: 40302423,
			procedimento: "Sódio - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302431,
			procedimento: "Succinil acetona - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302440,
			procedimento: "Sulfonamidas livre e acetilada (% de acetilação) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302458,
			procedimento: "Tacrolimus - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302466,
			procedimento: "Tálio, pesquisa e/ou dosagem"
		},
		{
			codigo: 40302474,
			procedimento: "Teofilina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302482,
			procedimento: "Teste de tolerância a insulina ou hipoglicemiantes orais (até 6 dosagens)"
		},
		{
			codigo: 40302490,
			procedimento: "Tirosina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302504,
			procedimento: "Transaminase oxalacética (amino transferase aspartato) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302512,
			procedimento: "Transaminase pirúvica (amino transferase de alanina) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302520,
			procedimento: "Transferrina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302539,
			procedimento: "Triazolam - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302547,
			procedimento: "Triglicerídeos - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302555,
			procedimento: "Trimipramina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302563,
			procedimento: "Tripsina imuno reativa (IRT) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302571,
			procedimento: "Troponina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302580,
			procedimento: "Uréia - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302598,
			procedimento: "Urobilinogênio - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302601,
			procedimento: "Vitamina A, pesquisa e/ou dosagem"
		},
		{
			codigo: 40302610,
			procedimento: "Vitamina E - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302628,
			procedimento: "Xilose, teste de absorção à"
		},
		{
			codigo: 40302636,
			procedimento: "Lipídios totais - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302644,
			procedimento: "Maltose, teste de tolerância"
		},
		{
			codigo: 40302652,
			procedimento: "Mucopolissacaridose, pesquisa e/ou dosagem"
		},
		{
			codigo: 40302660,
			procedimento: "Mucoproteínas - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302679,
			procedimento: "Ocitocinase, pesquisa e/ou dosagem"
		},
		{
			codigo: 40302687,
			procedimento: "Procalcitonina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302695,
			procedimento: "Colesterol (VLDL) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302709,
			procedimento: "Teste oral de tolerância à glicose - 2 dosagens"
		},
		{
			codigo: 40302717,
			procedimento: "Eletroforese de proteínas de alta resolução"
		},
		{
			codigo: 40302725,
			procedimento: "Imunofixação - cada fração"
		},
		{
			codigo: 40302733,
			procedimento: "Hemoglobina glicada (Fração A1c) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302741,
			procedimento: "Lamotrigina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302750,
			procedimento: "Perfil lipídico / lipidograma (lípidios totais, colesterol, triglicerídios e eletroforese lipoproteínas) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302768,
			procedimento: "PAPP-A - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302776,
			procedimento: "Peptídeo natriurético BNP/PROBNP - pesquisa e/ou dosagem"
		},
		{
			codigo: 40302784,
			procedimento: "Vitamina B1, pesquisa e/ou dosagem"
		},
		{
			codigo: 40302792,
			procedimento: "Vitamina B2, pesquisa e/ou dosagem"
		},
		{
			codigo: 40302806,
			procedimento: "Vitamina B3, pesquisa e/ou dosagem"
		},
		{
			codigo: 40302814,
			procedimento: "Vitamina B6, pesquisa e/ou dosagem"
		},
		{
			codigo: 40302822,
			procedimento: "Vitamina D2, pesquisa e/ou dosagem"
		},
		{
			codigo: 40302830,
			procedimento: "Vitamina \"D\" 25 HIDROXI, pesquisa e/ou dosagem (Vitamina D3)"
		},
		{
			codigo: 40302849,
			procedimento: "Vitamina K,- pesquisa e/ou dosagem"
		},
		{
			codigo: 40302857,
			procedimento: "6-Monoacetilmorfina urinária"
		},
		{
			codigo: 40302865,
			procedimento: "7 Dihidrocolesterol, dosagem"
		},
		{
			codigo: 40302873,
			procedimento: "Ácido Gama-hidroxibutirico, dosagem soro"
		},
		{
			codigo: 40302881,
			procedimento: "Ácido Micofenólico, dosagem soro"
		},
		{
			codigo: 40302890,
			procedimento: "Ácidos graxos cadeia longa"
		},
		{
			codigo: 40302903,
			procedimento: "Ácidos graxos cadeia muito longa"
		},
		{
			codigo: 40302911,
			procedimento: "AP 50, dosagem"
		},
		{
			codigo: 40302920,
			procedimento: "Atividade de precalicreina"
		},
		{
			codigo: 40302938,
			procedimento: "Beta 2 transferrina"
		},
		{
			codigo: 40302946,
			procedimento: "Bilirrubina transcutânea [labo]"
		},
		{
			codigo: 40302954,
			procedimento: "Cartilagem oligomérica proteína (COMP)"
		},
		{
			codigo: 40302962,
			procedimento: "Cistatina C"
		},
		{
			codigo: 40302970,
			procedimento: "Clearance de água livre"
		},
		{
			codigo: 40302989,
			procedimento: "Clearance de amilase"
		},
		{
			codigo: 40302997,
			procedimento: "Colágeno ensaio de ligação"
		},
		{
			codigo: 40303012,
			procedimento: "Alfa -1-antitripsina, (fezes) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40303020,
			procedimento: "Anal Swab, pesquisa de oxiúrus"
		},
		{
			codigo: 40303039,
			procedimento: "Coprológico funcional (caracteres, pH, digestibilidade, amônia, ácidos orgânicos e interpretação)"
		},
		{
			codigo: 40303047,
			procedimento: "Eosinófilos, pesquisa nas fezes"
		},
		{
			codigo: 40303055,
			procedimento: "Gordura fecal, dosagem"
		},
		{
			codigo: 40303063,
			procedimento: "Hematoxilina férrica, pesquisa de protozoários nas fezes"
		},
		{
			codigo: 40303071,
			procedimento: "Identificação de helmintos,  exame de fragmentos - nas fezes"
		},
		{
			codigo: 40303080,
			procedimento: "Larvas (fezes), pesquisa"
		},
		{
			codigo: 40303098,
			procedimento: "Leucócitos e hemácias, pesquisa nas fezes"
		},
		{
			codigo: 40303101,
			procedimento: "Leveduras, pesquisa nas fezes"
		},
		{
			codigo: 40303110,
			procedimento: "Parasitológico - nas fezes"
		},
		{
			codigo: 40303128,
			procedimento: "Parasitológico, colheita múltipla com fornecimento do líquido conservante nas fezes"
		},
		{
			codigo: 40303136,
			procedimento: "Sangue oculto, pesquisa nas fezes"
		},
		{
			codigo: 40303144,
			procedimento: "Shistossoma, pesquisa ovos em fragmentos mucosa após biópsia retal"
		},
		{
			codigo: 40303152,
			procedimento: "Substâncias redutoras nas fezes - pesquisa"
		},
		{
			codigo: 40303160,
			procedimento: "Tripsina, prova de (digestão da gelatina)"
		},
		{
			codigo: 40303179,
			procedimento: "Esteatócrito, triagem para gordura fecal"
		},
		{
			codigo: 40303187,
			procedimento: "Estercobilinogênio fecal, dosagem"
		},
		{
			codigo: 40303195,
			procedimento: "Gordura fecal, pesquisa de"
		},
		{
			codigo: 40303209,
			procedimento: "Helicobacter pylori nas fezes"
		},
		{
			codigo: 40303217,
			procedimento: "Lactoferrina fecal"
		},
		{
			codigo: 40303225,
			procedimento: "Nitrôgenio fecal, dosagem"
		},
		{
			codigo: 40303233,
			procedimento: "Pesquisa de VRE"
		},
		{
			codigo: 40303241,
			procedimento: "Toxina botuliníca, pesquisa (fezes)"
		},
		{
			codigo: 40303250,
			procedimento: "Sangue oculto nas fezes, pesquisa imunológica"
		},
		{
			codigo: 40303268,
			procedimento: "Oograma nas fezes"
		},
		{
			codigo: 40303276,
			procedimento: "Resíduos alimentares, identificação, fezes"
		},
		{
			codigo: 40303284,
			procedimento: "Elastase pancreática fecal"
		},
		{
			codigo: 40303292,
			procedimento: "Fibrinopeptídeo A, antígeno"
		},
		{
			codigo: 40303306,
			procedimento: "Hemoglobina A2, cromatografia"
		},
		{
			codigo: 40303314,
			procedimento: "Hemoglobina cromatografia"
		},
		{
			codigo: 40303322,
			procedimento: "TAT - complexo Trombina/Antitrombiona"
		},
		{
			codigo: 40304019,
			procedimento: "Anticoagulante lúpico, pesquisa"
		},
		{
			codigo: 40304027,
			procedimento: "Anticorpo anti A e B, pesquisa e/ou dosagem"
		},
		{
			codigo: 40304035,
			procedimento: "Anticorpos antiplaquetários, citometria de fluxo"
		},
		{
			codigo: 40304043,
			procedimento: "Anticorpos irregulares - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304051,
			procedimento: "Anticorpos irregulares, pesquisa (meio salino a temperatura ambiente e 37º e teste indireto de coombs)"
		},
		{
			codigo: 40304060,
			procedimento: "Antitrombina III, dosagem"
		},
		{
			codigo: 40304078,
			procedimento: "Ativador tissular de plasminogênio (TPA) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304086,
			procedimento: "CD... (antígeno de dif. Celular, cada determinação) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304094,
			procedimento: "Citoquímica para classificar leucemia: esterase, fosfatase leucocitária, PAS, peroxidase ou SB,  etc - cada"
		},
		{
			codigo: 40304108,
			procedimento: "Coombs direto"
		},
		{
			codigo: 40304116,
			procedimento: "Enzimas  eritrocitárias,  (adenilatoquinase,  desidrogenase láctica,  fosfofructoquinase,  fosfoglicerato quinase, gliceraldeído, 3  - fosfato   desidrogenase, glicose  fosfato isomerase,  glicose 6 - fosfato desidrogenase, glutation peroxidase, glutation"
		},
		{
			codigo: 40304132,
			procedimento: "Falcização, teste de"
		},
		{
			codigo: 40304140,
			procedimento: "Fator 4 plaquetário, dosagens"
		},
		{
			codigo: 40304159,
			procedimento: "Fator II, dosagem"
		},
		{
			codigo: 40304167,
			procedimento: "Fator IX, dosagem"
		},
		{
			codigo: 40304175,
			procedimento: "Fator V, dosagem"
		},
		{
			codigo: 40304183,
			procedimento: "Fator VIII, dosagem"
		},
		{
			codigo: 40304191,
			procedimento: "Fator VIII, dosagem do antígeno (Von Willebrand)"
		},
		{
			codigo: 40304205,
			procedimento: "Fator VIII, dosagem do inibidor"
		},
		{
			codigo: 40304213,
			procedimento: "Fator X, dosagem"
		},
		{
			codigo: 40304221,
			procedimento: "Fator XI, dosagem"
		},
		{
			codigo: 40304230,
			procedimento: "Fator XII, dosagem"
		},
		{
			codigo: 40304248,
			procedimento: "Fator XIII, pesquisa"
		},
		{
			codigo: 40304256,
			procedimento: "Fenotipagem do sistema Rh-Hr (anti Rho(D) + anti Rh(C) + anti Rh(E)"
		},
		{
			codigo: 40304264,
			procedimento: "Fibrinogênio, teste funcional, dosagem"
		},
		{
			codigo: 40304272,
			procedimento: "Filária, pesquisa"
		},
		{
			codigo: 40304280,
			procedimento: "Grupo ABO, classificação reversa - determinação"
		},
		{
			codigo: 40304299,
			procedimento: "Grupo sanguíneo ABO, e fator Rho (inclui Du) - determinação"
		},
		{
			codigo: 40304302,
			procedimento: "Ham, teste de (hemólise ácida)"
		},
		{
			codigo: 40304310,
			procedimento: "Heinz, corpúsculos, pesquisa"
		},
		{
			codigo: 40304329,
			procedimento: "Hemácias fetais, pesquisa"
		},
		{
			codigo: 40304337,
			procedimento: "Hematócrito, determinação do"
		},
		{
			codigo: 40304345,
			procedimento: "Hemoglobina, dosagem"
		},
		{
			codigo: 40304353,
			procedimento: "Hemoglobina (eletroforese) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304361,
			procedimento: "Hemograma com contagem de plaquetas ou frações (eritrograma, leucograma, plaquetas)"
		},
		{
			codigo: 40304370,
			procedimento: "Hemossedimentação, (VHS) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304388,
			procedimento: "Hemossiderina (siderócitos), sangue ou urina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304396,
			procedimento: "Heparina, dosagem"
		},
		{
			codigo: 40304400,
			procedimento: "Inibidor do TPA (PAI) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304418,
			procedimento: "Leucócitos, contagem"
		},
		{
			codigo: 40304434,
			procedimento: "Meta-hemoglobina, determinação da"
		},
		{
			codigo: 40304450,
			procedimento: "Plaquetas, teste de agregação (por agente agregante), cada"
		},
		{
			codigo: 40304469,
			procedimento: "Plasminogênio, dosagem"
		},
		{
			codigo: 40304477,
			procedimento: "Plasmódio, pesquisa"
		},
		{
			codigo: 40304485,
			procedimento: "Medula óssea, aspiração para mielograma ou microbiológico"
		},
		{
			codigo: 40304493,
			procedimento: "Produtos de degradação da fibrina, qualitativo - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304507,
			procedimento: "Proteína C - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304515,
			procedimento: "Proteína S, teste funcional"
		},
		{
			codigo: 40304523,
			procedimento: "Protoporfirina eritrocitária livre - zinco - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304531,
			procedimento: "Prova do laço"
		},
		{
			codigo: 40304540,
			procedimento: "Resistência globular, curva de"
		},
		{
			codigo: 40304558,
			procedimento: "Reticulócitos, contagem"
		},
		{
			codigo: 40304566,
			procedimento: "Retração do coágulo - pesquisa"
		},
		{
			codigo: 40304574,
			procedimento: "Ristocetina, co-fator, teste funcional, dosagem"
		},
		{
			codigo: 40304582,
			procedimento: "Tempo de coagulação - determinação"
		},
		{
			codigo: 40304590,
			procedimento: "Tempo de protrombina - determinação"
		},
		{
			codigo: 40304604,
			procedimento: "Tempo de reptilase - determinação"
		},
		{
			codigo: 40304612,
			procedimento: "Tempo de sangramento de IVY - deteminação"
		},
		{
			codigo: 40304620,
			procedimento: "Tempo de trombina - determinação"
		},
		{
			codigo: 40304639,
			procedimento: "Tempo de tromboplastina parcial ativada - determinação"
		},
		{
			codigo: 40304647,
			procedimento: "Tripanossoma, pesquisa"
		},
		{
			codigo: 40304655,
			procedimento: "Tromboelastograma  - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304663,
			procedimento: "Alfa-2antiplasmina, teste funcional"
		},
		{
			codigo: 40304671,
			procedimento: "Anticorpo antimieloperoxidase, MPO - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304680,
			procedimento: "Fator VII - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304698,
			procedimento: "Fator XIII, dosagem, teste funcional"
		},
		{
			codigo: 40304701,
			procedimento: "Imunofenotipagem para doença residual mínima (*)"
		},
		{
			codigo: 40304710,
			procedimento: "Imunofenotipagem para hemoglobinúria paroxistica noturna (*)"
		},
		{
			codigo: 40304728,
			procedimento: "Imunofenotipagem para leucemias agudas ou sindrome mielodisplásica (*)"
		},
		{
			codigo: 40304736,
			procedimento: "Imunofenotipagem para linfoma não hodgkin / sindrome linfoproliferativa crônica (*)"
		},
		{
			codigo: 40304744,
			procedimento: "Imunofenotipagem para perfil imune (*)"
		},
		{
			codigo: 40304752,
			procedimento: "Fator IX, dosagem do inibidor"
		},
		{
			codigo: 40304760,
			procedimento: "Inibidor dos fatores da hemostasia, triagem"
		},
		{
			codigo: 40304779,
			procedimento: "Produtos de degradação da fibrina, quantitativo - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304787,
			procedimento: "Proteína S livre, dosagem"
		},
		{
			codigo: 40304795,
			procedimento: "Células LE - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304809,
			procedimento: "Consumo de protrombina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304817,
			procedimento: "Enzimas eritrocitárias, rastreio para deficiência"
		},
		{
			codigo: 40304825,
			procedimento: "Esplenograma (citologia)"
		},
		{
			codigo: 40304833,
			procedimento: "Hemoglobina instabilidade a 37 graus C - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304841,
			procedimento: "Hemoglobina, solubilidade (HbS e HbD) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304850,
			procedimento: "Hemoglobinopatia - triagem (El.HB., hemoglob. fetal. reticulócitos, corpos de H, T. falcização hemácias, resist. osmótica, termo estabilidade)"
		},
		{
			codigo: 40304868,
			procedimento: "Estreptozima - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304876,
			procedimento: "Sulfo-hemoglobina, determinação da"
		},
		{
			codigo: 40304884,
			procedimento: "Coombs indireto"
		},
		{
			codigo: 40304892,
			procedimento: "Mielograma"
		},
		{
			codigo: 40304906,
			procedimento: "Dímero D - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304914,
			procedimento: "Tempo de sangramento (Duke) - determinação"
		},
		{
			codigo: 40304922,
			procedimento: "Coagulograma (TS, TC, prova do laço, retração do coágulo, contagem de plaquetas, tempo de protombina, tempo de tromboplastina, parcial ativado) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40304930,
			procedimento: "Baço, exame de esfregaço de aspirado"
		},
		{
			codigo: 40304949,
			procedimento: "Linfonodo, exame de esfregaço de aspirado"
		},
		{
			codigo: 40304957,
			procedimento: "Adenograma (inclui hemograma)"
		},
		{
			codigo: 40304965,
			procedimento: "Alfa 1 anti tripsina, fenotipagem"
		},
		{
			codigo: 40304973,
			procedimento: "Alfa talassemia anal molecular sangue"
		},
		{
			codigo: 40304981,
			procedimento: "Analisador da função plaquetaria PFA-100"
		},
		{
			codigo: 40305015,
			procedimento: "1,25-dihidroxi vitamina D - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305040,
			procedimento: "17-cetogênicos (17-CGS) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305058,
			procedimento: "17-cetogênicos cromatografia - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305066,
			procedimento: "17-cetosteróides (17-CTS) - cromatografia - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305074,
			procedimento: "17-cetosteróides relação alfa/beta - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305082,
			procedimento: "17-cetosteróides totais (17-CTS) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305090,
			procedimento: "17-hidroxipregnenolona - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305112,
			procedimento: "Ácido 5 hidróxi indol acético, dosagem na urina"
		},
		{
			codigo: 40305120,
			procedimento: "Ácido homo vanílico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305163,
			procedimento: "AMP cíclico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305210,
			procedimento: "Cortisol livre - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305228,
			procedimento: "Curva glicêmica (6 dosagens) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305236,
			procedimento: "Curva insulínica  (6 dosagens) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305279,
			procedimento: "Dosagem de receptor de progesterona ou de estrogênio"
		},
		{
			codigo: 40305287,
			procedimento: "Enzima conversora da angiotensina (ECA) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305295,
			procedimento: "Eritropoietina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305341,
			procedimento: "Gad-Ab-antidescarboxilase do ácido - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305368,
			procedimento: "Glucagon, dosagem"
		},
		{
			codigo: 40305384,
			procedimento: "Hormônio antidiurético (vasopressina) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305406,
			procedimento: "IGF BP3 (proteína ligadora dos fatores de crescimento \"insulin-like\") - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305422,
			procedimento: "Leptina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305449,
			procedimento: "N-telopeptídeo - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305465,
			procedimento: "Paratormônio - PTH ou fração (cada) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305490,
			procedimento: "Piridinolina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305503,
			procedimento: "Pregnandiol - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305511,
			procedimento: "Pregnantriol - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305546,
			procedimento: "Prova do LH-Rh, dosagem do FSH sem fornecimento de medicamento (cada)"
		},
		{
			codigo: 40305554,
			procedimento: "Prova do LH-Rh, dosagem do LH sem fornecimento de medicamento (cada)"
		},
		{
			codigo: 40305562,
			procedimento: "Prova do TRH-HPR, dosagem do HPR sem fornecimento do material (cada)"
		},
		{
			codigo: 40305570,
			procedimento: "Prova do TRH-TSH, dosagem do TSH sem fornecimento do material (cada)"
		},
		{
			codigo: 40305589,
			procedimento: "Prova para diabete insípido (restrição hídrica  NaCL 3% vasopressina)"
		},
		{
			codigo: 40305597,
			procedimento: "Estrogênios totais (fenolesteróides) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305600,
			procedimento: "Iodo protéico (PBI) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305619,
			procedimento: "Lactogênico placentário hormônio - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305627,
			procedimento: "Provas de função tireoideana (T3, T4, índices e TSH)"
		},
		{
			codigo: 40305635,
			procedimento: "Somatotrófico coriônico (HCS ou PHL) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305740,
			procedimento: "11-desoxicorticosterona - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305759,
			procedimento: "Hormônio gonodotrofico corionico qualitativo (HCG-Beta-HCG) - pesquisa"
		},
		{
			codigo: 40305767,
			procedimento: "Hormônio gonodotrofico corionico quantitativo (HCG-Beta-HCG) - dosagem"
		},
		{
			codigo: 40305775,
			procedimento: "Macroprolactina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40305783,
			procedimento: "17-hidroxicorticosteróides (17-OHS) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306011,
			procedimento: "Adenovírus, IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306020,
			procedimento: "Adenovírus, IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306046,
			procedimento: "Anticandida - IgG e IgM (cada) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306054,
			procedimento: "Anti-actina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306062,
			procedimento: "Anti-DNA - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306070,
			procedimento: "Anti-JO1 - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306089,
			procedimento: "Anti-LA/SSB - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306097,
			procedimento: "Anti-LKM-1 - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306100,
			procedimento: "Anti-RNP - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306119,
			procedimento: "Anti-Ro/SSA - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306127,
			procedimento: "Anti-Sm - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306135,
			procedimento: "Anticardiolipina - IgA - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306143,
			procedimento: "Anticardiolipina - IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306151,
			procedimento: "Anticardiolipina - IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306160,
			procedimento: "Anticentrômero - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306178,
			procedimento: "Anticorpo anti-DNAse B - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306186,
			procedimento: "Anticorpo anti-hormônio do crescimento - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306194,
			procedimento: "Anticorpo antivírus da hepatite E (total) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306208,
			procedimento: "Anticorpos anti-ilhota de langherans - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306216,
			procedimento: "Anticorpos anti-influenza A,  IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306224,
			procedimento: "Anticorpos anti-influenza A,  IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306232,
			procedimento: "Anticorpos anti-influenza B, IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306240,
			procedimento: "Anticorpos anti-influenza B, IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306259,
			procedimento: "Anticorpos antiendomisio - IgG, IgM, IgA (cada) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306267,
			procedimento: "Anticorpos naturais - isoaglutininas, pesquisas"
		},
		{
			codigo: 40306275,
			procedimento: "Anticorpos naturais - isoaglutininas, titulagem"
		},
		{
			codigo: 40306283,
			procedimento: "Anticortex supra-renal - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306291,
			procedimento: "Antiescleroderma (SCL 70) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306305,
			procedimento: "Antigliadina (glúten) - IgA - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306313,
			procedimento: "Antigliadina (glúten) - IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306321,
			procedimento: "Antigliadina (glúten) - IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306330,
			procedimento: "Antimembrana basal - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306348,
			procedimento: "Antimicrossomal - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306356,
			procedimento: "Antimitocondria - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306364,
			procedimento: "Antimitocondria, M2 - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306372,
			procedimento: "Antimúsculo cardíaco - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306380,
			procedimento: "Antimúsculo estriado - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306399,
			procedimento: "Antimúsculo liso - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306402,
			procedimento: "Antineutrófilos (anca)  C - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306410,
			procedimento: "Antineutrófilos (anca)  P - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306429,
			procedimento: "Antiparietal - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306437,
			procedimento: "Antiperoxidase tireoideana - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306445,
			procedimento: "Aslo - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306453,
			procedimento: "Aspergilus, reação sorológica"
		},
		{
			codigo: 40306461,
			procedimento: "Avidez de IgG para toxoplasmose, citomegalia, rubéloa, EB e outros, cada - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306470,
			procedimento: "Beta-2-microglobulina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306488,
			procedimento: "Biotinidase atividade da, qualitativo - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306496,
			procedimento: "Blastomicose, reação sorológica"
		},
		{
			codigo: 40306500,
			procedimento: "Brucela - IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306518,
			procedimento: "Brucela - IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306526,
			procedimento: "Brucela, prova rápida"
		},
		{
			codigo: 40306534,
			procedimento: "C1q - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306542,
			procedimento: "C3 proativador - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306550,
			procedimento: "C3A (fator B) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306569,
			procedimento: "CA 50 - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306577,
			procedimento: "CA-242 - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306585,
			procedimento: "CA-27-29 - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306593,
			procedimento: "Caxumba, IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306607,
			procedimento: "Caxumba, IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306615,
			procedimento: "Chagas IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306623,
			procedimento: "Chagas IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306631,
			procedimento: "Chlamydia - IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306640,
			procedimento: "Chlamydia - IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306658,
			procedimento: "Cisticercose, AC - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306666,
			procedimento: "Citomegalovírus IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306674,
			procedimento: "Citomegalovírus IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306682,
			procedimento: "Clostridium difficile, toxina A - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306690,
			procedimento: "Complemento C2 - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306704,
			procedimento: "Complemento C3 - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306712,
			procedimento: "Complemento C4 - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306720,
			procedimento: "Complemento C5 - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306739,
			procedimento: "Complemento CH-100 - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306747,
			procedimento: "Complemento CH-50 - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306755,
			procedimento: "Crio-aglutinina, globulina, dosagem, cada"
		},
		{
			codigo: 40306763,
			procedimento: "Crio-aglutinina, globulina, pesquisa, cada"
		},
		{
			codigo: 40306771,
			procedimento: "Cross match (prova cruzada de histocompatibilidade para transplante renal)"
		},
		{
			codigo: 40306780,
			procedimento: "Cultura ou estimulação dos linfócitos \"in vitro\" por concanavalina, PHA ou pokweed"
		},
		{
			codigo: 40306798,
			procedimento: "Dengue - IgG e IgM (cada) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306801,
			procedimento: "Echovírus (painel) sorologia para"
		},
		{
			codigo: 40306810,
			procedimento: "Equinococose (Hidatidose), reação sorológica"
		},
		{
			codigo: 40306828,
			procedimento: "Equinococose, IDR - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306836,
			procedimento: "Esporotricose, reação sorológica"
		},
		{
			codigo: 40306844,
			procedimento: "Esporotriquina, IDR - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306852,
			procedimento: "Fator antinúcleo, (FAN) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306860,
			procedimento: "Fator reumatóide, quantitativo - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306879,
			procedimento: "Filaria sorologia - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306887,
			procedimento: "Genotipagem do sistema HLA"
		},
		{
			codigo: 40306895,
			procedimento: "Giardia, reação sorológica"
		},
		{
			codigo: 40306909,
			procedimento: "Helicobacter pylori - IgA - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306917,
			procedimento: "Helicobacter pylori - IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306925,
			procedimento: "Helicobacter pylori - IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306933,
			procedimento: "Hepatite A - HAV - IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306941,
			procedimento: "Hepatite A - HAV - IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306950,
			procedimento: "Hepatite B - HBCAC - IgG (anti-core IgG ou Acoreg) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306968,
			procedimento: "Hepatite B - HBCAC - IgM (anti-core IgM ou Acorem) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306976,
			procedimento: "Hepatite B - HBeAC (anti HBE) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306984,
			procedimento: "Hepatite B - HBeAG (antígeno \"E\") - pesquisa e/ou dosagem"
		},
		{
			codigo: 40306992,
			procedimento: "Hepatite B - HBSAC (anti-antígeno de superfície) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307018,
			procedimento: "Hepatite B - HBSAG (AU, antígeno austrália) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307026,
			procedimento: "Hepatite C - anti-HCV - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307034,
			procedimento: "Hepatite C - anti-HCV - IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307042,
			procedimento: "Hepatite C - imunoblot - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307050,
			procedimento: "Hepatite delta, anticorpo IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307069,
			procedimento: "Hepatite delta, anticorpo IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307077,
			procedimento: "Hepatite delta, antígeno - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307085,
			procedimento: "Herpes simples - IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307093,
			procedimento: "Herpes simples - IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307107,
			procedimento: "Herpes zoster - IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307115,
			procedimento: "Herpes zoster - IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307123,
			procedimento: "Hipersensibilidade retardada (intradermo reação IDeR ) candidina, caxumba, estreptoquinase-dornase, PPD, tricofitina, vírus vacinal, outro(s), cada"
		},
		{
			codigo: 40307131,
			procedimento: "Histamina, dosagem"
		},
		{
			codigo: 40307140,
			procedimento: "Histona - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307158,
			procedimento: "Histoplasmose, reação sorológica"
		},
		{
			codigo: 40307166,
			procedimento: "HIV - antígeno P24 - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307174,
			procedimento: "HIV1 ou HIV2, pesquisa de anticorpos"
		},
		{
			codigo: 40307182,
			procedimento: "HIV1+ HIV2, (determinação conjunta), pesquisa de anticorpos"
		},
		{
			codigo: 40307190,
			procedimento: "HLA-DR - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307204,
			procedimento: "HLA-DR+DQ - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307212,
			procedimento: "HTLV1 ou HTLV2 pesquisa de anticorpo (cada)"
		},
		{
			codigo: 40307220,
			procedimento: "IgA - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307239,
			procedimento: "IgA na saliva - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307247,
			procedimento: "IgD - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307255,
			procedimento: "IgE, grupo específico, cada - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307263,
			procedimento: "IgE, por alérgeno (cada) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307271,
			procedimento: "IgE, total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307280,
			procedimento: "IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307298,
			procedimento: "IgG, subclasses 1,2,3,4 (cada) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307301,
			procedimento: "IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307310,
			procedimento: "Imunocomplexos circulantes - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307328,
			procedimento: "Imunocomplexos circulantes, com células Raji - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307336,
			procedimento: "Imunoeletroforese (estudo da gamopatia) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307344,
			procedimento: "Inibidor de C1 esterase - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307352,
			procedimento: "Isospora, pesquisa de antígeno - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307360,
			procedimento: "Ito (cancro mole), IDeR - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307379,
			procedimento: "Kveim (sarcoidose), IDeR - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307387,
			procedimento: "Legionella - IgG e IgM (cada) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307395,
			procedimento: "Leishmaniose - IgG e IgM (cada) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307409,
			procedimento: "Leptospirose - IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307417,
			procedimento: "Leptospirose - IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307425,
			procedimento: "Leptospirose, aglutinação - pesquisa"
		},
		{
			codigo: 40307433,
			procedimento: "Linfócitos T \"helper\" contagem de (IF com OKT-4) (CD-4+) citometria de fluxo"
		},
		{
			codigo: 40307441,
			procedimento: "Linfócitos T supressores contagem de (IF com OKT-8) (D-8) citometria de fluxo"
		},
		{
			codigo: 40307450,
			procedimento: "Listeriose, reação sorológica"
		},
		{
			codigo: 40307468,
			procedimento: "Lyme - IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307476,
			procedimento: "Lyme - IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307484,
			procedimento: "Malária - IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307492,
			procedimento: "Malária - IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307506,
			procedimento: "Mantoux, IDeR"
		},
		{
			codigo: 40307514,
			procedimento: "MCA (antígeno cárcino-mamário) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307522,
			procedimento: "Micoplasma pneumoniae - IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307530,
			procedimento: "Micoplasma pneumoniae - IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307565,
			procedimento: "Mononucleose - Epstein BARR - IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307573,
			procedimento: "Mononucleose, anti-VCA (EBV) IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307581,
			procedimento: "Mononucleose, anti-VCA (EBV) IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307590,
			procedimento: "Montenegro, IDeR"
		},
		{
			codigo: 40307603,
			procedimento: "Outros testes bioquímicos para determinação do risco fetal (cada)"
		},
		{
			codigo: 40307611,
			procedimento: "Parvovírus - IgG, IgM (cada) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307620,
			procedimento: "Peptídio intestinal vasoativo, dosagem"
		},
		{
			codigo: 40307638,
			procedimento: "PPD (tuberculina), IDeR"
		},
		{
			codigo: 40307654,
			procedimento: "Proteína C, teste imunológico"
		},
		{
			codigo: 40307662,
			procedimento: "Proteína eosinofílica catiônica (ECP) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307689,
			procedimento: "Reação sorológica para coxsackie, neutralização IgG"
		},
		{
			codigo: 40307697,
			procedimento: "Rubéola - IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307700,
			procedimento: "Rubéola - IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307719,
			procedimento: "Schistosomose - IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307727,
			procedimento: "Schistosomose - IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307735,
			procedimento: "Sífilis - FTA-ABS-IgG - pesquisa"
		},
		{
			codigo: 40307743,
			procedimento: "Sífilis - FTA-ABS-IgM - pesquisa"
		},
		{
			codigo: 40307751,
			procedimento: "Sífilis - TPHA - pesquisa"
		},
		{
			codigo: 40307760,
			procedimento: "Sífilis - VDRL"
		},
		{
			codigo: 40307778,
			procedimento: "Teste de inibição da migração dos linfócitos (para cada antígeno)"
		},
		{
			codigo: 40307786,
			procedimento: "Teste respiratório para H. Pylori"
		},
		{
			codigo: 40307794,
			procedimento: "Toxocara cannis - IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307808,
			procedimento: "Toxocara cannis - IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307816,
			procedimento: "Toxoplasmina, IDeR"
		},
		{
			codigo: 40307824,
			procedimento: "Toxoplasmose IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307832,
			procedimento: "Toxoplasmose IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307840,
			procedimento: "Urease, teste rápido para helicobacter pylori"
		},
		{
			codigo: 40307859,
			procedimento: "Vírus sincicial respiratório - Elisa - IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307867,
			procedimento: "Waaler-Rose (fator reumatóide) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307875,
			procedimento: "Western Blot (anticorpos anti-HIV) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307883,
			procedimento: "Western Blot (anticorpos anti-HTVI ou HTLVII) (cada) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307891,
			procedimento: "Widal, reação de"
		},
		{
			codigo: 40307905,
			procedimento: "Alérgenos - perfil antigênico (painel C/36 antígenos) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307913,
			procedimento: "Anti-DMP - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307921,
			procedimento: "Anti-hialuronidase, determinação da"
		},
		{
			codigo: 40307930,
			procedimento: "Antidesoxiribonuclease B, neutralização quantitativa - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307948,
			procedimento: "Antifígado (glomérulo, tub. Renal corte rim de rato), IFI - pesquisa e/ou dosagem"
		},
		{
			codigo: 40307956,
			procedimento: "Antígenos metílicos solúveis do BCG (1 aplicação)"
		},
		{
			codigo: 40307964,
			procedimento: "Chagas, hemoaglutinação"
		},
		{
			codigo: 40307972,
			procedimento: "Chagas (Machado Guerreiro)"
		},
		{
			codigo: 40307999,
			procedimento: "Complemento C3, C4 - turbid. ou nefolométrico C3A - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308014,
			procedimento: "Crioglobulinas, caracterização - imunoeletroforese"
		},
		{
			codigo: 40308022,
			procedimento: "DNCB - teste de contato"
		},
		{
			codigo: 40308030,
			procedimento: "Fator reumatóide, teste do látex (qualitativo) - pesquisa"
		},
		{
			codigo: 40308049,
			procedimento: "Frei (linfogranuloma venéreo), IDeR - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308065,
			procedimento: "Gonococo - hemaglutinação (HA)"
		},
		{
			codigo: 40308081,
			procedimento: "Hidatidose (equinococose) IDi dupla - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308090,
			procedimento: "NBT estimulado"
		},
		{
			codigo: 40308120,
			procedimento: "Sarampo - anticorpos IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308138,
			procedimento: "Sarampo - anticorpos IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308154,
			procedimento: "Toxoplasmose - IgA - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308162,
			procedimento: "Varicela, IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308170,
			procedimento: "Varicela, IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308197,
			procedimento: "Vírus sincicial respiratório - pesquisa direta"
		},
		{
			codigo: 40308200,
			procedimento: "Weil Felix (Ricketsiose), reação de aglutinação"
		},
		{
			codigo: 40308219,
			procedimento: "Anticorpo anti Saccharamyces - ASCA - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308235,
			procedimento: "HER2 dosagem do receptor"
		},
		{
			codigo: 40308243,
			procedimento: "Poliomelite sorologia"
		},
		{
			codigo: 40308251,
			procedimento: "Proteína Amiloide A - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308278,
			procedimento: "Schistosomose, pesquisa"
		},
		{
			codigo: 40308286,
			procedimento: "Sífilis anticorpo total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308294,
			procedimento: "Sífilis IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308308,
			procedimento: "Amebíase, IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308316,
			procedimento: "Amebíase, IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308324,
			procedimento: "Gonococo - IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308332,
			procedimento: "Gonococo - IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308340,
			procedimento: "Mononucleose, sorologia para (Monoteste ou Paul-Bunnel), cada"
		},
		{
			codigo: 40308359,
			procedimento: "Psitacose - IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308367,
			procedimento: "Psitacose - IgM - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308375,
			procedimento: "Psitacose - IgA - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308383,
			procedimento: "Proteína C reativa, qualitativa - pesquisa"
		},
		{
			codigo: 40308391,
			procedimento: "Proteína C reativa, quantitativa - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308405,
			procedimento: "Aslo, quantitativo - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308413,
			procedimento: "Paracoccidioidomicose, anticorpos totais / IgG - pesquisa e/ou dosagem"
		},
		{
			codigo: 40308421,
			procedimento: "Ameba, pesquisa"
		},
		{
			codigo: 40308430,
			procedimento: "Ameba, pesquisa antígeno nas fezes, Elisa"
		},
		{
			codigo: 40308448,
			procedimento: "Anti 68 KD (Cóclea)"
		},
		{
			codigo: 40308456,
			procedimento: "Anti citosol hepático"
		},
		{
			codigo: 40308464,
			procedimento: "Anti cromatina - IgG"
		},
		{
			codigo: 40308472,
			procedimento: "Anti GM1 - IgG/IgM"
		},
		{
			codigo: 40308480,
			procedimento: "Anti HU (Western Blot)"
		},
		{
			codigo: 40308499,
			procedimento: "Anti KU"
		},
		{
			codigo: 40308502,
			procedimento: "Anti parainfluenza tipo 1,2,3"
		},
		{
			codigo: 40308510,
			procedimento: "Anti PCNA"
		},
		{
			codigo: 40308529,
			procedimento: "Anticorpos antipneumococos"
		},
		{
			codigo: 40308537,
			procedimento: "Anti RI (Western Blot)"
		},
		{
			codigo: 40308545,
			procedimento: "Anti ribossomal P"
		},
		{
			codigo: 40308553,
			procedimento: "Anti transglutaminase tecidual - IgA"
		},
		{
			codigo: 40308561,
			procedimento: "Anti transglutaminase tecidual - IgG"
		},
		{
			codigo: 40308570,
			procedimento: "Anti YO"
		},
		{
			codigo: 40308588,
			procedimento: "Anti YO líquor"
		},
		{
			codigo: 40308596,
			procedimento: "Anticorpos anti 21 hidroxilase"
		},
		{
			codigo: 40308600,
			procedimento: "Anticorpos anti adrenal"
		},
		{
			codigo: 40308618,
			procedimento: "Anticorpos anti anexina"
		},
		{
			codigo: 40308626,
			procedimento: "Anticorpos anti antígeno hepático solúvel"
		},
		{
			codigo: 40308634,
			procedimento: "Anticorpos anti coccidióides, soro"
		},
		{
			codigo: 40308642,
			procedimento: "Anticorpos anti colágeno tipo 2"
		},
		{
			codigo: 40308650,
			procedimento: "Anticorpos anti fator intrinseco"
		},
		{
			codigo: 40308669,
			procedimento: "Anticorpos anti febre, qualquer soro"
		},
		{
			codigo: 40308677,
			procedimento: "Anticorpos anti Fibrilarina"
		},
		{
			codigo: 40308685,
			procedimento: "Anticorpos anti fosfatidilserina - IgA/IgG/IgM"
		},
		{
			codigo: 40308693,
			procedimento: "Anticorpos anti granulócitos"
		},
		{
			codigo: 40308707,
			procedimento: "Anticorpos anti Hantavirus"
		},
		{
			codigo: 40308715,
			procedimento: "Anticorpos anti líquor arbovirus, painel"
		},
		{
			codigo: 40308723,
			procedimento: "Anticorpos anti líquor bartonella"
		},
		{
			codigo: 40308731,
			procedimento: "Anticorpos anti líquor gangliosídeo, painel"
		},
		{
			codigo: 40308740,
			procedimento: "Anticorpos anti líquor GM1"
		},
		{
			codigo: 40308758,
			procedimento: "Anticorpos anti MAG"
		},
		{
			codigo: 40308766,
			procedimento: "Anticorpos anti MI-2 auto"
		},
		{
			codigo: 40308774,
			procedimento: "Anticorpos anti Mielina"
		},
		{
			codigo: 40308782,
			procedimento: "Anticorpos anti neuronal nuclear 1 e 2 LCR"
		},
		{
			codigo: 40308790,
			procedimento: "Anticorpos anti pele"
		},
		{
			codigo: 40308804,
			procedimento: "Anticorpos anti peptídeo cíclico citrulinado - IgG"
		},
		{
			codigo: 40308812,
			procedimento: "Anticorpos anti PM1"
		},
		{
			codigo: 40308820,
			procedimento: "Anticorpos anti reticulina"
		},
		{
			codigo: 40308839,
			procedimento: "Anticorpos anti strongilóides"
		},
		{
			codigo: 40308847,
			procedimento: "Anticorpos anti sulfatídeo"
		},
		{
			codigo: 40308855,
			procedimento: "Anticorpos anti vírus herpes  6 líquor - IgG/IgM"
		},
		{
			codigo: 40308863,
			procedimento: "Anticorpos anti vírus herpes 6"
		},
		{
			codigo: 40308871,
			procedimento: "Anticorpos anti vírus rábico"
		},
		{
			codigo: 40308880,
			procedimento: "Anticorpos arbovírus, painel"
		},
		{
			codigo: 40308898,
			procedimento: "Anticorpos Beta 2 glicoproteina I  - IgG/IgM/IgA"
		},
		{
			codigo: 40308901,
			procedimento: "Acetilcolina, anticorpos bloqueador receptor"
		},
		{
			codigo: 40308910,
			procedimento: "Anticorpos contra canal de cálcio regulado por voltagem"
		},
		{
			codigo: 40308928,
			procedimento: "Anticorpos Coxsackie A, outros materiais"
		},
		{
			codigo: 40308936,
			procedimento: "Anticorpos CV2 auto, soro"
		},
		{
			codigo: 40308944,
			procedimento: "Anticorpos Desmogleina tipo 1 e 3"
		},
		{
			codigo: 40308952,
			procedimento: "Anticorpos Fosfatidilcolina - IgG/IgM/IgA"
		},
		{
			codigo: 40308960,
			procedimento: "Anticorpos Gangliosídeos, soro"
		},
		{
			codigo: 40308979,
			procedimento: "Anticorpos Gd1A - IgG"
		},
		{
			codigo: 40308987,
			procedimento: "Anticorpos Gd1A - IgM"
		},
		{
			codigo: 40308995,
			procedimento: "Anticorpos Gd1B - IgG"
		},
		{
			codigo: 40309010,
			procedimento: "Adenosina de aminase (ADA) - pesquisa e/ou dosagem em líquidos orgânicos"
		},
		{
			codigo: 40309029,
			procedimento: "Bioquímica ICR (proteínas + pandy + glicose + cloro) - pesquisa e/ou dosagem em líquidos orgânicos"
		},
		{
			codigo: 40309037,
			procedimento: "Células, contagem total e específica - pesquisa e/ou dosagem em líquidos orgânicos"
		},
		{
			codigo: 40309045,
			procedimento: "Células, pesquisa de células neoplásicas (citologia oncótica) - pesquisa e/ou dosagem em líquidos orgânicos"
		},
		{
			codigo: 40309053,
			procedimento: "Criptococose, cândida, aspérgilus (látex) - pesquisa e/ou dosagem em líquidos orgânicos"
		},
		{
			codigo: 40309061,
			procedimento: "Eletroforese de proteínas no líquor, com concentração - pesquisa e/ou dosagem em líquidos orgânicos"
		},
		{
			codigo: 40309070,
			procedimento: "H. Influenzae, S. Pneumonieae, N. Meningitidis A, B e C W135 (cada) - pesquisa e/ou dosagem em líquidos orgânicos"
		},
		{
			codigo: 40309088,
			procedimento: "Haemophilus influenzae - pesquisa de anticorpos (cada)- pesquisa e/ou dosagem em líquidos orgânicos"
		},
		{
			codigo: 40309096,
			procedimento: "Índice de imunoprodução (eletrof. e IgG em soro e líquor) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40309100,
			procedimento: "LCR ambulatorial rotina (aspectos cor + índice de cor + contagem global e  específica  de leucócitos e  hemácias + citologia  oncótica + proteína + glicose + cloro + eletroforese  com  concentração + IgG + reações para neurocisticercose (2) + reações para"
		},
		{
			codigo: 40309118,
			procedimento: "LCR hospitalar neurologia (aspectos cor + índices de cor + contagem global e específica de  leucócitos e hemácias + proteína + glicose + cloro + reações para neurocisticercose (2) + reações para  neurolues (2) + bacterioscopia + cultura + látex para bacté"
		},
		{
			codigo: 40309126,
			procedimento: "LCR pronto socorro (aspectos cor + índice  de cor + contagem  global  e  específica  de  leucócitos  e hemácias + proteína + glicose + cloro + lactato + bacterioscopia + cultura + látex para bactérias)"
		},
		{
			codigo: 40309134,
			procedimento: "Pesquisa de bandas oligoclonais por isofocalização - pesquisa e/ou dosagem em líquidos orgânicos"
		},
		{
			codigo: 40309142,
			procedimento: "Proteína mielina básica, anticorpo anti - pesquisa e/ou dosagem em líquidos orgânicos"
		},
		{
			codigo: 40309150,
			procedimento: "Punção cisternal subocciptal com manometria para coleta de líquido cefalorraqueano"
		},
		{
			codigo: 40309169,
			procedimento: "Punção lombar com manometria para coleta de líquido cefalorraqueano"
		},
		{
			codigo: 40309177,
			procedimento: "Nonne-Apple; reação"
		},
		{
			codigo: 40309185,
			procedimento: "Takata-Ara, reação"
		},
		{
			codigo: 40309193,
			procedimento: "Babesia microti em líquor"
		},
		{
			codigo: 40309207,
			procedimento: "Coccidióides em líquor"
		},
		{
			codigo: 40309215,
			procedimento: "Líquor cisticercose Western Blot"
		},
		{
			codigo: 40309223,
			procedimento: "Líquor encefalite, painel"
		},
		{
			codigo: 40309231,
			procedimento: "Líquor imunofenotipagem T e B"
		},
		{
			codigo: 40309240,
			procedimento: "Líquor índice IgG para citomegalovirus"
		},
		{
			codigo: 40309258,
			procedimento: "Líquor látex para meningite"
		},
		{
			codigo: 40309266,
			procedimento: "Aminoácidos no líquido cefalorraquidiano"
		},
		{
			codigo: 40309304,
			procedimento: "Anticorpo antiespermatozóide - pesquisa e/ou dosagem em líquidos orgânicos"
		},
		{
			codigo: 40309312,
			procedimento: "Espermograma (caracteres físicos, pH, fludificação, motilidade, vitalidade, contagem e morfologia)"
		},
		{
			codigo: 40309320,
			procedimento: "Espermograma e teste de penetração \"in vitro\", velocidade penetração vertical, colocação  vital, teste de revitalização"
		},
		{
			codigo: 40309401,
			procedimento: "Clements, teste"
		},
		{
			codigo: 40309410,
			procedimento: "Espectrofotometria de líquido amniótico"
		},
		{
			codigo: 40309428,
			procedimento: "Fosfolipídios (relação lecitina/esfingomielina) - pesquisa e/ou dosagem em líquidos orgânicos"
		},
		{
			codigo: 40309436,
			procedimento: "Maturidade pulmonar fetal - - pesquisa e/ou dosagem em líquidos orgânicos"
		},
		{
			codigo: 40309444,
			procedimento: "Rotina do líquido amniótico-amniograma (citológico espectrofotometria, creatinina e teste de clements)"
		},
		{
			codigo: 40309452,
			procedimento: "Azul de nilo no líquido amniótico"
		},
		{
			codigo: 40309509,
			procedimento: "Cristais com luz polarizada - pesquisa e/ou dosagem em líquidos orgânicos"
		},
		{
			codigo: 40309517,
			procedimento: "Ragócitos, pesquisa"
		},
		{
			codigo: 40309525,
			procedimento: "Rotina líquido sinovial - caracteres físicos, citologia, proteínas, ácido úrico, látex p/ F.R., BACT."
		},
		{
			codigo: 40310019,
			procedimento: "A fresco, exame"
		},
		{
			codigo: 40310035,
			procedimento: "Antibiograma p/ bacilos álcool-resistentes - drogas de 2 linhas"
		},
		{
			codigo: 40310043,
			procedimento: "Antígenos fúngicos, pesquisa"
		},
		{
			codigo: 40310051,
			procedimento: "B.A.A.R. (Ziehl ou fluorescência, pesquisa direta e após homogeneização) - pesquisa"
		},
		{
			codigo: 40310060,
			procedimento: "Bacterioscopia (Gram, Ziehl, Albert  etc), por lâmina"
		},
		{
			codigo: 40310078,
			procedimento: "Chlamydia, cultura"
		},
		{
			codigo: 40310086,
			procedimento: "Cólera - identificação (sorotipagem incluída)"
		},
		{
			codigo: 40310094,
			procedimento: "Corpúsculos de Donovani, pesquisa direta de"
		},
		{
			codigo: 40310108,
			procedimento: "Criptococo (tinta da China), pesquisa de"
		},
		{
			codigo: 40310116,
			procedimento: "Criptosporidium, pesquisa"
		},
		{
			codigo: 40310124,
			procedimento: "Cultura bacteriana (em diversos materiais biológicos)"
		},
		{
			codigo: 40310132,
			procedimento: "Cultura para bactérias anaeróbicas"
		},
		{
			codigo: 40310140,
			procedimento: "Cultura para fungos"
		},
		{
			codigo: 40310159,
			procedimento: "Cultura para mycobacterium"
		},
		{
			codigo: 40310167,
			procedimento: "Cultura quantitativa de secreções pulmonares, quando necessitar tratamento prévio c/ N.C.A."
		},
		{
			codigo: 40310175,
			procedimento: "Cultura, fezes: salmonela, shigellae e esc. Coli enteropatogênicas, enteroinvasora (sorol. Incluída) + campylobacter SP. + E. Coli entero-hemorrágica"
		},
		{
			codigo: 40310183,
			procedimento: "Cultura, fezes: salmonella, shigella e escherichia coli enteropatogênicas (sorologia incluída)"
		},
		{
			codigo: 40310191,
			procedimento: "Cultura, herpesvírus ou outro"
		},
		{
			codigo: 40310205,
			procedimento: "Cultura, micoplasma ou ureaplasma"
		},
		{
			codigo: 40310213,
			procedimento: "Cultura, urina com contagem de colônias"
		},
		{
			codigo: 40310221,
			procedimento: "Estreptococos - A, teste rápido"
		},
		{
			codigo: 40310230,
			procedimento: "Fungos, pesquisa de (a fresco lactofenol, tinta da China)"
		},
		{
			codigo: 40310248,
			procedimento: "Hemocultura (por amostra)"
		},
		{
			codigo: 40310256,
			procedimento: "Hemocultura automatizada (por amostra)"
		},
		{
			codigo: 40310264,
			procedimento: "Hemocultura para bactérias anaeróbias (por amostra)"
		},
		{
			codigo: 40310272,
			procedimento: "Hemophilus (bordetella) pertussis - pesquisa"
		},
		{
			codigo: 40310280,
			procedimento: "Hansen, pesquisa de (por material)"
		},
		{
			codigo: 40310299,
			procedimento: "Leptospira (campo escuro após concentração) pesquisa"
		},
		{
			codigo: 40310302,
			procedimento: "Microorganismos - teste de sensibilidade a drogas MIC, por droga testada"
		},
		{
			codigo: 40310310,
			procedimento: "Paracoccidioides, pesquisa de"
		},
		{
			codigo: 40310329,
			procedimento: "Pneumocysti carinii, pesquisa por coloração especial"
		},
		{
			codigo: 40310337,
			procedimento: "Rotavírus, pesquisa, Elisa"
		},
		{
			codigo: 40310345,
			procedimento: "Treponema (campo escuro) - pesquisa"
		},
		{
			codigo: 40310353,
			procedimento: "Vacina autógena"
		},
		{
			codigo: 40310361,
			procedimento: "Citomegalovírus - shell vial - pesquisa"
		},
		{
			codigo: 40310370,
			procedimento: "Microsporídia, pesquisa nas fezes"
		},
		{
			codigo: 40310388,
			procedimento: "Sarcoptes scabei, pesquisa"
		},
		{
			codigo: 40310396,
			procedimento: "Chlamydia - PCR, amplificação de DNA"
		},
		{
			codigo: 40310400,
			procedimento: "Cultura automatizada - MICROBIOLOGIA"
		},
		{
			codigo: 40310418,
			procedimento: "Antibiograma (teste de sensibilidade e antibióticos e quimioterápicos), por bactéria - não automatizado"
		},
		{
			codigo: 40310426,
			procedimento: "Antibiograma automatizado"
		},
		{
			codigo: 40310434,
			procedimento: "Leishmania, pesquisa"
		},
		{
			codigo: 40310442,
			procedimento: "Chlamydia pneumoniae, painel"
		},
		{
			codigo: 40310450,
			procedimento: "CMV para imunofluorescência direta"
		},
		{
			codigo: 40310469,
			procedimento: "Cultura para listeria"
		},
		{
			codigo: 40310477,
			procedimento: "Gardnerella, cultura"
		},
		{
			codigo: 40310485,
			procedimento: "Helicobacter pylori, cultura de biópsia"
		},
		{
			codigo: 40310493,
			procedimento: "Herpes para imunofluorescência direta"
		},
		{
			codigo: 40310507,
			procedimento: "Mycobactéria amplificação de DNA (PCR)"
		},
		{
			codigo: 40310515,
			procedimento: "Pesquisa de antígenos bacterianos"
		},
		{
			codigo: 40310523,
			procedimento: "Pesquisa de antígenos entamoeba histolytica"
		},
		{
			codigo: 40310531,
			procedimento: "Poder bactericida (pós administração de antibiótico)"
		},
		{
			codigo: 40310540,
			procedimento: "Protozoários, cultura para"
		},
		{
			codigo: 40310558,
			procedimento: "Streptococcus B hemol cultura qualquer material"
		},
		{
			codigo: 40310566,
			procedimento: "Teste de sensibilidade mycobacterium cepas de bactérias"
		},
		{
			codigo: 40310574,
			procedimento: "Trichomonas, cultura para"
		},
		{
			codigo: 40310582,
			procedimento: "Yersinia enterocolitica"
		},
		{
			codigo: 40310590,
			procedimento: "Antígenos bacterianos / vários materiais"
		},
		{
			codigo: 40310604,
			procedimento: "Antifungigrama"
		},
		{
			codigo: 40310612,
			procedimento: "Chlamydia trachomatis, exame direto para vários materiais"
		},
		{
			codigo: 40310620,
			procedimento: "Cultura, para agentes multirresistentes, vários materiais"
		},
		{
			codigo: 40310639,
			procedimento: "Demodex folliculorum, pesquisa"
		},
		{
			codigo: 40310647,
			procedimento: "Cultura quantitativa queimados (pele)"
		},
		{
			codigo: 40310655,
			procedimento: "Influenza vírus, isolamento"
		},
		{
			codigo: 40310663,
			procedimento: "Lactamase, teste da cepa"
		},
		{
			codigo: 40310671,
			procedimento: "Cultura em leite materno"
		},
		{
			codigo: 40310680,
			procedimento: "Acanthamoeba, pesquisa, vários materiais"
		},
		{
			codigo: 40310698,
			procedimento: "Acanthamoeba, cultura"
		},
		{
			codigo: 40310701,
			procedimento: "Corynebacterium diphiteriae, pesquisa"
		},
		{
			codigo: 40310710,
			procedimento: "Pesquisa de VRE"
		},
		{
			codigo: 40310728,
			procedimento: "Fungos morfologia/bioquímica"
		},
		{
			codigo: 40310736,
			procedimento: "Identificação de bactérias por método sorológico/bioquímico"
		},
		{
			codigo: 40311015,
			procedimento: "Ácido cítrico - pesquisa e/ou dosagem na urina"
		},
		{
			codigo: 40311023,
			procedimento: "Ácido homogentísico - pesquisa e/ou dosagem na urina"
		},
		{
			codigo: 40311031,
			procedimento: "Alcaptonúria  - pesquisa e/ou dosagem na urina"
		},
		{
			codigo: 40311040,
			procedimento: "Cálculos urinários - análise"
		},
		{
			codigo: 40311058,
			procedimento: "Catecolaminas fracionadas - dopamina, epinefrina, norepinefrina (cada) - pesquisa e/ou dosagem na urina"
		},
		{
			codigo: 40311066,
			procedimento: "Cistinúria, pesquisa"
		},
		{
			codigo: 40311074,
			procedimento: "Coproporfirina III - pesquisa e/ou dosagem na urina"
		},
		{
			codigo: 40311082,
			procedimento: "Corpos cetônicos, pesquisa - na urina"
		},
		{
			codigo: 40311090,
			procedimento: "Cromatografia de açúcares - na urina"
		},
		{
			codigo: 40311104,
			procedimento: "Dismorfismo eritrocitário, pesquisa (contraste de fase) - na urina"
		},
		{
			codigo: 40311112,
			procedimento: "Erros inatos do metabolismo baterias de testes químicos de triagem em urina (mínimo de 6 testes)"
		},
		{
			codigo: 40311120,
			procedimento: "Frutosúria, pesquisa"
		},
		{
			codigo: 40311139,
			procedimento: "Galactosúria, pesquisa"
		},
		{
			codigo: 40311147,
			procedimento: "Lipóides, pesquisa - na urina"
		},
		{
			codigo: 40311155,
			procedimento: "Melanina, pesquisa - na urina"
		},
		{
			codigo: 40311163,
			procedimento: "Metanefrinas urinárias, dosagem"
		},
		{
			codigo: 40311171,
			procedimento: "Microalbuminúria"
		},
		{
			codigo: 40311180,
			procedimento: "Pesquisa ou dosagem de um componente urinário"
		},
		{
			codigo: 40311198,
			procedimento: "Porfobilinogênio, pesquisa - na urina"
		},
		{
			codigo: 40311201,
			procedimento: "Proteínas de Bence Jones, pesquisa - na urina"
		},
		{
			codigo: 40311210,
			procedimento: "Rotina de urina (caracteres físicos, elementos anormais e sedimentoscopia)"
		},
		{
			codigo: 40311228,
			procedimento: "Uroporfirinas, dosagem"
		},
		{
			codigo: 40311236,
			procedimento: "2,5-hexanodiona, dosagem na urina"
		},
		{
			codigo: 40311244,
			procedimento: "Cistina - pesquisa e/ou dosagem na urina"
		},
		{
			codigo: 40311252,
			procedimento: "Porfobilinogênio - na urina"
		},
		{
			codigo: 40311260,
			procedimento: "Acidez titulável - pesquisa e/ou dosagem na urina"
		},
		{
			codigo: 40311279,
			procedimento: "Bartituratos - pesquisa e/ou dosagem na urina"
		},
		{
			codigo: 40311287,
			procedimento: "Beta mercapto-lactato-disulfidúria,pesquisa - na urina"
		},
		{
			codigo: 40311295,
			procedimento: "Contagem sedimentar de Addis"
		},
		{
			codigo: 40311309,
			procedimento: "Eletroforese de proteínas urinárias, com concentração"
		},
		{
			codigo: 40311317,
			procedimento: "Fenilcetonúria, pesquisa"
		},
		{
			codigo: 40311325,
			procedimento: "Histidina, pesquisa - na urina"
		},
		{
			codigo: 40311333,
			procedimento: "Inclusão citomegálica, pesquisa de células com - na urina"
		},
		{
			codigo: 40311341,
			procedimento: "Mioglobina, pesquisa - na urina"
		},
		{
			codigo: 40311350,
			procedimento: "Osmolalidade, determinação - na urina"
		},
		{
			codigo: 40311368,
			procedimento: "Prova de concentração (Fishberg ou Volhard) - na urina"
		},
		{
			codigo: 40311376,
			procedimento: "Prova de diluição - na urina"
		},
		{
			codigo: 40311384,
			procedimento: "Sobrecarga de água, prova - na urina"
		},
		{
			codigo: 40311392,
			procedimento: "Tirosinose, pesquisa - na urina"
		},
		{
			codigo: 40311406,
			procedimento: "Fenciclidina na urina (amostra isolada)"
		},
		{
			codigo: 40311414,
			procedimento: "Ferro urinário (urina 24h)"
		},
		{
			codigo: 40311422,
			procedimento: "Gordura na urina, pesquisa de"
		},
		{
			codigo: 40311430,
			procedimento: "Hemoglobina livre na urina (amostra isolada)"
		},
		{
			codigo: 40311449,
			procedimento: "MDMA (Êxtase), triagem (urina)"
		},
		{
			codigo: 40311457,
			procedimento: "Pesquisa de espermatozóide na urina"
		},
		{
			codigo: 40311465,
			procedimento: "Substâncias redutoras, pesquisa (urina)"
		},
		{
			codigo: 40311473,
			procedimento: "Teste de concentração urinária após DDAVP"
		},
		{
			codigo: 40311481,
			procedimento: "Urina, pesquisa antígeno para Legionella"
		},
		{
			codigo: 40311490,
			procedimento: "Urocitograma"
		},
		{
			codigo: 40311503,
			procedimento: "Pesquisa de sulfatídeos e material metacromático na urina"
		},
		{
			codigo: 40312011,
			procedimento: "Cristalização do muco cervical, pequisa"
		},
		{
			codigo: 40312020,
			procedimento: "Cromatina sexual, pesquisa"
		},
		{
			codigo: 40312046,
			procedimento: "Iontoforese para a coleta de suor, com dosagem de cloro"
		},
		{
			codigo: 40312054,
			procedimento: "Muco-nasal, pesquisa de eosinófilos e mastócitos"
		},
		{
			codigo: 40312062,
			procedimento: "Perfil  metabólico  para  litíase  renal: sangue (Ca, P, AU, Cr) urina: (Ca, AU, P, citr, pesq. Cistina) AMP-cíclico"
		},
		{
			codigo: 40312070,
			procedimento: "Gastroacidograma - secreção basal para 60\" e 4 amostras após o estímulo (fornecimento de material inclusive tubagem), teste"
		},
		{
			codigo: 40312089,
			procedimento: "Hollander (inclusive tubagem), teste"
		},
		{
			codigo: 40312097,
			procedimento: "Pancreozima - secretina no suco duodenal, teste"
		},
		{
			codigo: 40312100,
			procedimento: "Rotina da biles A, B, C e do suco duodenal (caracteres físicos e microscópicos inclusive tubagem)"
		},
		{
			codigo: 40312119,
			procedimento: "Tubagem duodenal"
		},
		{
			codigo: 40312127,
			procedimento: "Perfil reumatológico (ácido úrico, eletroforese de proteínas, FAN, VHS, prova do látex P/F. R, W. Rose)"
		},
		{
			codigo: 40312135,
			procedimento: "pH - tornassol - pesquisa"
		},
		{
			codigo: 40312143,
			procedimento: "Prova atividade de febre reumática (aslo, eletroforese de proteínas, muco-proteínas e proteína \"C\" reativa)"
		},
		{
			codigo: 40312151,
			procedimento: "Provas de função hepática (bilirrubinas, eletroforese de proteínas, FA, TGO, TGP e Gama-PGT)"
		},
		{
			codigo: 40312160,
			procedimento: "Teste do pezinho básico (TSH neonatal + fenilalanina + eletroforese de Hb para triagem de hemopatias)"
		},
		{
			codigo: 40312178,
			procedimento: "Teste do pezinho ampliado (TSH neonatal + 17 OH progesterona + fenilalanina + Tripsina imuno-reativa + eletroforese de Hb para triagem de hemopatias)"
		},
		{
			codigo: 40312186,
			procedimento: "Cálculo biliar, análise química"
		},
		{
			codigo: 40312194,
			procedimento: "Coleta de escarro induzida"
		},
		{
			codigo: 40312208,
			procedimento: "Cristalografia análise de cálculo"
		},
		{
			codigo: 40312216,
			procedimento: "Esclerose múltipla, painel"
		},
		{
			codigo: 40312224,
			procedimento: "Espectrometria de massa em tandem"
		},
		{
			codigo: 40312232,
			procedimento: "Identificação de verme"
		},
		{
			codigo: 40312240,
			procedimento: "Isolamento de microorganismos especiais"
		},
		{
			codigo: 40312259,
			procedimento: "Lavado gástrico, colheita por"
		},
		{
			codigo: 40312267,
			procedimento: "Líquido pleural citológico"
		},
		{
			codigo: 40312275,
			procedimento: "Pepsinogenio 2"
		},
		{
			codigo: 40312283,
			procedimento: "Perfil para líquidos biológicos"
		},
		{
			codigo: 40312291,
			procedimento: "Proteína 14-3-3"
		},
		{
			codigo: 40312305,
			procedimento: "Prova de restrição calórica"
		},
		{
			codigo: 40312313,
			procedimento: "Prova fármaco-dinâmica"
		},
		{
			codigo: 40312321,
			procedimento: "Semiologia para impotência"
		},
		{
			codigo: 40312330,
			procedimento: "Sexagem fetal"
		},
		{
			codigo: 40312348,
			procedimento: "Sorologia doença arranhadura de gato"
		},
		{
			codigo: 40312364,
			procedimento: "Vírus respiratório, triagem aspirado nasofaringeo"
		},
		{
			codigo: 40312372,
			procedimento: "Vírus respiratório, triagem lavado nasofaringeo"
		},
		{
			codigo: 40312380,
			procedimento: "Vírus respiratório, triagem secreção orofaringe"
		},
		{
			codigo: 40312399,
			procedimento: "Vírus respiratório, triagem secreção traqueal"
		},
		{
			codigo: 40312402,
			procedimento: "Vírus respiratório, triagem swab nasal"
		},
		{
			codigo: 40312410,
			procedimento: "Teste respiratório da xylose"
		},
		{
			codigo: 40312429,
			procedimento: "Teste respiratório de intolerância a frutose"
		},
		{
			codigo: 40312437,
			procedimento: "Teste respiratório de intolerância a glicose"
		},
		{
			codigo: 40312445,
			procedimento: "Teste respiratório de intolerânica a lactose"
		},
		{
			codigo: 40312453,
			procedimento: "Teste respiratório de intolerância a sacarose"
		},
		{
			codigo: 40312461,
			procedimento: "Teste respiratório de intolerância a sorbitol"
		},
		{
			codigo: 40312470,
			procedimento: "Teste respiratório da lactulose (8 amostras)"
		},
		{
			codigo: 40313018,
			procedimento: "Ácido delta aminolevulínico (para chumbo inorgânico) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313026,
			procedimento: "Ácido delta aminolevulínico desidratase (para chumbo inorgânico) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313034,
			procedimento: "Ácido fenilglioxílico (para estireno) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313042,
			procedimento: "Ácido hipúrico (para tolueno) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313050,
			procedimento: "Ácido mandélico (para estireno) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313069,
			procedimento: "Ácido metilhipúrico (para xilenos) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313077,
			procedimento: "Ácido salicílico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313085,
			procedimento: "Azida sódica, teste da (para deissulfeto de carbono)"
		},
		{
			codigo: 40313093,
			procedimento: "Carboxihemoglobina (para monóxido de carbono  diclorometano) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313107,
			procedimento: "Chumbo - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313115,
			procedimento: "Colinesterase (para carbamatos  organofosforados) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313123,
			procedimento: "Coproporfirinas (para chumbo inorgânico) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313131,
			procedimento: "Dialdeído malônico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313140,
			procedimento: "Etanol - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313158,
			procedimento: "Fenol (para benzeno, fenol) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313166,
			procedimento: "Flúor (para fluoretos) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313174,
			procedimento: "Formaldeído - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313182,
			procedimento: "Meta-hemoglobina (para anilina nitrobenzeno) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313190,
			procedimento: "Metais Al, As, Cd, Cr, Mn, Hg, Ni, Zn, Co, outro (s) absorção atômica (cada) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313204,
			procedimento: "Metanol - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313212,
			procedimento: "P-aminofenol (para anilina) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313220,
			procedimento: "P-nitrofenol (para nitrobenzeno) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313239,
			procedimento: "Protoporfirinas livres (para chumbo inorgânico) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313247,
			procedimento: "Protoporfirinas Zn (para chumbo inorgânico) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313255,
			procedimento: "Selênio, dosagem"
		},
		{
			codigo: 40313263,
			procedimento: "Sulfatos orgânicos ou inorgânicos, pesquisa (cada)"
		},
		{
			codigo: 40313271,
			procedimento: "Tiocianato (para cianetos  nitrilas alifáticas) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313280,
			procedimento: "Triclorocompostos totais (para tetracloroetileno, tricloroetano, tricloroetileno) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313298,
			procedimento: "Ácido acético - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313301,
			procedimento: "Ácido metil malônico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313310,
			procedimento: "Cromo - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313328,
			procedimento: "Zinco - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313336,
			procedimento: "Salicilatos, pesquisa"
		},
		{
			codigo: 40313344,
			procedimento: "Metil Etil Cetona - pesquisa e/ou dosagem"
		},
		{
			codigo: 40313352,
			procedimento: "Berílio, soro"
		},
		{
			codigo: 40313360,
			procedimento: "Brometo, sangue total"
		},
		{
			codigo: 40314014,
			procedimento: "Apolipoproteína E, genotipagem"
		},
		{
			codigo: 40314022,
			procedimento: "Citomegalovírus - qualitativo, por PCR - pesquisa"
		},
		{
			codigo: 40314030,
			procedimento: "Citomegalovírus - quantitativo, por PCR - pesquisa"
		},
		{
			codigo: 40314049,
			procedimento: "Cromossomo philadelfia - pesquisa"
		},
		{
			codigo: 40314057,
			procedimento: "Fator V de Leiden por PCR - pesquisa"
		},
		{
			codigo: 40314065,
			procedimento: "Fibrose cística, pesquisa de uma mutação"
		},
		{
			codigo: 40314073,
			procedimento: "Hepatite B (qualitativo) PCR - pesquisa"
		},
		{
			codigo: 40314081,
			procedimento: "Hepatite B (quantitativo) PCR - pesquisa"
		},
		{
			codigo: 40314090,
			procedimento: "Hepatite C (qualitativo) por PCR - pesquisa"
		},
		{
			codigo: 40314103,
			procedimento: "Hepatite C (quantitativo) por PCR - pesquisa"
		},
		{
			codigo: 40314111,
			procedimento: "Hepatite C - genotipagem - pesquisa"
		},
		{
			codigo: 40314120,
			procedimento: "HIV - carga viral PCR - pesquisa"
		},
		{
			codigo: 40314138,
			procedimento: "HIV - qualitativo por PCR - pesquisa"
		},
		{
			codigo: 40314146,
			procedimento: "HIV, genotipagem - pesquisa"
		},
		{
			codigo: 40314154,
			procedimento: "HPV (vírus do papiloma humano) + subtipagem quando necessário PCR - pesquisa"
		},
		{
			codigo: 40314162,
			procedimento: "HTLV I / II por PCR (cada) - pesquisa"
		},
		{
			codigo: 40314170,
			procedimento: "Mycobactéria PCR - pesquisa"
		},
		{
			codigo: 40314189,
			procedimento: "Parvovírus por PCR - pesquisa"
		},
		{
			codigo: 40314197,
			procedimento: "Proteína S total + livre, dosagem"
		},
		{
			codigo: 40314200,
			procedimento: "Rubéola por PCR - pesquisa"
		},
		{
			codigo: 40314219,
			procedimento: "Sífilis por PCR - pesquisa"
		},
		{
			codigo: 40314227,
			procedimento: "Toxoplasmose por PCR - pesquisa"
		},
		{
			codigo: 40314235,
			procedimento: "X frágil por PCR - pesquisa"
		},
		{
			codigo: 40314243,
			procedimento: "Chlamydia por biologia molecular - pesquisa"
		},
		{
			codigo: 40314251,
			procedimento: "Citogenética de medula óssea"
		},
		{
			codigo: 40314260,
			procedimento: "Amplificação de material por biologia molecular (outros agentes)"
		},
		{
			codigo: 40314278,
			procedimento: "Pesquisa de outros agentes por PCR"
		},
		{
			codigo: 40314286,
			procedimento: "Pesquisa de mutação de alelo específico por PCR"
		},
		{
			codigo: 40314294,
			procedimento: "Resistência a agentes antivirais por biologia molecular (cada droga) - pesquisa"
		},
		{
			codigo: 40314308,
			procedimento: "Quantificação de outros agentes por PCR"
		},
		{
			codigo: 40314316,
			procedimento: "SCIH tipagem molecular de bactérias"
		},
		{
			codigo: 40314324,
			procedimento: "Clonalidade para células B, detecção por PCR, vários materiais"
		},
		{
			codigo: 40314332,
			procedimento: "Clonalidade para células T, detecção por PCR, sangue total"
		},
		{
			codigo: 40314340,
			procedimento: "Coronavirus, detecção por PCR"
		},
		{
			codigo: 40314359,
			procedimento: "Epstein BARR vírus por PCR"
		},
		{
			codigo: 40314367,
			procedimento: "Hepatite B, genotipagem"
		},
		{
			codigo: 40314375,
			procedimento: "Herpes vírus humano 1,2 por PCR"
		},
		{
			codigo: 40314383,
			procedimento: "Herpes vírus humano 6,7 por PCR"
		},
		{
			codigo: 40314391,
			procedimento: "Herpes vírus humano 8 por PCR"
		},
		{
			codigo: 40314405,
			procedimento: "Herpes vírus zoster, (Varicella) por PCR"
		},
		{
			codigo: 40314413,
			procedimento: "Hepatite C quantitativo por TMA"
		},
		{
			codigo: 40314421,
			procedimento: "Papiloma virus humano, genotipagem"
		},
		{
			codigo: 40314430,
			procedimento: "HLA B27, fenotipagem"
		},
		{
			codigo: 40314448,
			procedimento: "HPV oncoproteínas virais E6/E7, pesquisa"
		},
		{
			codigo: 40314456,
			procedimento: "Clostridium Difficile Toxigênico, pesquisa DNA, fezes"
		},
		{
			codigo: 40314472,
			procedimento: "Detecção de bactérias e fungos em sangue periférico (Septifast), por PCR"
		},
		{
			codigo: 40314480,
			procedimento: "Análise de quimerismo pós transplante (STR), cada"
		},
		{
			codigo: 40314499,
			procedimento: "Teste de biologia molecular para hiperplasia adrenal congênita"
		},
		{
			codigo: 40314502,
			procedimento: "HIV amplificação do DNA (PCR)"
		},
		{
			codigo: 40314510,
			procedimento: "Pesquisa de mutação pré-core vírus hepatite B"
		},
		{
			codigo: 40314529,
			procedimento: "TMA qualitativo para hepatite C"
		},
		{
			codigo: 40314537,
			procedimento: "Chlamydia - PCR, amplificação de DNA"
		},
		{
			codigo: 40314545,
			procedimento: "Mycobactéria amplificação de DNA (PCR)"
		},
		{
			codigo: 40314561,
			procedimento: "Vírus Zika - por PCR"
		},
		{
			codigo: 40314618,
			procedimento: "SARS-CoV-2 (CORONAVÍRUS COVID-19) - PESQUISA POR RT - PCR"
		},
		{
			codigo: 40316017,
			procedimento: "17-alfa-hidroxiprogesterona - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316025,
			procedimento: "3 alfa androstonediol glucoronídeo (3ALFDADIOL) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316033,
			procedimento: "Ácido vanilmandélico (VMA) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316041,
			procedimento: "Adrenocorticotrófico, hormônio (ACTH) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316050,
			procedimento: "Aldosterona - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316068,
			procedimento: "Alfa-fetoproteína - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316076,
			procedimento: "Androstenediona - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316084,
			procedimento: "Anticorpo anti-receptor de TSH (TRAB) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316092,
			procedimento: "Anticorpos antiinsulina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316106,
			procedimento: "Anticorpos antitireóide (tireoglobulina) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316114,
			procedimento: "Antígeno Austrália (HBSAG) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316122,
			procedimento: "Antígeno carcinoembriogênico (CEA) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316130,
			procedimento: "Antígeno específico prostático livre (PSA livre) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316149,
			procedimento: "Antígeno específico prostático total (PSA) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316157,
			procedimento: "Anti-TPO - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316165,
			procedimento: "Calcitonina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316173,
			procedimento: "Catecolaminas - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316181,
			procedimento: "Composto S (11-desoxicortisol) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316190,
			procedimento: "Cortisol - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316203,
			procedimento: "Crescimento, hormônio do (HGH) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316211,
			procedimento: "Dehidroepiandrosterona (DHEA) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316220,
			procedimento: "Dehidrotestosterona (DHT) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316238,
			procedimento: "Drogas (imunossupressora, anticonvulsivante, digitálico, etc.) cada - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316246,
			procedimento: "Estradiol - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316254,
			procedimento: "Estriol - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316262,
			procedimento: "Estrona - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316270,
			procedimento: "Ferritina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316289,
			procedimento: "Folículo estimulante, hormônio (FSH) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316297,
			procedimento: "Gastrina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316300,
			procedimento: "Globulina de ligação de hormônios sexuais (SHBG) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316319,
			procedimento: "Globulina transportadora da tiroxina (TBG) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316327,
			procedimento: "Gonadotrófico coriônico, hormônio (HCG) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316335,
			procedimento: "Hormônio luteinizante (LH) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316343,
			procedimento: "Imunoglobulina (IGE) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316351,
			procedimento: "Índice de tiroxina livre (ITL) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316360,
			procedimento: "Insulina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316378,
			procedimento: "Marcadores tumorais (CA 19.9, CA 125, CA 72-4, CA 15-3, etc.) cada - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316386,
			procedimento: "Osteocalcina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316394,
			procedimento: "Peptídeo C - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316408,
			procedimento: "Progesterona - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316416,
			procedimento: "Prolactina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316424,
			procedimento: "PTH - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316432,
			procedimento: "Renina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316440,
			procedimento: "Somatomedina C (IGF1) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316459,
			procedimento: "Sulfato de dehidroepiandrosterona (S-DHEA) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316467,
			procedimento: "T3 livre - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316475,
			procedimento: "T3 retenção - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316483,
			procedimento: "T3 reverso - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316491,
			procedimento: "T4 livre - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316505,
			procedimento: "Testosterona livre - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316513,
			procedimento: "Testosterona total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316521,
			procedimento: "Tireoestimulante, hormônio (TSH) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316530,
			procedimento: "Tireoglobulina - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316548,
			procedimento: "Tiroxina (T4) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316556,
			procedimento: "Triiodotironina (T3) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316564,
			procedimento: "Vasopressina (ADH) - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316572,
			procedimento: "Vitamina B12 - pesquisa e/ou dosagem"
		},
		{
			codigo: 40316580,
			procedimento: "Adiponectina"
		},
		{
			codigo: 40316599,
			procedimento: "AMP cíclico nefrogênico na urina (24h)"
		},
		{
			codigo: 40316602,
			procedimento: "AMP cíclico nefrogênico na urina (amostra isolada)"
		},
		{
			codigo: 40316610,
			procedimento: "Anabolizantes esteróides na urina (amostra isolada)"
		},
		{
			codigo: 40316629,
			procedimento: "Androsterona"
		},
		{
			codigo: 40316637,
			procedimento: "Angiotensina II"
		},
		{
			codigo: 40316645,
			procedimento: "Anticorpos antinucleossomo, soro"
		},
		{
			codigo: 40316653,
			procedimento: "Antígenos prostático específico complexado, soro"
		},
		{
			codigo: 40316661,
			procedimento: "Aquaporina 4 (AQP4)"
		},
		{
			codigo: 40316670,
			procedimento: "Capacidade de ligação da vitamina B12"
		},
		{
			codigo: 40316688,
			procedimento: "Corticosterona"
		},
		{
			codigo: 40316696,
			procedimento: "CRH"
		},
		{
			codigo: 40316700,
			procedimento: "Cromogranina A"
		},
		{
			codigo: 40316718,
			procedimento: "Cromogranina A, soro"
		},
		{
			codigo: 40316726,
			procedimento: "Curva de peptídeo C e insulina"
		},
		{
			codigo: 40316734,
			procedimento: "Curva glicêmica (7 dosagens) via oral ou endovenosa ou potencializada"
		},
		{
			codigo: 40316742,
			procedimento: "DCB"
		},
		{
			codigo: 40316750,
			procedimento: "Dehidro rodamina teste de oxidação"
		},
		{
			codigo: 40316769,
			procedimento: "Deoxicorticosterona, dosagem"
		},
		{
			codigo: 40316777,
			procedimento: "Dosagem de 18 hidroxicortisterona"
		},
		{
			codigo: 40316785,
			procedimento: "Dosagem de ácido hipúrico em urina"
		},
		{
			codigo: 40316793,
			procedimento: "Dosagem de ácido trans-mucônico em urina"
		},
		{
			codigo: 40316807,
			procedimento: "Fator de crescimento vascular endotelial (VEGF)"
		},
		{
			codigo: 40316815,
			procedimento: "Fator II de crescimento, símile a insulina"
		},
		{
			codigo: 40316823,
			procedimento: "Fator liberador hormônio do crescimento GH"
		},
		{
			codigo: 40316831,
			procedimento: "Glicose após estímulo/glucagon"
		},
		{
			codigo: 40316840,
			procedimento: "Glicosuria fracionada (4 dosagens)"
		},
		{
			codigo: 40316858,
			procedimento: "Globulina ligadora do cortisol"
		},
		{
			codigo: 40316866,
			procedimento: "Gonadotrofina coriônica - hemaglutinação ou látex"
		},
		{
			codigo: 40316874,
			procedimento: "HGH estímulo com exercício e clonidina, HGH"
		},
		{
			codigo: 40316882,
			procedimento: "Hipoglicemiantes (sulfonilurea painel)"
		},
		{
			codigo: 40316890,
			procedimento: "Hormônio anti muleriano"
		},
		{
			codigo: 40316904,
			procedimento: "Hormônio estimulador do alfa melanócito"
		},
		{
			codigo: 40316912,
			procedimento: "ICA 512"
		},
		{
			codigo: 40316920,
			procedimento: "IGFBP-1"
		},
		{
			codigo: 40316939,
			procedimento: "IGFBP-2"
		},
		{
			codigo: 40316947,
			procedimento: "Índice de recuperação da tireoglobulina"
		},
		{
			codigo: 40316955,
			procedimento: "Insulina livre"
		},
		{
			codigo: 40316963,
			procedimento: "Insulina total e livre"
		},
		{
			codigo: 40316971,
			procedimento: "Megateste"
		},
		{
			codigo: 40316980,
			procedimento: "Melanócito estimulante hormônio (MSH)"
		},
		{
			codigo: 40316998,
			procedimento: "Melatonina (sangue)"
		},
		{
			codigo: 40317013,
			procedimento: "Monitorização de glicose 1 dia"
		},
		{
			codigo: 40317021,
			procedimento: "Monitorização de glicose 2 dias"
		},
		{
			codigo: 40317030,
			procedimento: "Monitorização de glicose 3 dias"
		},
		{
			codigo: 40317048,
			procedimento: "PCI e TG após TSH recombinante"
		},
		{
			codigo: 40317056,
			procedimento: "Pregnenolona, dosagem"
		},
		{
			codigo: 40317064,
			procedimento: "Pró-insulina"
		},
		{
			codigo: 40317072,
			procedimento: "Proteína ligadora hormônio de crescimento GH"
		},
		{
			codigo: 40317080,
			procedimento: "Prova de sobrecarga de glicose para insulina"
		},
		{
			codigo: 40317099,
			procedimento: "Receptor fator de crescimento epidermal"
		},
		{
			codigo: 40317102,
			procedimento: "Sub-unidade Alfa hormônios glicoproteicos"
		},
		{
			codigo: 40317110,
			procedimento: "Sub-unidade Beta da gonadotrofina coriônica livre"
		},
		{
			codigo: 40317129,
			procedimento: "Teste com ACTH para dosagem de DHEA"
		},
		{
			codigo: 40317137,
			procedimento: "Teste com cálcio para dosar calcitonina"
		},
		{
			codigo: 40317145,
			procedimento: "Teste com cortrosina para 17 alfa hidroxiprogesterona"
		},
		{
			codigo: 40317153,
			procedimento: "Teste com estímulo para renina após captopril"
		},
		{
			codigo: 40317161,
			procedimento: "Teste de estímulo com cortrosina para11 desoxicortisol"
		},
		{
			codigo: 40317170,
			procedimento: "Teste de estímulo com TRH para dosagem de GH"
		},
		{
			codigo: 40317188,
			procedimento: "Teste de estímulo do GH pela insulina (4 dosagens de GH)"
		},
		{
			codigo: 40317196,
			procedimento: "Teste de estímulo do GH pelo exercício (cada dosagem de GH)"
		},
		{
			codigo: 40317200,
			procedimento: "Teste de estímulo do GH pelo glucagon (4 dosagens de GH)"
		},
		{
			codigo: 40317218,
			procedimento: "Teste de reserva funcional com l-arginina"
		},
		{
			codigo: 40317226,
			procedimento: "Teste de supressão do GH pela sobrecarga de glicose (cada dosagem de GH)"
		},
		{
			codigo: 40317234,
			procedimento: "Tetrahidroaldosterona"
		},
		{
			codigo: 40317242,
			procedimento: "TRH, dosagem do"
		},
		{
			codigo: 40317250,
			procedimento: "Curva insulínica e glicêmica clássica"
		},
		{
			codigo: 40317269,
			procedimento: "Curva insulínica e glicêmica (2 dosagens)"
		},
		{
			codigo: 40317277,
			procedimento: "Curva insulínica e glicêmica (3 dosagens)"
		},
		{
			codigo: 40317285,
			procedimento: "Curva insulínica e glicêmica (4 dosagens)"
		},
		{
			codigo: 40317293,
			procedimento: "Curva insulínica e glicêmica (5 dosagens)"
		},
		{
			codigo: 40317307,
			procedimento: "Curva insulínica e glicêmica (7 dosagens)"
		},
		{
			codigo: 40317315,
			procedimento: "Curva insulínica e glicêmica (8 dosagens)"
		},
		{
			codigo: 40317323,
			procedimento: "Curva insulínica e glicêmica (9 dosagens)"
		},
		{
			codigo: 40317331,
			procedimento: "Curva glicêmica prolongada (7 dosagens)"
		},
		{
			codigo: 40317340,
			procedimento: "C-Telopeptídeo"
		},
		{
			codigo: 40317366,
			procedimento: "Grelina, polipeptídeo liberador da gastrina, dosagem"
		},
		{
			codigo: 40317374,
			procedimento: "Cortisol ritmo (2 dosagens)"
		},
		{
			codigo: 40317382,
			procedimento: "Testosterona na saliva, dosagem"
		},
		{
			codigo: 40317390,
			procedimento: "Curva insulínica e glicêmica (6 dosagens)"
		},
		{
			codigo: 40317404,
			procedimento: "Metanefrinas urinária após clonidina"
		},
		{
			codigo: 40317412,
			procedimento: "Paratomônio, proteína relacionada, dosagem"
		},
		{
			codigo: 40317420,
			procedimento: "Proteína ligadora do hormônio de crescimento (HGH), dosagem"
		},
		{
			codigo: 40317439,
			procedimento: "Restrição hídrica, teste"
		},
		{
			codigo: 40317447,
			procedimento: "Teste de estímulo para cortisol com insulina (cada)"
		},
		{
			codigo: 40317455,
			procedimento: "Teste para CRH para dosar ACTH e cortisol"
		},
		{
			codigo: 40317463,
			procedimento: "Curva de HGH com clonidina (cada dosagem)"
		},
		{
			codigo: 40317471,
			procedimento: "Prova funcional de estímulo da prolactina após TRH sem fornecimento do medicamento (por dosagem)"
		},
		{
			codigo: 40317480,
			procedimento: "Prova de Testosterona, após HCG sem fornecimento do medicamento (por dosagem)"
		},
		{
			codigo: 40319016,
			procedimento: "APT teste"
		},
		{
			codigo: 40319024,
			procedimento: "Atividade de protease fator Von Willebrand"
		},
		{
			codigo: 40319032,
			procedimento: "Cadeia Kappa leve livre"
		},
		{
			codigo: 40319040,
			procedimento: "Cadeia Kappa-Lambda leve livre"
		},
		{
			codigo: 40319059,
			procedimento: "Células tumorais circulante mama Cellsearch"
		},
		{
			codigo: 40319067,
			procedimento: "Coenzima Q10"
		},
		{
			codigo: 40319075,
			procedimento: "Fator alfa necrose tumoral"
		},
		{
			codigo: 40319083,
			procedimento: "Fator B properdin, dosagem soro"
		},
		{
			codigo: 40319091,
			procedimento: "Fator X ativado"
		},
		{
			codigo: 40319105,
			procedimento: "Ferro medula óssea"
		},
		{
			codigo: 40319113,
			procedimento: "Hemácias, contagem"
		},
		{
			codigo: 40319121,
			procedimento: "Hemácias, tempo de sobrevida das"
		},
		{
			codigo: 40319130,
			procedimento: "Hemoglobina fetal, dosagem"
		},
		{
			codigo: 40319148,
			procedimento: "Hemólise"
		},
		{
			codigo: 40319156,
			procedimento: "Índice de segmentação dos neutrófilos"
		},
		{
			codigo: 40319164,
			procedimento: "Linfócitos, cultura com candida albicans"
		},
		{
			codigo: 40319172,
			procedimento: "Microesferócitos, pesquisa de"
		},
		{
			codigo: 40319180,
			procedimento: "Molibidenio (sangue)"
		},
		{
			codigo: 40319199,
			procedimento: "Neutrófilos, pesquisa de"
		},
		{
			codigo: 40319202,
			procedimento: "Pesquisa de alfa talassemia"
		},
		{
			codigo: 40319210,
			procedimento: "Pesquisa de beta talassemia"
		},
		{
			codigo: 40319229,
			procedimento: "Pesquisa hemoglobina H"
		},
		{
			codigo: 40319237,
			procedimento: "Protrombina fragmento 1 e 2"
		},
		{
			codigo: 40319245,
			procedimento: "Prova funcional DDAVP - hemofilia"
		},
		{
			codigo: 40319253,
			procedimento: "Prova funcional DDAVP - Von Willebrand (1hora)"
		},
		{
			codigo: 40319261,
			procedimento: "Prova funcional DDAVP - Von Willebrand (4horas)"
		},
		{
			codigo: 40319270,
			procedimento: "Tempo de Lise de Euglobulina"
		},
		{
			codigo: 40319288,
			procedimento: "Teste cruzado de grupos sanguíneos"
		},
		{
			codigo: 40319296,
			procedimento: "Teste de estímulo DDAQVP para dosagem de cortisol e ACTH"
		},
		{
			codigo: 40319300,
			procedimento: "Viscosidade plasmática ou sanguínea"
		},
		{
			codigo: 40319318,
			procedimento: "Análise de multímeros para pacientes com doença de Von Willebrand"
		},
		{
			codigo: 40319326,
			procedimento: "Protrombina, pesquisa de mutação"
		},
		{
			codigo: 40319334,
			procedimento: "CD 52 marcador isolado"
		},
		{
			codigo: 40319342,
			procedimento: "Disfibrinogenemia, pesquisa"
		},
		{
			codigo: 40319350,
			procedimento: "HPA1 genotipagem"
		},
		{
			codigo: 40319369,
			procedimento: "CD3, imunofenotipagem"
		},
		{
			codigo: 40319377,
			procedimento: "CD34, imunofenotipagem"
		},
		{
			codigo: 40319385,
			procedimento: "Ciclina D1, imunofenotipagem"
		},
		{
			codigo: 40319393,
			procedimento: "Adesividade plaquetária"
		},
		{
			codigo: 40319407,
			procedimento: "Tempo de coagulação ativado (TCA)"
		},
		{
			codigo: 40319415,
			procedimento: "Teste de viabilidade celular, citometria de fluxo, outros materiais"
		},
		{
			codigo: 40319423,
			procedimento: "Anti-fator Xa, atividade"
		},
		{
			codigo: 40319431,
			procedimento: "Cross match plaquetário"
		},
		{
			codigo: 40319440,
			procedimento: "Fator II, dosagem do inibidor"
		},
		{
			codigo: 40319458,
			procedimento: "Fator VII, dosagem do inibidor"
		},
		{
			codigo: 40319466,
			procedimento: "Fibrinogênio quantitativo, nefelometria"
		},
		{
			codigo: 40319474,
			procedimento: "Hemoglobinopatias, neonatal, sangue periférico"
		},
		{
			codigo: 40319482,
			procedimento: "Imunofenotipagem Imunod nível 2"
		},
		{
			codigo: 40321010,
			procedimento: "Colesterol esterificado"
		},
		{
			codigo: 40321029,
			procedimento: "Deficiência da MCAD"
		},
		{
			codigo: 40321037,
			procedimento: "Deficiente de carboidrato, transferrina"
		},
		{
			codigo: 40321045,
			procedimento: "Dexametasona"
		},
		{
			codigo: 40321053,
			procedimento: "Dióxido de carbono, dosagem"
		},
		{
			codigo: 40321061,
			procedimento: "Dosagem de cafeína"
		},
		{
			codigo: 40321070,
			procedimento: "Dosagem de cortisona"
		},
		{
			codigo: 40321088,
			procedimento: "Dosagem de eletrólitos (sol. diálise)"
		},
		{
			codigo: 40321096,
			procedimento: "Dosagem de ferro em tecido hepático"
		},
		{
			codigo: 40321100,
			procedimento: "Dosagem de metilfenidato"
		},
		{
			codigo: 40321118,
			procedimento: "Dosagem de mitotane"
		},
		{
			codigo: 40321126,
			procedimento: "Dosagem de pema, soro"
		},
		{
			codigo: 40321134,
			procedimento: "Drogas de abuso, triagem"
		},
		{
			codigo: 40321142,
			procedimento: "Efexor, dosagem"
		},
		{
			codigo: 40321152,
			procedimento: "Ehrlichia chaffeensis, sorologia para"
		},
		{
			codigo: 40321169,
			procedimento: "Estrôncio, dosagem"
		},
		{
			codigo: 40321177,
			procedimento: "Extase"
		},
		{
			codigo: 40321185,
			procedimento: "Fungos morfologia/bioquímica"
		},
		{
			codigo: 40321193,
			procedimento: "Haloperidol, dosagem"
		},
		{
			codigo: 40321207,
			procedimento: "Homocistina, pesquisa de"
		},
		{
			codigo: 40321215,
			procedimento: "Identificação de bactérias por método sorológico/bioquímico"
		},
		{
			codigo: 40321223,
			procedimento: "Imipenem, dosagem"
		},
		{
			codigo: 40321231,
			procedimento: "Índice de saturação de ferro"
		},
		{
			codigo: 40321240,
			procedimento: "Inibina A"
		},
		{
			codigo: 40321258,
			procedimento: "Inibina B, dosagem"
		},
		{
			codigo: 40321266,
			procedimento: "Interleucina 10"
		},
		{
			codigo: 40321274,
			procedimento: "Interleucina 1B"
		},
		{
			codigo: 40321282,
			procedimento: "Interleucina 6"
		},
		{
			codigo: 40321290,
			procedimento: "Isoenzimas de CPK"
		},
		{
			codigo: 40321304,
			procedimento: "Isotretinoina, dosagem"
		},
		{
			codigo: 40321312,
			procedimento: "Itraconazol"
		},
		{
			codigo: 40321320,
			procedimento: "Ketamina, dosagem soro"
		},
		{
			codigo: 40321339,
			procedimento: "Kunkel (sulfato de zinco), reação de"
		},
		{
			codigo: 40321347,
			procedimento: "Levetiracetam, dosagem"
		},
		{
			codigo: 40321355,
			procedimento: "Lindane, dosagem"
		},
		{
			codigo: 40321363,
			procedimento: "Maconha, dosagem soro"
		},
		{
			codigo: 40321371,
			procedimento: "Macroamilase"
		},
		{
			codigo: 40321380,
			procedimento: "Marcadores cardíacos diagnósticos"
		},
		{
			codigo: 40321398,
			procedimento: "Metanefrinas plasmáticas"
		},
		{
			codigo: 40321401,
			procedimento: "Morfina (sangue)"
		},
		{
			codigo: 40321410,
			procedimento: "Neurontin"
		},
		{
			codigo: 40321428,
			procedimento: "Nicotina qualitativa urina (amostra isolada)"
		},
		{
			codigo: 40321436,
			procedimento: "Nifedipina, dosagem"
		},
		{
			codigo: 40321444,
			procedimento: "Opiáceos quantitativo (urina)"
		},
		{
			codigo: 40321452,
			procedimento: "Painel qualitativo para diurético (urina)"
		},
		{
			codigo: 40321460,
			procedimento: "Paroxetina, dosagem"
		},
		{
			codigo: 40321479,
			procedimento: "Penicilina, dosagem"
		},
		{
			codigo: 40321487,
			procedimento: "Pesquisa de nitritos"
		},
		{
			codigo: 40321495,
			procedimento: "Polipeptídeo pancreático"
		},
		{
			codigo: 40321509,
			procedimento: "Porfirinas fracionadas plasmáticas"
		},
		{
			codigo: 40321517,
			procedimento: "Prozac, dosagem (sangue)"
		},
		{
			codigo: 40321525,
			procedimento: "Reserpina, dosagem"
		},
		{
			codigo: 40321533,
			procedimento: "Resistência a proteína C ativada"
		},
		{
			codigo: 40321541,
			procedimento: "Respiridona, dosagem"
		},
		{
			codigo: 40321550,
			procedimento: "Serotonina (sangue)"
		},
		{
			codigo: 40321568,
			procedimento: "Sirolimus, dosagem"
		},
		{
			codigo: 40321576,
			procedimento: "Somatostatina"
		},
		{
			codigo: 40321584,
			procedimento: "Substância P, dosagem"
		},
		{
			codigo: 40321592,
			procedimento: "Tioridazina, dosagem"
		},
		{
			codigo: 40321606,
			procedimento: "Titânio, dosagem"
		},
		{
			codigo: 40321614,
			procedimento: "Topiramato, dosagem (sangue)"
		},
		{
			codigo: 40321622,
			procedimento: "Toxina botulinica, pesquisa (alimentos)"
		},
		{
			codigo: 40321630,
			procedimento: "Toxina botulinica, pesquisa (sangue)"
		},
		{
			codigo: 40321649,
			procedimento: "Toxina butoliníca A, anticorpo"
		},
		{
			codigo: 40321657,
			procedimento: "Trifluoperazina, dosagem soro"
		},
		{
			codigo: 40321665,
			procedimento: "Triptase, dosagem"
		},
		{
			codigo: 40321673,
			procedimento: "Vanádio, dosagem"
		},
		{
			codigo: 40321681,
			procedimento: "Vigabatrina, dosagem"
		},
		{
			codigo: 40321690,
			procedimento: "Cefalexina dosagem"
		},
		{
			codigo: 40321703,
			procedimento: "Ceftriaxona dosagem"
		},
		{
			codigo: 40321711,
			procedimento: "Clindamicina, dosagem"
		},
		{
			codigo: 40321720,
			procedimento: "Clobazam dosagem"
		},
		{
			codigo: 40321738,
			procedimento: "Clonazepan, dosagem"
		},
		{
			codigo: 40321746,
			procedimento: "Clorpromazina, dosagem"
		},
		{
			codigo: 40321754,
			procedimento: "Clozapina, dosagem"
		},
		{
			codigo: 40321762,
			procedimento: "Colinesterase com inibição de Dibucaina"
		},
		{
			codigo: 40321770,
			procedimento: "Disopiramida, dosagem"
		},
		{
			codigo: 40321789,
			procedimento: "Dissulfiram, dosagem"
		},
		{
			codigo: 40321797,
			procedimento: "Doxepina, dosagem"
		},
		{
			codigo: 40321800,
			procedimento: "Flunitrazepam, dosagem"
		},
		{
			codigo: 40321819,
			procedimento: "Fluoxetina, dosagem"
		},
		{
			codigo: 40321827,
			procedimento: "Galactocerebrosidase, dosagem"
		},
		{
			codigo: 40321835,
			procedimento: "Heroína, dosagem"
		},
		{
			codigo: 40321843,
			procedimento: "Heroína, dosagem, cabelo"
		},
		{
			codigo: 40321851,
			procedimento: "Interleucina 4, dosagem"
		},
		{
			codigo: 40321860,
			procedimento: "Interleucina 8, dosagem"
		},
		{
			codigo: 40321878,
			procedimento: "Iodo, dosagem na urina"
		},
		{
			codigo: 40321886,
			procedimento: "Isopropanol, sangue total"
		},
		{
			codigo: 40321894,
			procedimento: "Lioresal, dosagem"
		},
		{
			codigo: 40321908,
			procedimento: "Isopropanol, urina"
		},
		{
			codigo: 40321916,
			procedimento: "Lorazepam, dosagem"
		},
		{
			codigo: 40321924,
			procedimento: "LSD, dosagem"
		},
		{
			codigo: 40321932,
			procedimento: "LSD, dosagem cabelo"
		},
		{
			codigo: 40321940,
			procedimento: "Macrocreatinoquinase, pesquisa"
		},
		{
			codigo: 40321959,
			procedimento: "Manganes eritrocitário, dosagem"
		},
		{
			codigo: 40321967,
			procedimento: "Manganes sérico, dosagem"
		},
		{
			codigo: 40321975,
			procedimento: "Maprotilina, dosagem"
		},
		{
			codigo: 40321983,
			procedimento: "Midazolam, dosagem"
		},
		{
			codigo: 40321991,
			procedimento: "Opiaceos, detecção"
		},
		{
			codigo: 40322017,
			procedimento: "Opiaceos, detecção no cabelo"
		},
		{
			codigo: 40322025,
			procedimento: "Pirimetamina, dosagem"
		},
		{
			codigo: 40322033,
			procedimento: "Serotonina, dosagem urinária"
		},
		{
			codigo: 40322041,
			procedimento: "Sulfadiazina, dosagem"
		},
		{
			codigo: 40322050,
			procedimento: "Sulfametoxazol, dosagem"
		},
		{
			codigo: 40322068,
			procedimento: "Sulfapiridina, dosagem"
		},
		{
			codigo: 40322076,
			procedimento: "Sulfisoxazol, dosagem"
		},
		{
			codigo: 40322084,
			procedimento: "Swelling test"
		},
		{
			codigo: 40322092,
			procedimento: "Tetrahidrocanabinol (maconha), dosagem"
		},
		{
			codigo: 40322106,
			procedimento: "Tetrahidrocanabinol (maconha), dosagem, cabelo"
		},
		{
			codigo: 40322114,
			procedimento: "Vancomicina, dosagem"
		},
		{
			codigo: 40322122,
			procedimento: "Vitamina H (Biotina), dosagem"
		},
		{
			codigo: 40322130,
			procedimento: "Zolpidem, dosagem"
		},
		{
			codigo: 40322149,
			procedimento: "Ácido 2 Tio-Tiazolidina 4 carboxílico"
		},
		{
			codigo: 40322157,
			procedimento: "Ácido fitânico"
		},
		{
			codigo: 40322165,
			procedimento: "Ácido hialuronico"
		},
		{
			codigo: 40322173,
			procedimento: "Iduronato-2 sulfatase, dosagem"
		},
		{
			codigo: 40322181,
			procedimento: "N-Acetilgalactosaminidase, dosagem"
		},
		{
			codigo: 40322190,
			procedimento: "N-Acetilglicosaminidase, dosagem"
		},
		{
			codigo: 40322203,
			procedimento: "Neopterina, dosagem"
		},
		{
			codigo: 40322211,
			procedimento: "N-Metil formamida, dosagem"
		},
		{
			codigo: 40322220,
			procedimento: "Pentaclorofenol, dosagem"
		},
		{
			codigo: 40322238,
			procedimento: "Piretróides inseticidas, dosagem"
		},
		{
			codigo: 40322246,
			procedimento: "Receptor solúvel de transferrina"
		},
		{
			codigo: 40322254,
			procedimento: "Superoxido dismutase, dosagem"
		},
		{
			codigo: 40322262,
			procedimento: "Vitamina B5 (Pantofenato), dosagem"
		},
		{
			codigo: 40322270,
			procedimento: "Ácido cítrico (Citrato), dosagem sangue"
		},
		{
			codigo: 40322289,
			procedimento: "Ácido cítrico (Citrato), dosagem esperma"
		},
		{
			codigo: 40322297,
			procedimento: "Creatina eritrocitária"
		},
		{
			codigo: 40322300,
			procedimento: "Curva glicêmica clássica (5 dosagens)"
		},
		{
			codigo: 40322319,
			procedimento: "Everolimus, dosagem"
		},
		{
			codigo: 40322327,
			procedimento: "Radicais livre no soro"
		},
		{
			codigo: 40322335,
			procedimento: "Radicais livre na urina"
		},
		{
			codigo: 40322343,
			procedimento: "Teste de absorção de triglicérides (sobrecarga)"
		},
		{
			codigo: 40322351,
			procedimento: "10,11 Epóxido carbamazepinam, soro"
		},
		{
			codigo: 40322360,
			procedimento: "Alfa fetoproteína L3, líquor"
		},
		{
			codigo: 40322378,
			procedimento: "Albumina, líquor"
		},
		{
			codigo: 40322386,
			procedimento: "Alfa-galactosidade, dosagem plásmatica"
		},
		{
			codigo: 40322394,
			procedimento: "Alfa L-iduronase, plasma"
		},
		{
			codigo: 40322408,
			procedimento: "Bicarbonato na urina, amostra isolada"
		},
		{
			codigo: 40322416,
			procedimento: "Carnitina, dosagem"
		},
		{
			codigo: 40322424,
			procedimento: "Cistatina C, dosagem no sangue"
		},
		{
			codigo: 40322432,
			procedimento: "Cobre eritrocitário, dosagem"
		},
		{
			codigo: 40322440,
			procedimento: "Cocaína, dosagem, sangue total"
		},
		{
			codigo: 40322459,
			procedimento: "Colesterol LDL peroxidada"
		},
		{
			codigo: 40322467,
			procedimento: "Índice de ácido úrico/creatinina"
		},
		{
			codigo: 40322475,
			procedimento: "Índice de cálcio/creatinina"
		},
		{
			codigo: 40322483,
			procedimento: "Índice de proteína/creatinina"
		},
		{
			codigo: 40322491,
			procedimento: "Tripsina, dosagem"
		},
		{
			codigo: 40322505,
			procedimento: "Zinco eritrocitário, dosagem"
		},
		{
			codigo: 40322513,
			procedimento: "Transcobalamina, dosagem"
		},
		{
			codigo: 40322521,
			procedimento: "Acetoacetato, dosagem"
		},
		{
			codigo: 40322530,
			procedimento: "Biperideno, dosagem"
		},
		{
			codigo: 40322548,
			procedimento: "Catalase eritrocitária"
		},
		{
			codigo: 40322556,
			procedimento: "1,3-Beta-D-Glucan, soro"
		},
		{
			codigo: 40322564,
			procedimento: "Amiloidose - TTR"
		},
		{
			codigo: 40323013,
			procedimento: "Anticorpos GQ1B - IgG"
		},
		{
			codigo: 40323021,
			procedimento: "Anticorpos Hama"
		},
		{
			codigo: 40323030,
			procedimento: "Acetilcolina, anticorpos ligador receptor"
		},
		{
			codigo: 40323048,
			procedimento: "Acetilcolina, anticorpos modulador receptor"
		},
		{
			codigo: 40323056,
			procedimento: "Anticorpos neutralizado do interferon"
		},
		{
			codigo: 40323064,
			procedimento: "Anticorpos PLA-2, soro"
		},
		{
			codigo: 40323080,
			procedimento: "Anticorpos protombina - IgG/IgM"
		},
		{
			codigo: 40323099,
			procedimento: "Anticorpos vírus Herpes  8"
		},
		{
			codigo: 40323102,
			procedimento: "Antigenemia para citomegalovirus"
		},
		{
			codigo: 40323110,
			procedimento: "Antígenos de aspergillus galactomannan"
		},
		{
			codigo: 40323129,
			procedimento: "Antígenos inalatórios anticorpos"
		},
		{
			codigo: 40323137,
			procedimento: "Antígenos proteinas S"
		},
		{
			codigo: 40323145,
			procedimento: "BTA qualitatitvo na urina (amostra isolada)"
		},
		{
			codigo: 40323153,
			procedimento: "C4d fragmento"
		},
		{
			codigo: 40323161,
			procedimento: "C6 complemento"
		},
		{
			codigo: 40323170,
			procedimento: "C7 complemento"
		},
		{
			codigo: 40323188,
			procedimento: "C8 complemento"
		},
		{
			codigo: 40323196,
			procedimento: "C9 complemento"
		},
		{
			codigo: 40323200,
			procedimento: "Campylobacter, sorologia"
		},
		{
			codigo: 40323218,
			procedimento: "Cisticercose Western Blot"
		},
		{
			codigo: 40323226,
			procedimento: "Coclea autoac(s), soro"
		},
		{
			codigo: 40323234,
			procedimento: "Coxsackie A,"
		},
		{
			codigo: 40323242,
			procedimento: "Detecção antígeno histoplasma (urina)"
		},
		{
			codigo: 40323250,
			procedimento: "Detecção de CMV para RNA nasba"
		},
		{
			codigo: 40323269,
			procedimento: "Detecção de enterovirus no líquor"
		},
		{
			codigo: 40323277,
			procedimento: "Detecção de Niemann Pick tipo Cc"
		},
		{
			codigo: 40323285,
			procedimento: "Detecção/tipagem herpes vírus 1/2 líquor"
		},
		{
			codigo: 40323293,
			procedimento: "Difteria, sorologia"
		},
		{
			codigo: 40323307,
			procedimento: "Entamoeba histolytica, pesquisa (abscesso hepático)"
		},
		{
			codigo: 40323315,
			procedimento: "Epstein BARR antígeno nuclear - IgM"
		},
		{
			codigo: 40323323,
			procedimento: "Esquisocitos, pesquisa de"
		},
		{
			codigo: 40323331,
			procedimento: "Febre amarela, sorologia"
		},
		{
			codigo: 40323340,
			procedimento: "Febre do mediterrâneo"
		},
		{
			codigo: 40323358,
			procedimento: "Fenotiazinas qualitativas urina"
		},
		{
			codigo: 40323366,
			procedimento: "Fenotipagem virtual para HIV"
		},
		{
			codigo: 40323374,
			procedimento: "Fosfatidil glicerol - IgG/IgM/IgA"
		},
		{
			codigo: 40323382,
			procedimento: "Fosfatidiletanolamina - IgG/IgM/IgA"
		},
		{
			codigo: 40323390,
			procedimento: "Ghrelin"
		},
		{
			codigo: 40323404,
			procedimento: "Hepatite E - IgM/IgG"
		},
		{
			codigo: 40323412,
			procedimento: "Heptimax, dosagem"
		},
		{
			codigo: 40323420,
			procedimento: "Herpes vírus 7 - IgG/IgM"
		},
		{
			codigo: 40323439,
			procedimento: "Herpes vírus, citologia (pesquisa de células herpet) ou IFD"
		},
		{
			codigo: 40323447,
			procedimento: "Hipersensibilidade pneumonite triagem"
		},
		{
			codigo: 40323455,
			procedimento: "Histoplasma, pesquisa de"
		},
		{
			codigo: 40323463,
			procedimento: "HIV amplificação do DNA (PCR)"
		},
		{
			codigo: 40323471,
			procedimento: "HLA locus C"
		},
		{
			codigo: 40323480,
			procedimento: "Imunofenotipagem T e B"
		},
		{
			codigo: 40323498,
			procedimento: "Isoprostano"
		},
		{
			codigo: 40323501,
			procedimento: "Kleihauer"
		},
		{
			codigo: 40323510,
			procedimento: "Lyme para Western Blot"
		},
		{
			codigo: 40323528,
			procedimento: "Mata autoanticorpo"
		},
		{
			codigo: 40323536,
			procedimento: "Neisseria meningitidis IgG resp vacinal"
		},
		{
			codigo: 40323544,
			procedimento: "Neuromielite óptica (Devic)"
		},
		{
			codigo: 40323552,
			procedimento: "Neuropatia motora, painel"
		},
		{
			codigo: 40323560,
			procedimento: "Painel para meningoencefalite (líquor)"
		},
		{
			codigo: 40323579,
			procedimento: "Perfil para anticorpos anti gangliosídeo"
		},
		{
			codigo: 40323587,
			procedimento: "Pesquisa antígeno da legionella"
		},
		{
			codigo: 40323595,
			procedimento: "Pesquisa de adenovirus"
		},
		{
			codigo: 40323609,
			procedimento: "Pesquisa de antígenos de giardia lamblia"
		},
		{
			codigo: 40323617,
			procedimento: "Pesquisa de células Tzanck"
		},
		{
			codigo: 40323625,
			procedimento: "Pesquisa de influenza A e B por imunofluorescência"
		},
		{
			codigo: 40323633,
			procedimento: "Pesquisa de mutação pré-core vírus hepatite B"
		},
		{
			codigo: 40323641,
			procedimento: "Pesquisa direta anticorpos anti plaqueta - IgG"
		},
		{
			codigo: 40323650,
			procedimento: "Pesquisa para Gardnerella"
		},
		{
			codigo: 40323668,
			procedimento: "Pesquisa para haemophilus ducreyi"
		},
		{
			codigo: 40323676,
			procedimento: "Pesquisa rápida para influenza A e B"
		},
		{
			codigo: 40323684,
			procedimento: "Pesquisa rápida para vírus sincicial respiratório"
		},
		{
			codigo: 40323692,
			procedimento: "Plaquetas induzidas por heparina anticorpo"
		},
		{
			codigo: 40323706,
			procedimento: "Proteína C antígeno"
		},
		{
			codigo: 40323714,
			procedimento: "Proteína ligadora fração C4 complemento"
		},
		{
			codigo: 40323722,
			procedimento: "Proteína para ribossomal anticorpo soro"
		},
		{
			codigo: 40323730,
			procedimento: "Reatividade contra painel de linfócitos"
		},
		{
			codigo: 40323749,
			procedimento: "Receptor de interleucina 2"
		},
		{
			codigo: 40323757,
			procedimento: "Rubéola, IHA para"
		},
		{
			codigo: 40323765,
			procedimento: "Screening para anticorpos anti HLA"
		},
		{
			codigo: 40323773,
			procedimento: "Sorologia para Babesia microti"
		},
		{
			codigo: 40323781,
			procedimento: "Sorologia para febre da montanha rochosa"
		},
		{
			codigo: 40323790,
			procedimento: "Sub-classes de IgA"
		},
		{
			codigo: 40323803,
			procedimento: "T3 autoanticorpo"
		},
		{
			codigo: 40323811,
			procedimento: "T4 autoanticorpo"
		},
		{
			codigo: 40323820,
			procedimento: "Tetano, sorologia para"
		},
		{
			codigo: 40323838,
			procedimento: "TMA qualitativo para hepatite C"
		},
		{
			codigo: 40323846,
			procedimento: "Tularemia, anti"
		},
		{
			codigo: 40323854,
			procedimento: "Unidades avançadas - triagem HCG"
		},
		{
			codigo: 40323862,
			procedimento: "Vírus respiratório, pesquisa rápida"
		},
		{
			codigo: 40323870,
			procedimento: "West Nile sorologia líquor LCR"
		},
		{
			codigo: 40323889,
			procedimento: "ZAP-70"
		},
		{
			codigo: 40323897,
			procedimento: "Anticorpos antidifteria"
		},
		{
			codigo: 40323900,
			procedimento: "Anticorpos antitétano"
		},
		{
			codigo: 40323919,
			procedimento: "Teste rápido para detecção de HIV em gestante"
		},
		{
			codigo: 40323927,
			procedimento: "Filagrina, anticorpos IgG"
		},
		{
			codigo: 40323935,
			procedimento: "Bartonella, anticorpos IgG"
		},
		{
			codigo: 40323943,
			procedimento: "Bartonella, anticorpos IgM"
		},
		{
			codigo: 40323951,
			procedimento: "Borrelia burgdorferi em líquor, anticorpos IgG"
		},
		{
			codigo: 40323960,
			procedimento: "Borrelia burgdorferi em líquor, anticorpos IgM"
		},
		{
			codigo: 40323978,
			procedimento: "Cadeias leves livres Kappa/Lambda em urina, dosagem"
		},
		{
			codigo: 40323986,
			procedimento: "Calprotectina, detecção nas fezes"
		},
		{
			codigo: 40323994,
			procedimento: "Contraimunoeletroforese"
		},
		{
			codigo: 40324010,
			procedimento: "Bordetella pertussis (Coqueluche) anticorpos IgG"
		},
		{
			codigo: 40324028,
			procedimento: "Coxiella burnetti (febre Q), anticorpos IgG"
		},
		{
			codigo: 40324036,
			procedimento: "Coxiella burnetti (febre Q), anticorpos IgM"
		},
		{
			codigo: 40324044,
			procedimento: "Coxsackie A9, anticorpos IgM"
		},
		{
			codigo: 40324052,
			procedimento: "Coxsackie B1-6, anticorpos IgM"
		},
		{
			codigo: 40324060,
			procedimento: "Epstein BARR vírus antígeno precoce, anticorpos"
		},
		{
			codigo: 40324079,
			procedimento: "HIV1/2, anticorpos (teste rápido)"
		},
		{
			codigo: 40324087,
			procedimento: "Imunoglobulina M, dosagem no líquor"
		},
		{
			codigo: 40324095,
			procedimento: "LKM, pesquisa de anticorpos por Western Blot"
		},
		{
			codigo: 40324109,
			procedimento: "Norovirus, pesquisa"
		},
		{
			codigo: 40324117,
			procedimento: "Profilagrina, anticorpos IgG"
		},
		{
			codigo: 40324125,
			procedimento: "Proteinase 3, anticorpo"
		},
		{
			codigo: 40324133,
			procedimento: "Quantiferon tb gold test"
		},
		{
			codigo: 40324141,
			procedimento: "SP 100/PML, anticorpo IgG"
		},
		{
			codigo: 40324150,
			procedimento: "Neuronal nuclear IgG, anticorpos, soro"
		},
		{
			codigo: 40324168,
			procedimento: "Complemento C1 R, pesquisa e/ou dosagem"
		},
		{
			codigo: 40324176,
			procedimento: "Chikungunya, anticorpos"
		},
		{
			codigo: 40324184,
			procedimento: "Gangliosídeo 4, anticorpos"
		},
		{
			codigo: 40324192,
			procedimento: "Antígeno NS1 do vírus da dengue, pesquisa"
		},
		{
			codigo: 40324206,
			procedimento: "Antígenos de histocompatibilidade (séries A ou B)"
		},
		{
			codigo: 40324214,
			procedimento: "Anticorpos contra canal de potássio regulado por voltagem"
		},
		{
			codigo: 40324222,
			procedimento: "Fosfatidilserina, anticorpos IgG"
		},
		{
			codigo: 40324230,
			procedimento: "Fosfatidilserina, anticorpos IgM"
		},
		{
			codigo: 40324249,
			procedimento: "Fosfatidilserina, anticorpos IgA"
		},
		{
			codigo: 40324257,
			procedimento: "HU (anti neurônio), anticorpos"
		},
		{
			codigo: 40324265,
			procedimento: "Cadeias leves livres Kappa/Lambda, dosagem, sangue"
		},
		{
			codigo: 40324273,
			procedimento: "Cadeias leves livres Kappa/Lambda, dosagem, líquor"
		},
		{
			codigo: 40324281,
			procedimento: "Cadeias leves livres Kappa/Lambda, dosagem, urina"
		},
		{
			codigo: 40324290,
			procedimento: "Chlamydia pneumoniae, anticorpos, IgA"
		},
		{
			codigo: 40324303,
			procedimento: "CTX interligadores C terminais"
		},
		{
			codigo: 40324311,
			procedimento: "Profilagrina, anticorpos, soro"
		},
		{
			codigo: 40324320,
			procedimento: "Filagrina, anticorpos, soro"
		},
		{
			codigo: 40324338,
			procedimento: "Glicoproteína Beta 2, anticorpos, IgG"
		},
		{
			codigo: 40324346,
			procedimento: "Glicoproteína Beta 2, anticorpos, IgM"
		},
		{
			codigo: 40324354,
			procedimento: "Glicoproteína Beta 2, anticorpos, IgA"
		},
		{
			codigo: 40324362,
			procedimento: "Hepatite E - anticorpos IgG"
		},
		{
			codigo: 40324370,
			procedimento: "Hepatite E - anticorpos, IgM"
		},
		{
			codigo: 40324389,
			procedimento: "HLA-DQ, teste de histocompatibilidade de alta resolução, sangue total"
		},
		{
			codigo: 40324397,
			procedimento: "Imunoglobulina G, líquor"
		},
		{
			codigo: 40324400,
			procedimento: "Mitocôndria, pesquisa de anticorpos por Western Blot, soro"
		},
		{
			codigo: 40324419,
			procedimento: "Saccharomyces cerevisiae (ASCA), anticorpos, IgA"
		},
		{
			codigo: 40324427,
			procedimento: "Saccharomyces cerevisiae (ASCA), anticorpos, IgG"
		},
		{
			codigo: 40324435,
			procedimento: "Receptor insulina, anticorpos"
		},
		{
			codigo: 40324443,
			procedimento: "Rotavírus, anticorpos"
		},
		{
			codigo: 40324451,
			procedimento: "Antígeno HTLV III (HIV), EIE"
		},
		{
			codigo: 40324460,
			procedimento: "Estreptococus A, sorologia"
		},
		{
			codigo: 40324478,
			procedimento: "Imunoglobulina A, dosagem no líquor"
		},
		{
			codigo: 40324486,
			procedimento: "Trichinella Spiralis, anticorpos"
		},
		{
			codigo: 40324494,
			procedimento: "RNA Polimerase III, anticorpos"
		},
		{
			codigo: 40324508,
			procedimento: "Mycobacterium Tuberculosis, IgM, anticorpos"
		},
		{
			codigo: 40324516,
			procedimento: "Células Sesary, pesquisa"
		},
		{
			codigo: 40324524,
			procedimento: "Determinação de Apoptose"
		},
		{
			codigo: 40324532,
			procedimento: "Tiroxina Fostase (IA2), anticorpos"
		},
		{
			codigo: 40324559,
			procedimento: "Dengue, anticorpos IgG, soro (teste rápido)"
		},
		{
			codigo: 40324567,
			procedimento: "Dengue, anticorpos IgM, soro (teste rápido)"
		},
		{
			codigo: 40324575,
			procedimento: "Ehrlichia chaffeensis, sorologia para"
		},
		{
			codigo: 40324583,
			procedimento: "Toxina butoliníca A, anticorpo"
		},
		{
			codigo: 40324591,
			procedimento: "Vírus Zika - IgG"
		},
		{
			codigo: 40324605,
			procedimento: "Vírus Zika – IgM"
		},
		{
			codigo: 40324770,
			procedimento: "SARS-CoV-2 (Coronavírus COVID-19), pesquisa de anticorpos IgA, IgG ou IgM (cada par)"
		},
		{
			codigo: 40401014,
			procedimento: "Transfusão (ato médico ambulatorial ou hospitalar)"
		},
		{
			codigo: 40401022,
			procedimento: "Transfusão (ato médico de acompanhamento)"
		},
		{
			codigo: 40402010,
			procedimento: "Material descartável (kit) e soluções para utilização de processadora automática de sangue / auto transfusão intra-operatória"
		},
		{
			codigo: 40402029,
			procedimento: "Material descartável (kit) e soluções para utilização de processadora automática de sangue/aférese"
		},
		{
			codigo: 40402037,
			procedimento: "Sangria terapêutica"
		},
		{
			codigo: 40402045,
			procedimento: "Unidade de concentrado de hemácias"
		},
		{
			codigo: 40402053,
			procedimento: "Unidade de concentrado de hemácias lavadas"
		},
		{
			codigo: 40402061,
			procedimento: "Unidade de concentrado de plaquetas por aférese"
		},
		{
			codigo: 40402070,
			procedimento: "Unidade de concentrado de plaquetas randômicas"
		},
		{
			codigo: 40402088,
			procedimento: "Unidade de crioprecipitado de fator anti-hemofílico"
		},
		{
			codigo: 40402096,
			procedimento: "Unidade de plasma"
		},
		{
			codigo: 40402100,
			procedimento: "Unidade de sangue total"
		},
		{
			codigo: 40402118,
			procedimento: "Deleucotização de unidade de concentrado de hemácias - por unidade"
		},
		{
			codigo: 40402126,
			procedimento: "Deleucotização de unidade de concentrado de plaquetas - até 6 unidades"
		},
		{
			codigo: 40402134,
			procedimento: "Irradiação de componentes hemoterápicos"
		},
		{
			codigo: 40402142,
			procedimento: "Deleucotização de unidade de concentrado de plaquetas - entre 7 e 12 unidades"
		},
		{
			codigo: 40402150,
			procedimento: "Unidade de concentrado de granulócitos"
		},
		{
			codigo: 40402169,
			procedimento: "Unidade de concentrado de plaquetas (dupla centrifugação)"
		},
		{
			codigo: 40402177,
			procedimento: "Concentrado de hemácias CMV negativos"
		},
		{
			codigo: 40403017,
			procedimento: "Acompanhamento  hospitalar/dia  do  transplante   de  medula   óssea  por médico  hematologista  e/ou hemoterapeuta"
		},
		{
			codigo: 40403025,
			procedimento: "Anticorpos eritrocitários naturais e imunes - titulagem"
		},
		{
			codigo: 40403033,
			procedimento: "Aplicação de medula óssea ou células tronco"
		},
		{
			codigo: 40403041,
			procedimento: "Coleta de células tronco de sangue de cordão umbilical para transplante de medula óssea"
		},
		{
			codigo: 40403050,
			procedimento: "Coleta de células tronco por processadora automática para transplante de medula óssea"
		},
		{
			codigo: 40403068,
			procedimento: "Coleta de biópsia de medula óssea por agulha"
		},
		{
			codigo: 40403076,
			procedimento: "Coleta de medula óssea para transplante"
		},
		{
			codigo: 40403084,
			procedimento: "Determinação de células CD34, CD45 positivas - Citômetro de Fluxo"
		},
		{
			codigo: 40403092,
			procedimento: "Determinação de conteúdo de DNA - Citômetro de Fluxo"
		},
		{
			codigo: 40403106,
			procedimento: "Eletroforese de hemoglobina por componente hemoterápico"
		},
		{
			codigo: 40403114,
			procedimento: "Eletroforese de hemoglobina por unidade de sangue total"
		},
		{
			codigo: 40403122,
			procedimento: "Exsanguíneo  transfusão"
		},
		{
			codigo: 40403130,
			procedimento: "Fenotipagem de outros sistemas eritrocitários - por fenótipo"
		},
		{
			codigo: 40403149,
			procedimento: "Fenotipagem de outros sistemas eritrocitários - por fenótipo - gel teste"
		},
		{
			codigo: 40403157,
			procedimento: "Fenotipagem do sistema RH-HR (D, C, E, C E C) gel teste"
		},
		{
			codigo: 40403165,
			procedimento: "Fenotipagem do sistema RH-HR (D, C, E, C, E)"
		},
		{
			codigo: 40403173,
			procedimento: "Grupo sanguíneo ABO e RH - pesquisa"
		},
		{
			codigo: 40403181,
			procedimento: "Grupo sanguíneo ABO e RH - gel teste - pesquisa"
		},
		{
			codigo: 40403190,
			procedimento: "Identificação de anticorpos séricos irregulares antieritrocitários - método de eluição"
		},
		{
			codigo: 40403203,
			procedimento: "Identificação de anticorpos séricos irregulares antieritrocitários - painel de hemácias enzimático"
		},
		{
			codigo: 40403211,
			procedimento: "Identificação de anticorpos séricos irregulares antieritrocitários com painel de hemácias"
		},
		{
			codigo: 40403220,
			procedimento: "Identificação de anticorpos séricos irregulares antieritrocitários com painel de hemácias tratadas por enzimas"
		},
		{
			codigo: 40403238,
			procedimento: "Identificação de anticorpos séricos irregulares antieritrocitários com painel de hemácias - gel liss"
		},
		{
			codigo: 40403246,
			procedimento: "Imunofenotipagem de subpopulações linfocitárias - Citômetro de Fluxo"
		},
		{
			codigo: 40403254,
			procedimento: "Imunofenotipagem para classificação de leucemias - Citômetro de Fluxo"
		},
		{
			codigo: 40403262,
			procedimento: "NAT/HCV por componente hemoterápico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403270,
			procedimento: "NAT/HCV por unidade de sangue total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403289,
			procedimento: "NAT/HIV por componente hemoterápico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403297,
			procedimento: "NAT/HIV por unidade de sangue total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403300,
			procedimento: "Operação de processadora automática de sangue em aférese"
		},
		{
			codigo: 40403319,
			procedimento: "Operação de processadora automática de sangue em autotransfusão intra-operatória"
		},
		{
			codigo: 40403327,
			procedimento: "Pesquisa de anticorpos séricos antieritrocitários, anti-A e/ou anti-B - gel teste"
		},
		{
			codigo: 40403335,
			procedimento: "Pesquisa de anticorpos séricos antieritrocitários, anti-A e/ou anti-B"
		},
		{
			codigo: 40403343,
			procedimento: "Pesquisa de anticorpos séricos irregulares antieritrocitários"
		},
		{
			codigo: 40403351,
			procedimento: "Pesquisa de anticorpos séricos irregulares antieritrocitários - gel teste"
		},
		{
			codigo: 40403360,
			procedimento: "Pesquisa de anticorpos séricos irregulares antieritrocitários - método de eluição"
		},
		{
			codigo: 40403378,
			procedimento: "Pesquisa de anticorpos séricos irregulares antieritrocitários a frio"
		},
		{
			codigo: 40403386,
			procedimento: "Pesquisa de hemoglobina S por componente hemoterápico - gel teste"
		},
		{
			codigo: 40403394,
			procedimento: "Pesquisa de hemoglobina S por unidade de sangue total - gel teste"
		},
		{
			codigo: 40403408,
			procedimento: "Prova de compatibilidade pré-transfusional completa"
		},
		{
			codigo: 40403416,
			procedimento: "Prova de compatibilidade pré-transfusional completa - gel teste"
		},
		{
			codigo: 40403424,
			procedimento: "S. Anti-HTLV-I + HTLV-II (determinação conjunta) por componente hemoterápico"
		},
		{
			codigo: 40403432,
			procedimento: "S. Anti-HTLV-I + HTLV-II (determinação conjunta) por unidade de sangue total"
		},
		{
			codigo: 40403440,
			procedimento: "S. Chagas EIE por componente hemoterápico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403459,
			procedimento: "S. Chagas EIE por unidade de sangue total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403467,
			procedimento: "S. Hepatite B anti-HBC por componente hemoterápico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403475,
			procedimento: "S. Hepatite B anti-HBC por unidade de sangue total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403483,
			procedimento: "S. Hepatite C anti-HCV por componente hemoterápico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403491,
			procedimento: "S. Hepatite C anti-HCV por unidade de sangue total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403505,
			procedimento: "S. HIV EIE por componente hemoterápico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403513,
			procedimento: "S. HIV EIE por unidade de sangue total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403521,
			procedimento: "S. Malária IFI por componente hemoterápico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403530,
			procedimento: "S. Malária IFI por unidade de sangue total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403548,
			procedimento: "S. Sífilis EIE por componente hemoterápico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403556,
			procedimento: "S. Sífilis EIE por unidade de sangue total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403564,
			procedimento: "S. Sífilis FTA - ABS por componente hemoterápico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403572,
			procedimento: "S. Sífilis FTA - ABS por unidade de sangue total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403580,
			procedimento: "S. Sífilis HA por componente hemoterápico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403599,
			procedimento: "S. Sífilis HA por unidade de sangue total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403602,
			procedimento: "S. Sífilis VDRL por componente hemoterápico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403610,
			procedimento: "S. Sífilis VDRL por unidade de sangue total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403629,
			procedimento: "S. Chagas HA por componente hemoterápico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403637,
			procedimento: "S. Chagas HA por unidade de sangue total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403645,
			procedimento: "S. Chagas IFI por componente hemoterápico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403653,
			procedimento: "S. Chagas IFI por unidade de sangue total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403661,
			procedimento: "S. Hepatite B (HBsAg) RIE ou EIE por componente hemoterápico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403670,
			procedimento: "S. Hepatite B (HBsAg) RIE ou EIE por unidade de sangue total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403688,
			procedimento: "Teste de Coombs direto"
		},
		{
			codigo: 40403696,
			procedimento: "Teste de Coombs direto - gel teste"
		},
		{
			codigo: 40403700,
			procedimento: "Teste de Coombs direto - mono específico (IgG, IgA, C3, C3D, Poliv. - AGH) - gel teste"
		},
		{
			codigo: 40403718,
			procedimento: "Teste de Coombs indireto - mono específico (IgG, IgA, C3, C3D, Poliv. - AGH) - gel teste"
		},
		{
			codigo: 40403726,
			procedimento: "TMO - congelamento de medula óssea ou células tronco periféricas"
		},
		{
			codigo: 40403734,
			procedimento: "TMO - cultura de linfócitos doador e receptor"
		},
		{
			codigo: 40403742,
			procedimento: "TMO - descongelamento de medula óssea ou células tronco"
		},
		{
			codigo: 40403750,
			procedimento: "TMO - determinação de HLA   transplantes de medula óssea - loci DR e DQ (alta resolução)"
		},
		{
			codigo: 40403769,
			procedimento: "TMO - determinação de HLA para transplantes de medula óssea - loci A e B"
		},
		{
			codigo: 40403777,
			procedimento: "TMO - determinação de HLA para transplantes de medula óssea - loci DR e DQ (baixa resolução)"
		},
		{
			codigo: 40403785,
			procedimento: "TMO - determinação de unidades formadoras de colônias"
		},
		{
			codigo: 40403793,
			procedimento: "TMO - determinação de viabilidade de medula óssea"
		},
		{
			codigo: 40403807,
			procedimento: "TMO - manutenção de congelamento de medula óssea ou células tronco (até 2 anos)"
		},
		{
			codigo: 40403815,
			procedimento: "TMO - preparo de medula óssea ou células tronco periféricas para congelamento"
		},
		{
			codigo: 40403823,
			procedimento: "TMO - preparo e filtração de medula óssea ou células tronco na coleta"
		},
		{
			codigo: 40403831,
			procedimento: "TMO - tratamento \"in vitro\" de medula óssea ou células tronco por anticorpos monoclonais (purging)(4)"
		},
		{
			codigo: 40403840,
			procedimento: "Transaminase pirúvica - TGP ou ALT por componente hemoterápico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403858,
			procedimento: "Transaminase pirúvica - TGP ou ALT por unidade de sangue total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403866,
			procedimento: "Transfusão fetal intra-uterina"
		},
		{
			codigo: 40403874,
			procedimento: "Detecção de consumo de oxigênio  (O2) por unidade de concentrado de plaquetas (por unidade de concentrado de plaquetas de doador múltiplo)"
		},
		{
			codigo: 40403882,
			procedimento: "Detecção de consumo de oxigênio (O2) por unidade de concentrado de plaquetas (por unidade de concentrado de plaquetas por aférese)"
		},
		{
			codigo: 40403890,
			procedimento: "NAT/HBV - por componente hemoterápico - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403904,
			procedimento: "NAT/HBV - por unidade de sangue total - pesquisa e/ou dosagem"
		},
		{
			codigo: 40403912,
			procedimento: "Estimulação e mobilização de células CD34 positivas"
		},
		{
			codigo: 40403920,
			procedimento: "Determinação do fator RH (D), incluindo prova para D-fraco no sangue do receptor"
		},
		{
			codigo: 40403939,
			procedimento: "Doação autóloga com recuperação intra-operatória"
		},
		{
			codigo: 40403947,
			procedimento: "Doação autóloga peri-operatória por hemodiluição normovolêmica"
		},
		{
			codigo: 40403955,
			procedimento: "Doação autóloga pré-operatória"
		},
		{
			codigo: 40403963,
			procedimento: "Exames imunohematológicos em recém-nascidos: tipificação ABO e RH, pesquisa de D fraco RH(D) e prova da antiglobulina direta"
		},
		{
			codigo: 40403971,
			procedimento: "Imuno-hematológicos: tipificação ABO, incluindo tipagem reversa e determinação do fator RH (D), incluindo prova para D-fraco e pesquisa e identificação de anticorpos séricos irregulares antieritrocitários"
		},
		{
			codigo: 40403980,
			procedimento: "Investigação da presença de anti-A ou anti-B, em soro ou plasma de neonato, com métodos que incluam uma fase antiglobulínica"
		},
		{
			codigo: 40403998,
			procedimento: "Tipificação ABO, incluindo tipagem reversa no sangue do receptor (sem tipagem reversa até 4 meses de idade)"
		},
		{
			codigo: 40404013,
			procedimento: "TMO - prova cruzada para histocompatibilidade de transplante de medula óssea"
		},
		{
			codigo: 40404021,
			procedimento: "Aférese para paciente ABO incompatível"
		},
		{
			codigo: 40404030,
			procedimento: "Antigenemia para diagnóstico de CMV pós transplante"
		},
		{
			codigo: 40404048,
			procedimento: "Avaliação quimerismo - VNTR - doador - pré transplante"
		},
		{
			codigo: 40404056,
			procedimento: "Avaliação quimerismo - VNTR - paciente - pré transplante"
		},
		{
			codigo: 40404064,
			procedimento: "Avaliação quimerismo por STR - paciente - pós transplante"
		},
		{
			codigo: 40404072,
			procedimento: "Coleta de linfócitos de sangue periférico por aférese para tratamento de recidivas pós TCTH alogênico"
		},
		{
			codigo: 40404080,
			procedimento: "Controle microbiológico da medula óssea no TCTH alogênico"
		},
		{
			codigo: 40404099,
			procedimento: "Controle microbiológico das células tronco periféricas no TCTH alogênico"
		},
		{
			codigo: 40404102,
			procedimento: "Depleção de plasma em TCTH alogênicos com incompatibilidade ABO menor"
		},
		{
			codigo: 40404110,
			procedimento: "PCR em tempo real para diagnóstico de adenovírus"
		},
		{
			codigo: 40404129,
			procedimento: "PCR em tempo real para diagnóstico de EBV - pós transplante"
		},
		{
			codigo: 40404137,
			procedimento: "PCR em tempo real para diagnóstico de Herpes virus 6 - pos transplante"
		},
		{
			codigo: 40404145,
			procedimento: "PCR em tempo real para diagnóstico de Herpes virus 8 - pos transplante"
		},
		{
			codigo: 40404153,
			procedimento: "PCR em tempo real para os vírus para influenza e influenza"
		},
		{
			codigo: 40404161,
			procedimento: "PCR em tempo real para vírus respiratório sincicial"
		},
		{
			codigo: 40404170,
			procedimento: "Quantificação de CD14 da coleta de células tronco periféricas para TCTH alogênico"
		},
		{
			codigo: 40404188,
			procedimento: "Quantificação de CD19 da coleta de células tronco periféricas para TCTH alogênico"
		},
		{
			codigo: 40404196,
			procedimento: "Quantificação de CD3  da coleta de células tronco periféricas para TCTH alogênico"
		},
		{
			codigo: 40404200,
			procedimento: "Quantificação de CD3  da coleta de linfócitos para tratamento de recidivas pós TCTH alogênico"
		},
		{
			codigo: 40404218,
			procedimento: "Quantificação de CD4 da coleta de células tronco periféricas para TCTH alogênico"
		},
		{
			codigo: 40404226,
			procedimento: "Quantificação de CD8 da coleta de células tronco periféricas para TCTH alogênico"
		},
		{
			codigo: 40404234,
			procedimento: "Quantificação de leucócitos totais da coleta de células tronco periféricas para TCTH alogênico"
		},
		{
			codigo: 40404242,
			procedimento: "Quantificação de leucócitos totais da Medula Óssea no TCTH alogênico"
		},
		{
			codigo: 40404250,
			procedimento: "Sedimentação de hemácias em TCTH alogênicos com incompatibilidade ABO maior"
		},
		{
			codigo: 40404269,
			procedimento: "Viabilidade celular dos linfócitos periféricos por citometria de fluxo para tratamento das recidivas pós TCTH alogênico"
		},
		{
			codigo: 40404277,
			procedimento: "Viabilidade celular da medula óssea por citometria de fluxo após o descongelamento"
		},
		{
			codigo: 40404285,
			procedimento: "Viabilidade celular das células tronco periféricas por citometria de fluxo após o descongelamento"
		},
		{
			codigo: 40404293,
			procedimento: "Genotipagem Duffy_Gata"
		},
		{
			codigo: 40404307,
			procedimento: "Genotipagem Kell"
		},
		{
			codigo: 40404315,
			procedimento: "Genotipagem Kidd"
		},
		{
			codigo: 40404323,
			procedimento: "Genotipagem para zigosidade D"
		},
		{
			codigo: 40404331,
			procedimento: "Genotipagem RhD parcial"
		},
		{
			codigo: 40404340,
			procedimento: "Imunofluorescência direta de pele"
		},
		{
			codigo: 40404358,
			procedimento: "Descalcificação de tecido, anatomia patológica"
		},
		{
			codigo: 40404366,
			procedimento: "NAT teste de ácido nucleico HIV/HCV/HBV"
		},
		{
			codigo: 40404374,
			procedimento: "S. Anticorpo anti-CMV (IgG), por unidade de sangue total"
		},
		{
			codigo: 40404382,
			procedimento: "S. Anticorpo anti-CMV (IgM), por unidade de sangue total"
		},
		{
			codigo: 40404390,
			procedimento: "Concentrado de hemácias raras congeladas"
		},
		{
			codigo: 40404404,
			procedimento: "Fenotipagem do sistema RH-HR (D, C, E, C, E) e Kell"
		},
		{
			codigo: 40404412,
			procedimento: "Fotoférese"
		},
		{
			codigo: 40404420,
			procedimento: "Genotipagem completa plaquetária (HPA 1, 6 e 15)"
		},
		{
			codigo: 40404439,
			procedimento: "Genotipagem HPA por sistema"
		},
		{
			codigo: 40404447,
			procedimento: "Genotipagem RHD, Cc, Ec, Pse, K, Kid, Df, Gata"
		},
		{
			codigo: 40404455,
			procedimento: "Genotipagem RHD, Cc, Ee, Pseudogene"
		},
		{
			codigo: 40404463,
			procedimento: "Genotipagem RHD, Cc, Ee, Pseudogene, Kell"
		},
		{
			codigo: 40404471,
			procedimento: "Genotipagem Ss"
		},
		{
			codigo: 40404480,
			procedimento: "Granulócitos CMV negativos"
		},
		{
			codigo: 40404498,
			procedimento: "Pesquisa de hemolisina"
		},
		{
			codigo: 40404501,
			procedimento: "Pesquisa e identificação de anticorpos plaquetários (MAIPA)"
		},
		{
			codigo: 40404510,
			procedimento: "Plaquetaférese CMV negativos"
		},
		{
			codigo: 40404528,
			procedimento: "Plaquetaférese HLA compatível"
		},
		{
			codigo: 40404536,
			procedimento: "Prova de compatibilidade para transfusão de plaquetas (MAIPA)"
		},
		{
			codigo: 40404544,
			procedimento: "Técnicas de adsorção"
		},
		{
			codigo: 40501019,
			procedimento: "Cariótipo com bandas de pele, tumor e demais tecidos"
		},
		{
			codigo: 40501027,
			procedimento: "Cariótipo com pesquisa de troca de cromátides irmãs"
		},
		{
			codigo: 40501035,
			procedimento: "Cariótipo com técnicas de alta resolução"
		},
		{
			codigo: 40501043,
			procedimento: "Cariótipo de medula (técnicas com bandas)"
		},
		{
			codigo: 40501051,
			procedimento: "Cariótipo de sangue (técnicas com bandas)"
		},
		{
			codigo: 40501060,
			procedimento: "Cariótipo de sangue obtido por cordocentese pré-natal"
		},
		{
			codigo: 40501078,
			procedimento: "Cariótipo de sangue-pesquisa de marcadores tumorais"
		},
		{
			codigo: 40501086,
			procedimento: "Cariótipo de sangue-pesquisa de sítio frágil X"
		},
		{
			codigo: 40501094,
			procedimento: "Cariótipo em vilosidades coriônicas (cultivo de trofoblastos)"
		},
		{
			codigo: 40501108,
			procedimento: "Cariótipo para pesquisa de instabilidade cromossômica"
		},
		{
			codigo: 40501116,
			procedimento: "Cromatina X ou Y"
		},
		{
			codigo: 40501124,
			procedimento: "Cultura de material de aborto e obtenção de cariótipo"
		},
		{
			codigo: 40501132,
			procedimento: "Cultura de tecido para ensaio enzimático e/ou extração de DNA"
		},
		{
			codigo: 40501140,
			procedimento: "Diagnóstico genético pré-implantação por fish, por sonda"
		},
		{
			codigo: 40501159,
			procedimento: "Fish em metáfase ou núcleo interfásico, por sonda"
		},
		{
			codigo: 40501167,
			procedimento: "Fish pré-natal, por sonda"
		},
		{
			codigo: 40501175,
			procedimento: "Líquido amniótico, cariótipo com bandas"
		},
		{
			codigo: 40501183,
			procedimento: "Líquido amniótico, vilosidades coriônicas, subcultura para dosagens bioquímicas e/ou moleculares (adicional)"
		},
		{
			codigo: 40501191,
			procedimento: "Subcultura de pele para dosagens bioquímicas e/ou moleculares (adicional)"
		},
		{
			codigo: 40501205,
			procedimento: "Estudo de alterações cromossômicas em leucemias por FISH (Fluorescence In Situ Hybridization)"
		},
		{
			codigo: 40501213,
			procedimento: "Pesquisa de translocação PML/RAR-a"
		},
		{
			codigo: 40501221,
			procedimento: "Cariótipo de sangue (técnicas com bandas) - Análise de 50 células para detecção de mosaicismo"
		},
		{
			codigo: 40501230,
			procedimento: "Cultura de fibroblastos (pele)"
		},
		{
			codigo: 40501248,
			procedimento: "CITOGENÉTICA DE MEDULA ÓSSEA"
		},
		{
			codigo: 40501256,
			procedimento: "HER2 CISH para amplificação gênica em tumor de mama"
		},
		{
			codigo: 40501264,
			procedimento: "Translocação PML/RARA  t(15;17) FISH em medula óssea"
		},
		{
			codigo: 40501272,
			procedimento: "Translocação PML/RARA  t(15;17) FISH em sangue periférico"
		},
		{
			codigo: 40501280,
			procedimento: "Hibridização in situ pela prata ou cromogênica  (CISH) - Histoquímica"
		},
		{
			codigo: 40502015,
			procedimento: "Marcadores bioquímicos extras, além de BHCG, AFP e PAPP-A, para avaliação do risco fetal, por marcador, por amostra"
		},
		{
			codigo: 40502040,
			procedimento: "Baterias de testes químicos de triagem em urina para erros inatos do metabolismo (mínimo de seis testes)"
		},
		{
			codigo: 40502058,
			procedimento: "Determinação do risco fetal, com elaboração de laudo"
		},
		{
			codigo: 40502066,
			procedimento: "Dosagem quantitativa de ácidos orgânicos, carnitina, perfil de acilcarnitina, ácidos graxos de cadeia muito longa, para o diagnóstico de erros inatos do metabolismo (perfil em uma amostra)"
		},
		{
			codigo: 40502074,
			procedimento: "Dosagem quantitativa de aminoácidos para o diagnóstico de erros inatos do metabolismo (perfil de aminoácidos numa amostra)"
		},
		{
			codigo: 40502082,
			procedimento: "Dosagem quantitativa de metabólitos na urina e/ou sangue para o diagnóstico de erros inatos do metabolismo (cada)"
		},
		{
			codigo: 40502090,
			procedimento: "Eletroforese ou cromatografia (papel ou camada delgada) para identificação de aminoácidos ou glicídios ou oligossacarídios ou sialoligossacarídios glicosaminoglicanos ou outros compostos para detecção de erros inatos do metabolismo (cada)"
		},
		{
			codigo: 40502104,
			procedimento: "Ensaios enzimáticos em células cultivadas para diagnóstico de EIM, incluindo preparo do material, dosagem de proteína e enzima de referência (cada)"
		},
		{
			codigo: 40502112,
			procedimento: "Ensaios enzimáticos em leucócitos, eritrócitos ou tecidos para diagnóstico de EIM, incluindo preparo do material, dosagem de proteína e enzima de referência (cada)"
		},
		{
			codigo: 40502120,
			procedimento: "Ensaios enzimáticos no plasma para diagnóstico de EIM, incluindo enzima de referência (cada)"
		},
		{
			codigo: 40502139,
			procedimento: "Teste duplo - 1 trimestre (PAPP-A+Beta-HCG) ou outros 2 em soro ou líquido aminiótico com elaboração de laudo contendo cálculo de risco para anomalias fetais"
		},
		{
			codigo: 40502147,
			procedimento: "Teste duplo - 2 trimestre (AFP+Beta-HCG) ou outros 2 em soro ou líquido aminiótico com elaboração de laudo contendo cálculo de risco para anomalias fetais"
		},
		{
			codigo: 40502155,
			procedimento: "Teste triplo (AFP+Beta-HCG+Estriol) ou outros 3 em soro ou líquido aminiótico com elaboração de laudo contendo cálculo de risco para anomalias fetais"
		},
		{
			codigo: 40502163,
			procedimento: "Testes químicos de triagem em urina para erros inatos do metabolismo (cada)"
		},
		{
			codigo: 40502171,
			procedimento: "Dosagem quantitativa de carnitina e perfil de acilcarnitina, para o diagnóstico de erros inatos do metabolismo"
		},
		{
			codigo: 40502180,
			procedimento: "Dosagem quantitativa de ácidos graxos de cadeia muito longa  para o diagnóstico de EIM"
		},
		{
			codigo: 40502198,
			procedimento: "Dosagem quantitativa de metabólitos por cromatografia / espectrometria de massa  (CG/MS ou HPLC/MS ) para o diagnóstico de EIM"
		},
		{
			codigo: 40502201,
			procedimento: "Dosagem quantitativa de metabólitos por espectrometria de massa ou espectrometria de massa em TANDEM (MS OU MS/MS) para o diagnóstico de EIM"
		},
		{
			codigo: 40502210,
			procedimento: "Terapia de reposição enzimática por infusão endovenosa, por procedimento"
		},
		{
			codigo: 40502228,
			procedimento: "Rastreamento neonatal para o diagnósitco de EIM e outras doenças"
		},
		{
			codigo: 40502236,
			procedimento: "Dosagem quantitativa de ácidos orgânicos para o diagnóstico de erros inatos do metabolismo (perfil de ácidos orgânicos numa amostra)"
		},
		{
			codigo: 40502244,
			procedimento: "Defeitos congênitos da glicolização - Focalização isoelétrica da transferrina"
		},
		{
			codigo: 40503011,
			procedimento: "Análise de DNA com enzimas de restrição por enzima utilizada, por amostra"
		},
		{
			codigo: 40503020,
			procedimento: "Análise de DNA fetal por enzima de restrição, por enzima utilizada, por amostra (adicional nos exames em que já foi feito o PCR 4.05.03.06-2 e depende da enzima para estabelecer o diagnóstico)"
		},
		{
			codigo: 40503038,
			procedimento: "Análise de DNA fetal por sonda ou PCR por locus, por amostra"
		},
		{
			codigo: 40503046,
			procedimento: "Análise de DNA pela técnica multiplex por locus extra, por amostra"
		},
		{
			codigo: 40503054,
			procedimento: "Análise de DNA pela técnica multiplex por locus, por amostra"
		},
		{
			codigo: 40503062,
			procedimento: "Análise de DNA por sonda, ou PCR por locus, por amostra"
		},
		{
			codigo: 40503070,
			procedimento: "Diagnóstico genético pré-implantação por DNA, por sonda de FISH ou por primer de PCR, por amostra"
		},
		{
			codigo: 40503089,
			procedimento: "Extração de DNA (osso), por amostra"
		},
		{
			codigo: 40503097,
			procedimento: "Extração de DNA (sangue, urina, líquido aminiótico, vilo trofoblástico etc.), por amostra"
		},
		{
			codigo: 40503100,
			procedimento: "Identificação de mutação por sequenciamento do DNA, por 100 pares de base sequenciadas, por amostra"
		},
		{
			codigo: 40503119,
			procedimento: "Processamento de qualquer tipo de amostra biológica para estabilização do ácido nucléico, por amostra"
		},
		{
			codigo: 40503127,
			procedimento: "Extração, purificação e quantificação de ácido nucléico de qualquer tipo de amostra biológica, por amostra"
		},
		{
			codigo: 40503135,
			procedimento: "Transcrição reversa de RNA, por amostra"
		},
		{
			codigo: 40503143,
			procedimento: "Amplificação do material genético (por PCR, PCR em tempo Real, LCR, RT-PCR ou outras técnicas), por primer utilizado, por amostra"
		},
		{
			codigo: 40503151,
			procedimento: "Análise de DNA por MLPA, por sonda de DNA utilizada, por amostra"
		},
		{
			codigo: 40503160,
			procedimento: "Análise de DNA pela técnica de Southern Blot, por sonda utilizada, por amostra"
		},
		{
			codigo: 40503178,
			procedimento: "Produção de DOT/SLOT-BLOT, por BLOT, por amostra"
		},
		{
			codigo: 40503186,
			procedimento: "Separação do material genético por eletroforese capilar ou em gel (agarose, acrilamida), por gel utilizado, por amostra"
		},
		{
			codigo: 40503194,
			procedimento: "Rastreamento de exon mutado (por gradiente de desnaturação ou conformação de polimorfismo de fita simples ou RNAse ou Clivagem Química ou outras técnicas) para identificação de fragmento mutado, por fragmento analisado, por amostra"
		},
		{
			codigo: 40503208,
			procedimento: "Coloração de gel e Fotodocumentação da análise molecular, por amostra"
		},
		{
			codigo: 40503216,
			procedimento: "Interpretação e elaboração do laudo da análise genética, por amostra"
		},
		{
			codigo: 40503224,
			procedimento: "Análise de expressão gênica por locus, por amostra, por CGH array, SNP array ou outras técnicas"
		},
		{
			codigo: 40503232,
			procedimento: "Detecção pré-natal ou pós-natal de alterações cromossômicas submicroscópicas reconhecidamente causadoras de síndrome de genes contíguos, por FISH, qPCR ou outra técnica, por locus, por amostra"
		},
		{
			codigo: 40503240,
			procedimento: "Rastreamento pré-natal ou pós-natal de todo o genoma para  identificar alterações cromossômicas submicroscópicas por CGH-array ou SNP-array ou outras técnicas, por clone ou oligo utilizado, por amostra"
		},
		{
			codigo: 40503259,
			procedimento: "Validação pré-natal ou pós-natal de alteração cromossômica submicroscópica detectada no rastreamento genômico, por FISH ou qPCR ou outra técnica, por locus, por amostra"
		},
		{
			codigo: 40503267,
			procedimento: "Translocação AML1-ETO t(8,21) por PCR"
		},
		{
			codigo: 40503275,
			procedimento: "Análise da mutação IgVH-cadeia pesada da imunoglobulina"
		},
		{
			codigo: 40503283,
			procedimento: "CCR-5, pesquisa de mutação por PCR"
		},
		{
			codigo: 40503291,
			procedimento: "Citocromo P450 2C19 genotipagem"
		},
		{
			codigo: 40503305,
			procedimento: "Colinesterase, estudo genético"
		},
		{
			codigo: 40503310,
			procedimento: "Cromossomo Y, microdeleções por PCR"
		},
		{
			codigo: 40503313,
			procedimento: "Cromossomo Y, microdeleções por PCR"
		},
		{
			codigo: 40503321,
			procedimento: "Diabetes tipo MODY 2, teste genético"
		},
		{
			codigo: 40503330,
			procedimento: "Diabetes tipo MODY 3, teste genético"
		},
		{
			codigo: 40503348,
			procedimento: "Distrofia miotonica, análise por DNA"
		},
		{
			codigo: 40503356,
			procedimento: "Disautonomia familiar, análise por DNA"
		},
		{
			codigo: 40503364,
			procedimento: "Neurofibromatose tipo 1, estudo molecular"
		},
		{
			codigo: 40503372,
			procedimento: "JAK2 (gene), detecção das mutações por PCR"
		},
		{
			codigo: 40503380,
			procedimento: "CCND1 e IGH (genes), hibridização in situ por fluore"
		},
		{
			codigo: 40503399,
			procedimento: "Hemofilia A, análise do DNA"
		},
		{
			codigo: 40503402,
			procedimento: "Hemofilia B, análise do DNA"
		},
		{
			codigo: 40503410,
			procedimento: "Hipolactasia, análise molecular"
		},
		{
			codigo: 40503429,
			procedimento: "Hormônio de crescimento, estudo do gene receptor"
		},
		{
			codigo: 40503437,
			procedimento: "Hormônio de crescimento, estudo molecular do gene"
		},
		{
			codigo: 40503445,
			procedimento: "Neoplasia endócrina múltipla, tipo 1, sangue total"
		},
		{
			codigo: 40503453,
			procedimento: "Hemocromatose, análise por PCR"
		},
		{
			codigo: 40503461,
			procedimento: "Prader-Willi/Angelman, síndrome, diagnóstico"
		},
		{
			codigo: 40503470,
			procedimento: "PROP1, estudo molecular do gene, sangue total"
		},
		{
			codigo: 40503488,
			procedimento: "PTPN11, estudo molecular do gene, sangue total"
		},
		{
			codigo: 40503496,
			procedimento: "Rearranjo 8q24 fish (medula óssea)"
		},
		{
			codigo: 40503500,
			procedimento: "Rearranjo 8q24 fish (sangue)"
		},
		{
			codigo: 40503518,
			procedimento: "Rearranjo BCL6 3q27 (NHL) fish"
		},
		{
			codigo: 40503526,
			procedimento: "Rearranjo gênico células B por PCR"
		},
		{
			codigo: 40503534,
			procedimento: "Rearranjo gênico células T por PCR"
		},
		{
			codigo: 40503542,
			procedimento: "Rearranjo gênico quantitativo BCR/ABL por PCR"
		},
		{
			codigo: 40503550,
			procedimento: "Receptor 4 do melanocorticotropina, estudo molecular do gene"
		},
		{
			codigo: 40503569,
			procedimento: "Sensibilidade genética a Warfarina padrão"
		},
		{
			codigo: 40503577,
			procedimento: "SHOX, estudo molecular do gene, sangue total"
		},
		{
			codigo: 40503585,
			procedimento: "Translocação 4;14 fish (IgH/FGFR3)"
		},
		{
			codigo: 40503593,
			procedimento: "C kit análise mutacional"
		},
		{
			codigo: 40503607,
			procedimento: "CYP21, estudo molecular do gene, sangue"
		},
		{
			codigo: 40503615,
			procedimento: "Detecção de Del/Dupl no gene MLH1 MSH2"
		},
		{
			codigo: 40503623,
			procedimento: "Detecção de mutações no gene MLH1 MSH2"
		},
		{
			codigo: 40503631,
			procedimento: "Detecção de mutações no gene MSH6"
		},
		{
			codigo: 40503640,
			procedimento: "FLT3 pesquisa de mutações por PCR (cada)"
		},
		{
			codigo: 40503658,
			procedimento: "Atrofia muscular e bulbar (Kennedy), por PCR"
		},
		{
			codigo: 40503666,
			procedimento: "MPL W515 e MPL S505 análise mutacional"
		},
		{
			codigo: 40503674,
			procedimento: "Mucolipidosis tipo 4 análise da mutação"
		},
		{
			codigo: 40503682,
			procedimento: "FLT3 pesquisa de mutações por eletroforese capilar (cada)"
		},
		{
			codigo: 40503690,
			procedimento: "Distrofia muscular (Duchenne), por PCR"
		},
		{
			codigo: 40503704,
			procedimento: "Células B painel de linfoma, Burkitt s -T(8;14); Folicular - T(14;14) e células de manto - T(11;14), FISH"
		},
		{
			codigo: 40503712,
			procedimento: "Pesquisa dea mutação 35delg da conexina"
		},
		{
			codigo: 40503720,
			procedimento: "Identificação genética - exame de paternidade (cada pessoa)"
		},
		{
			codigo: 40503739,
			procedimento: "Atrofia dentato-rubro-palido-luysiana, DRPLA, sangue total"
		},
		{
			codigo: 40503747,
			procedimento: "Detecção de Niemann Pick tipo Cc"
		},
		{
			codigo: 40503755,
			procedimento: "Detecção/tipagem herpes vírus 1/2 líquor"
		},
		{
			codigo: 40503763,
			procedimento: "EGFR, pesquisa de mutação"
		},
		{
			codigo: 40503771,
			procedimento: "K-RAS, pesquisa de mutação"
		},
		{
			codigo: 40503780,
			procedimento: "BRAF, pesquisa de mutação"
		},
		{
			codigo: 40503798,
			procedimento: "NRAS  PCR ou sequenciamento de Sanger  para mutações nos éxons 2,  3 e 4 do gene, no tumor"
		},
		{
			codigo: 40503801,
			procedimento: "Sequenciamento de Nova Geração (NGS) - genes isolados, painéis e grandes regiões genômicas (inclui Captura, Amplificação e Sequenciamento)"
		},
		{
			codigo: 40503810,
			procedimento: "Sequenciamento de Nova geração de todas as regiões codificadoras (éxons) de todo os genes do genoma  - Sequenciamento do Exoma (inclui Captura, Amplificação e Sequenciamento)"
		},
		{
			codigo: 40503825,
			procedimento: "Rearranjo PML/RARA  t(15;17) RQ-PCR (Quantitativo em tempo real)"
		},
		{
			codigo: 40503828,
			procedimento: "Rearranjo PML/RARA  t(15;17) RQ-PCR (Quantitativo em tempo real)"
		},
		{
			codigo: 40503833,
			procedimento: "Mutação familial específica - PCR do loccus identificado"
		},
		{
			codigo: 40503836,
			procedimento: "Mutação familial específica - PCR do loccus identificado"
		},
		{
			codigo: 40503841,
			procedimento: "Mutação familial específica - Sequenciamento de Sanger do loccus identificado"
		},
		{
			codigo: 40503844,
			procedimento: "Mutação familial específica - Sequenciamento de Sanger do loccus identificado"
		},
		{
			codigo: 40503852,
			procedimento: "ALK - pesquisa de mutação"
		},
		{
			codigo: 40601013,
			procedimento: "Procedimento diagnóstico peroperatório sem deslocamento do patologista"
		},
		{
			codigo: 40601021,
			procedimento: "Procedimento diagnóstico peroperatório - peça adicional ou margem cirúrgica"
		},
		{
			codigo: 40601030,
			procedimento: "Procedimento diagnóstico peroperatório com deslocamento do patologista"
		},
		{
			codigo: 40601048,
			procedimento: "Necrópsia de adulto/criança e natimorto com suspeita de anomalia genética"
		},
		{
			codigo: 40601056,
			procedimento: "Necrópsia de embrião/feto até 500 gramas"
		},
		{
			codigo: 40601064,
			procedimento: "Microscopia eletrônica"
		},
		{
			codigo: 40601072,
			procedimento: "Ato de coleta de PAAF de órgãos ou estruturas superficiais sem deslocamento do patologista"
		},
		{
			codigo: 40601080,
			procedimento: "Ato de coleta de PAAF de órgãos ou estruturas profundas sem deslocamento do patologista"
		},
		{
			codigo: 40601099,
			procedimento: "Ato de coleta de PAAF de órgãos ou estruturas superficiais com deslocamento do patologista"
		},
		{
			codigo: 40601102,
			procedimento: "Ato de coleta de PAAF de órgãos ou estruturas profundas com deslocamento do patologista"
		},
		{
			codigo: 40601110,
			procedimento: "Procedimento diagnóstico em biópsia simples \"imprint\" e \"cell block\""
		},
		{
			codigo: 40601129,
			procedimento: "Procedimento diagnóstico citopatológico oncótico de líquidos e raspados cutâneos"
		},
		{
			codigo: 40601137,
			procedimento: "Procedimento diagnóstico em citopatologia cérvico-vaginal oncótica"
		},
		{
			codigo: 40601145,
			procedimento: "Procedimento diagnóstico em citologia hormonal seriado"
		},
		{
			codigo: 40601153,
			procedimento: "Procedimento diagnóstico em revisão de lâminas ou cortes histológicos seriados"
		},
		{
			codigo: 40601161,
			procedimento: "Procedimento diagnóstico em citologia hormonal isolada"
		},
		{
			codigo: 40601170,
			procedimento: "Procedimento diagnóstico em painel de imunoistoquímica (duas a cinco reações)"
		},
		{
			codigo: 40601188,
			procedimento: "Procedimento diagnóstico em reação imunoistoquímica isolada"
		},
		{
			codigo: 40601196,
			procedimento: "Procedimento diagnóstico em fragmentos múltiplos de biópsias de mesmo órgão ou topografia, acondicionados em um mesmo frasco"
		},
		{
			codigo: 40601200,
			procedimento: "Procedimento diagnóstico em peça anatômica ou cirúrgica simples"
		},
		{
			codigo: 40601218,
			procedimento: "Procedimento diagnóstico em peça cirúrgica ou anatômica complexa"
		},
		{
			codigo: 40601226,
			procedimento: "Procedimento diagnóstico em grupos de linfonodos, estruturas vizinhas e margens de peças anatômicas simples ou complexas (por margem) - máximo de três margens"
		},
		{
			codigo: 40601234,
			procedimento: "Procedimento diagnóstico em amputação de membros - sem causa oncológica"
		},
		{
			codigo: 40601242,
			procedimento: "Procedimento diagnóstico em amputação de membros - causa oncológica"
		},
		{
			codigo: 40601250,
			procedimento: "Procedimento diagnóstico em lâminas de PAAF até 5"
		},
		{
			codigo: 40601269,
			procedimento: "Coloração especial por coloração"
		},
		{
			codigo: 40601277,
			procedimento: "Procedimento diagnóstico em imunofluorescência"
		},
		{
			codigo: 40601285,
			procedimento: "Procedimento diagnóstico em painel de hibridização \"in situ\""
		},
		{
			codigo: 40601293,
			procedimento: "Procedimento diagnóstico por captura híbrida"
		},
		{
			codigo: 40601307,
			procedimento: "Procedimento diagnóstico em citometria de fluxo (por monoclonal pesquisado)"
		},
		{
			codigo: 40601315,
			procedimento: "Procedimento diagnóstico em citometria de imagens"
		},
		{
			codigo: 40601323,
			procedimento: "Procedimento diagnóstico citopatológico em meio líquido"
		},
		{
			codigo: 40601331,
			procedimento: "Citológico anatomia patológica, qualquer material"
		},
		{
			codigo: 40601340,
			procedimento: "Citológico em líquido ascítico"
		},
		{
			codigo: 40601358,
			procedimento: "Citológico em líquido pericárdio"
		},
		{
			codigo: 40601366,
			procedimento: "Citológico em líquido sinovial"
		},
		{
			codigo: 40601374,
			procedimento: "Citológico em outros materiais"
		},
		{
			codigo: 40601382,
			procedimento: "DNA citometria fluxo parafina - outros materiais"
		},
		{
			codigo: 40601390,
			procedimento: "Imprint de gânglio"
		},
		{
			codigo: 40601404,
			procedimento: "Imprint de medula óssea"
		},
		{
			codigo: 40601412,
			procedimento: "AP bióspia múltiplas (até 6 áreas)"
		},
		{
			codigo: 40601420,
			procedimento: "AP biópsia mútliplas (de 7 a 10 áreas)"
		},
		{
			codigo: 40601439,
			procedimento: "Instabilidade de microssatélites (MSI), detecção por PCR, bloco de parafina"
		},
		{
			codigo: 40701018,
			procedimento: "Angiografia radioisotópica"
		},
		{
			codigo: 40701026,
			procedimento: "Cintilografia com hemácias marcadas"
		},
		{
			codigo: 40701034,
			procedimento: "Cintilografia do miocárdio com duplo isótopo (perfusão + viabilidade)"
		},
		{
			codigo: 40701042,
			procedimento: "Cintilografia do miocárdio com FDG-18 F, em câmara híbrida"
		},
		{
			codigo: 40701050,
			procedimento: "Cintilografia do miocárdio necrose (infarto agudo)"
		},
		{
			codigo: 40701069,
			procedimento: "Cintilografia do miocárdio perfusão - repouso"
		},
		{
			codigo: 40701077,
			procedimento: "Cintilografia sincronizada das câmaras cardíacas - esforço"
		},
		{
			codigo: 40701085,
			procedimento: "Cintilografia sincronizada das câmaras cardíacas - repouso"
		},
		{
			codigo: 40701093,
			procedimento: "Fluxo sanguíneo das extremidades"
		},
		{
			codigo: 40701107,
			procedimento: "Quantificação de \"shunt\" da direita para a esquerda"
		},
		{
			codigo: 40701115,
			procedimento: "Quantificação de \"shunt\" periférico"
		},
		{
			codigo: 40701123,
			procedimento: "Venografia radioisotópica"
		},
		{
			codigo: 40701131,
			procedimento: "Cintilografia do miocárdio perfusão - estresse farmacológico"
		},
		{
			codigo: 40701140,
			procedimento: "Cintilografia do miocárdio perfusão - estresse físico"
		},
		{
			codigo: 40701158,
			procedimento: "Cintilografia de perfusão do miocárido, associada à Dobutamina"
		},
		{
			codigo: 40702014,
			procedimento: "Cintilografia das glândulas salivares com ou sem estímulo"
		},
		{
			codigo: 40702022,
			procedimento: "Cintilografia do fígado e do baço"
		},
		{
			codigo: 40702030,
			procedimento: "Cintilografia do fígado e vias biliares"
		},
		{
			codigo: 40702049,
			procedimento: "Cintilografia para detecção de hemorragia digestória ativa"
		},
		{
			codigo: 40702057,
			procedimento: "Cintilografia para detecção de hemorragia digestória não ativa"
		},
		{
			codigo: 40702065,
			procedimento: "Cintilografia para determinação do tempo de esvaziamento gástrico"
		},
		{
			codigo: 40702073,
			procedimento: "Cintilografia para estudo de trânsito esofágico (líquidos)"
		},
		{
			codigo: 40702081,
			procedimento: "Cintilografia para estudo de trânsito esofágico (semi-sólidos)"
		},
		{
			codigo: 40702090,
			procedimento: "Cintilografia para pesquisa de divertículo de Meckel"
		},
		{
			codigo: 40702103,
			procedimento: "Cintilografia para pesquisa de refluxo gastro-esofágico"
		},
		{
			codigo: 40702111,
			procedimento: "Fluxo sanguíneo hepático (qualitativo e quantitativo)"
		},
		{
			codigo: 40702120,
			procedimento: "Absorção de gorduras"
		},
		{
			codigo: 40702138,
			procedimento: "Perdas proteicas"
		},
		{
			codigo: 40702146,
			procedimento: "Cintilografia, receptores da Somatostatina com lutécio - 177"
		},
		{
			codigo: 40703010,
			procedimento: "Cintilografia da tireóide e/ou captação (iodo - 123)"
		},
		{
			codigo: 40703029,
			procedimento: "Cintilografia da tireóide e/ou captação (iodo - 131)"
		},
		{
			codigo: 40703037,
			procedimento: "Cintilografia da tireóide e/ou captação (tecnécio - 99m TC)"
		},
		{
			codigo: 40703045,
			procedimento: "Cintilografia das paratireóides"
		},
		{
			codigo: 40703053,
			procedimento: "Cintilografia de corpo inteiro para pesquisa de metástases (PCI)"
		},
		{
			codigo: 40703061,
			procedimento: "Teste de estímulo com TSH recombinante"
		},
		{
			codigo: 40703070,
			procedimento: "Teste de supressão da tireóide com T3"
		},
		{
			codigo: 40703088,
			procedimento: "Teste do perclorato"
		},
		{
			codigo: 40703096,
			procedimento: "Cintilografia de corpo inteiro com metaiodobenzilguandina - iodo-123"
		},
		{
			codigo: 40703100,
			procedimento: "Cintilografia de corpo inteiro com MIBI marcada com tecnécio - 99m"
		},
		{
			codigo: 40704017,
			procedimento: "Cintilografia renal dinâmica"
		},
		{
			codigo: 40704025,
			procedimento: "Cintilografia renal dinâmica com diurético"
		},
		{
			codigo: 40704033,
			procedimento: "Cintilografia renal estática (quantitativa ou qualitativa)"
		},
		{
			codigo: 40704041,
			procedimento: "Cintilografia testicular (escrotal)"
		},
		{
			codigo: 40704050,
			procedimento: "Cistocintilografia direta"
		},
		{
			codigo: 40704068,
			procedimento: "Cistocintilografia indireta"
		},
		{
			codigo: 40704076,
			procedimento: "Determinação da filtração glomerular"
		},
		{
			codigo: 40704084,
			procedimento: "Determinação do fluxo plasmático renal"
		},
		{
			codigo: 40704092,
			procedimento: "Renograma"
		},
		{
			codigo: 40705013,
			procedimento: "Cintilografia do sistema retículo-endotelial (medula óssea)"
		},
		{
			codigo: 40705021,
			procedimento: "Demonstração do sequestro de hemácias pelo baço"
		},
		{
			codigo: 40705030,
			procedimento: "Determinação da sobrevida de hemácias"
		},
		{
			codigo: 40705048,
			procedimento: "Determinação do volume eritrocitário"
		},
		{
			codigo: 40705056,
			procedimento: "Determinação do volume plasmático"
		},
		{
			codigo: 40705064,
			procedimento: "Teste de absorção de vitamina B12 com cobalto - 57 (teste de Schilling)"
		},
		{
			codigo: 40706010,
			procedimento: "Cintilografia óssea (corpo total)"
		},
		{
			codigo: 40706028,
			procedimento: "Fluxo sanguíneo ósseo"
		},
		{
			codigo: 40707016,
			procedimento: "Cintilografia cerebral"
		},
		{
			codigo: 40707024,
			procedimento: "Cintilografia cerebral com FDG-18 F, em câmara hibrída"
		},
		{
			codigo: 40707032,
			procedimento: "Cintilografia de perfusão cerebral"
		},
		{
			codigo: 40707040,
			procedimento: "Cisternocintilografia"
		},
		{
			codigo: 40707059,
			procedimento: "Cisternocintilografia para pesquisa de fístula liquórica"
		},
		{
			codigo: 40707067,
			procedimento: "Fluxo sanguíneo cerebral"
		},
		{
			codigo: 40707075,
			procedimento: "Mielocintilografia"
		},
		{
			codigo: 40707083,
			procedimento: "Ventrículo-cintilografia"
		},
		{
			codigo: 40707091,
			procedimento: "Cintilografia perfusão cerebral para avaliação de transportadores de dopamina"
		},
		{
			codigo: 40708012,
			procedimento: "Cintilografia com análogo de somatostatina"
		},
		{
			codigo: 40708020,
			procedimento: "Cintilografia com gálio-67"
		},
		{
			codigo: 40708039,
			procedimento: "Cintilografia com leucócitos marcados"
		},
		{
			codigo: 40708047,
			procedimento: "Cintilografia com MIBG (metaiodobenzilguanidina)"
		},
		{
			codigo: 40708055,
			procedimento: "Cintilografia de corpo total com FDG-18 F, em câmara híbrida"
		},
		{
			codigo: 40708063,
			procedimento: "Cintilografia de mama (bilateral)"
		},
		{
			codigo: 40708071,
			procedimento: "Demarcação radioisotópica de lesões tumorais"
		},
		{
			codigo: 40708080,
			procedimento: "Detecção intraoperatória radioguiada de lesões tumorais"
		},
		{
			codigo: 40708098,
			procedimento: "Detecção intraoperatória radioguiada de linfonodo sentinela"
		},
		{
			codigo: 40708101,
			procedimento: "Linfocintilografia"
		},
		{
			codigo: 40708110,
			procedimento: "Quantificação da captação pulmonar com gálio-67"
		},
		{
			codigo: 40708128,
			procedimento: "PET dedicado oncológico"
		},
		{
			codigo: 40709019,
			procedimento: "Cintilografia para detecção de aspiração pulmonar"
		},
		{
			codigo: 40709027,
			procedimento: "Cintilografia pulmonar (inalação)"
		},
		{
			codigo: 40709035,
			procedimento: "Cintilografia pulmonar (perfusão)"
		},
		{
			codigo: 40710017,
			procedimento: "Sessão médica para planejamento técnico de radioisotopoterapia"
		},
		{
			codigo: 40710025,
			procedimento: "Tratamento com metaiodobenzilguanidina (MIBG)"
		},
		{
			codigo: 40710033,
			procedimento: "Tratamento da policitemia vera"
		},
		{
			codigo: 40710041,
			procedimento: "Tratamento de câncer da tireóide"
		},
		{
			codigo: 40710050,
			procedimento: "Tratamento de hipertireoidismo-bócio nodular tóxico (Graves)"
		},
		{
			codigo: 40710068,
			procedimento: "Tratamento de hipertireoidismo-bócio nodular tóxico (Plummer)"
		},
		{
			codigo: 40710076,
			procedimento: "Tratamento de metástases ósseas (estrôncio-90)"
		},
		{
			codigo: 40710084,
			procedimento: "Tratamento de metástases ósseas (samário-153)"
		},
		{
			codigo: 40710092,
			procedimento: "Tratamento de tumores neuroendócrinos"
		},
		{
			codigo: 40710106,
			procedimento: "Controle após terapia com lutécio"
		},
		{
			codigo: 40711013,
			procedimento: "Dacriocintilografia"
		},
		{
			codigo: 40711021,
			procedimento: "Imunocintilografia (anticorpos monoclonais)"
		},
		{
			codigo: 40801012,
			procedimento: "RX - Crânio - 2 incidências"
		},
		{
			codigo: 40801020,
			procedimento: "RX - Crânio - 3 incidências"
		},
		{
			codigo: 40801039,
			procedimento: "RX - Crânio - 4 incidências"
		},
		{
			codigo: 40801047,
			procedimento: "RX - Orelha, mastóides ou rochedos - bilateral"
		},
		{
			codigo: 40801055,
			procedimento: "RX - Órbitas - bilateral"
		},
		{
			codigo: 40801063,
			procedimento: "RX - Seios da face"
		},
		{
			codigo: 40801071,
			procedimento: "RX - Sela túrcica"
		},
		{
			codigo: 40801080,
			procedimento: "RX - Maxilar inferior"
		},
		{
			codigo: 40801098,
			procedimento: "RX - Ossos da face"
		},
		{
			codigo: 40801101,
			procedimento: "RX - Arcos zigomáticos ou malar ou apófises estilóides"
		},
		{
			codigo: 40801110,
			procedimento: "RX - Articulação temporomandibular - bilateral"
		},
		{
			codigo: 40801128,
			procedimento: "RX - Adenóides ou cavum"
		},
		{
			codigo: 40801136,
			procedimento: "RX - Panorâmica de mandíbula (ortopantomografia)"
		},
		{
			codigo: 40801144,
			procedimento: "RX - Teleperfil em cefalostato - sem traçado"
		},
		{
			codigo: 40801152,
			procedimento: "RX - Teleperfil em cefalostato - com traçado"
		},
		{
			codigo: 40801160,
			procedimento: "RX - Arcada dentária (por arcada)"
		},
		{
			codigo: 40801179,
			procedimento: "RX - Radiografia peri-apical"
		},
		{
			codigo: 40801187,
			procedimento: "RX - Radiografia oclusal"
		},
		{
			codigo: 40801195,
			procedimento: "RX - Planigrafia linear de crânio ou sela túrcica ou face ou mastóide"
		},
		{
			codigo: 40801209,
			procedimento: "RX - Incidência adicional de crânio ou face"
		},
		{
			codigo: 40802019,
			procedimento: "RX - Coluna cervical - 3 incidências"
		},
		{
			codigo: 40802027,
			procedimento: "RX - Coluna cervical - 5 incidências"
		},
		{
			codigo: 40802035,
			procedimento: "RX - Coluna dorsal - 2 incidências"
		},
		{
			codigo: 40802043,
			procedimento: "RX - Coluna dorsal - 4 incidências"
		},
		{
			codigo: 40802051,
			procedimento: "RX - Coluna lombo-sacra - 3 incidências"
		},
		{
			codigo: 40802060,
			procedimento: "RX - Coluna lombo-sacra - 5 incidências"
		},
		{
			codigo: 40802078,
			procedimento: "RX - Sacro-coccix"
		},
		{
			codigo: 40802086,
			procedimento: "RX - Coluna dorso-lombar para escoliose"
		},
		{
			codigo: 40802094,
			procedimento: "RX - Coluna total para escoliose (telespondilografia)"
		},
		{
			codigo: 40802108,
			procedimento: "RX - Planigrafia de coluna vertebral (dois planos)"
		},
		{
			codigo: 40802116,
			procedimento: "RX - Incidência adicional de coluna"
		},
		{
			codigo: 40803015,
			procedimento: "RX - Esterno"
		},
		{
			codigo: 40803023,
			procedimento: "RX - Articulação esternoclavicular"
		},
		{
			codigo: 40803031,
			procedimento: "RX - Costelas - por hemitórax"
		},
		{
			codigo: 40803040,
			procedimento: "RX - Clavícula"
		},
		{
			codigo: 40803058,
			procedimento: "RX - Omoplata ou escápula"
		},
		{
			codigo: 40803066,
			procedimento: "RX - Articulação acromioclavicular"
		},
		{
			codigo: 40803074,
			procedimento: "RX - Articulação escapuloumeral (ombro)"
		},
		{
			codigo: 40803082,
			procedimento: "RX - Braço"
		},
		{
			codigo: 40803090,
			procedimento: "RX - Cotovelo"
		},
		{
			codigo: 40803104,
			procedimento: "RX - Antebraço"
		},
		{
			codigo: 40803112,
			procedimento: "RX - Punho"
		},
		{
			codigo: 40803120,
			procedimento: "RX - Mão ou quirodáctilo"
		},
		{
			codigo: 40803139,
			procedimento: "RX - Mãos e punhos para idade óssea"
		},
		{
			codigo: 40803147,
			procedimento: "RX - Incidência adicional de membro superior"
		},
		{
			codigo: 40803155,
			procedimento: "RX - Escafóide"
		},
		{
			codigo: 40804011,
			procedimento: "RX - Bacia"
		},
		{
			codigo: 40804020,
			procedimento: "RX - Articulações sacroilíacas"
		},
		{
			codigo: 40804038,
			procedimento: "RX - Articulação coxofemoral (quadril)"
		},
		{
			codigo: 40804046,
			procedimento: "RX - Coxa"
		},
		{
			codigo: 40804054,
			procedimento: "RX - Joelho"
		},
		{
			codigo: 40804062,
			procedimento: "RX - Patela"
		},
		{
			codigo: 40804070,
			procedimento: "RX - Perna"
		},
		{
			codigo: 40804089,
			procedimento: "RX - Articulação tibiotársica (tornozelo)"
		},
		{
			codigo: 40804097,
			procedimento: "RX - Pé ou pododáctilo"
		},
		{
			codigo: 40804100,
			procedimento: "RX - Calcâneo"
		},
		{
			codigo: 40804119,
			procedimento: "RX - Escanometria"
		},
		{
			codigo: 40804127,
			procedimento: "RX - Panorâmica dos membros inferiores"
		},
		{
			codigo: 40804135,
			procedimento: "RX - Incidência adicional de membro inferior"
		},
		{
			codigo: 40805018,
			procedimento: "RX - Tórax - 1 incidência"
		},
		{
			codigo: 40805026,
			procedimento: "RX - Tórax - 2 incidências"
		},
		{
			codigo: 40805034,
			procedimento: "RX - Tórax - 3 incidências"
		},
		{
			codigo: 40805042,
			procedimento: "RX - Tórax - 4 incidências"
		},
		{
			codigo: 40805050,
			procedimento: "RX - Coração e vasos da base"
		},
		{
			codigo: 40805069,
			procedimento: "RX - Planigrafia de tórax, mediastino ou laringe"
		},
		{
			codigo: 40805077,
			procedimento: "RX - Laringe ou hipofaringe ou pescoço (partes moles)"
		},
		{
			codigo: 40805085,
			procedimento: "RX - Abreugrafia 100 mm"
		},
		{
			codigo: 40805093,
			procedimento: "RX - Abreugrafia 35 ou 70 mm"
		},
		{
			codigo: 40806014,
			procedimento: "RX - Deglutograma"
		},
		{
			codigo: 40806022,
			procedimento: "RX - Videodeglutograma"
		},
		{
			codigo: 40806030,
			procedimento: "RX - Esôfago"
		},
		{
			codigo: 40806049,
			procedimento: "RX - Estômago e duodeno"
		},
		{
			codigo: 40806057,
			procedimento: "RX - Esôfago - hiato - estômago e duodeno"
		},
		{
			codigo: 40806065,
			procedimento: "RX - Trânsito e morfologia do delgado"
		},
		{
			codigo: 40806073,
			procedimento: "RX - Estudo do delgado com duplo contraste"
		},
		{
			codigo: 40806081,
			procedimento: "RX - Clister ou enema opaco (duplo contraste)"
		},
		{
			codigo: 40806090,
			procedimento: "RX - Defecograma"
		},
		{
			codigo: 40806103,
			procedimento: "RX - Colangiografia intra-operatória"
		},
		{
			codigo: 40806111,
			procedimento: "RX - Colangiografia pós-operatória (pelo dreno)"
		},
		{
			codigo: 40806120,
			procedimento: "RX - Colangiografia pré-operatória"
		},
		{
			codigo: 40806138,
			procedimento: "RX - Colangiografia venosa"
		},
		{
			codigo: 40806146,
			procedimento: "RX - Colangiografia venosa com tomografias"
		},
		{
			codigo: 40806154,
			procedimento: "RX - Colecistograma oral"
		},
		{
			codigo: 40806162,
			procedimento: "RX - Colecistograma oral com prova motora"
		},
		{
			codigo: 40806170,
			procedimento: "RX - Duodenografia hipotônica"
		},
		{
			codigo: 40806189,
			procedimento: "RX - Trânsito colônico"
		},
		{
			codigo: 40806197,
			procedimento: "RX - Colangiografia endoscópica"
		},
		{
			codigo: 40806200,
			procedimento: "RX - Videodefecograma"
		},
		{
			codigo: 40806219,
			procedimento: "RX - Videodefecograma com manometria anorretal"
		},
		{
			codigo: 40807010,
			procedimento: "RX - Urografia venosa com bexiga pré e pós-miccional"
		},
		{
			codigo: 40807029,
			procedimento: "RX - Pielografia ascendente"
		},
		{
			codigo: 40807037,
			procedimento: "RX - Urografia venosa minutada 1-2-3"
		},
		{
			codigo: 40807045,
			procedimento: "RX - Urografia venosa com nefrotomografia"
		},
		{
			codigo: 40807053,
			procedimento: "RX - Uretrocistografia de adulto"
		},
		{
			codigo: 40807061,
			procedimento: "RX - Uretrocistografia de criança (até 12 anos)"
		},
		{
			codigo: 40807070,
			procedimento: "RX - Tomografia renal sem contraste"
		},
		{
			codigo: 40807088,
			procedimento: "RX - Pênis"
		},
		{
			codigo: 40807096,
			procedimento: "RX - Uretrocistografia retrógada"
		},
		{
			codigo: 40807100,
			procedimento: "RX - Nefrograma, basal e após captopril"
		},
		{
			codigo: 40808017,
			procedimento: "RX - Abdome simples"
		},
		{
			codigo: 40808025,
			procedimento: "RX - Abdome agudo"
		},
		{
			codigo: 40808033,
			procedimento: "Mamografia convencional bilateral"
		},
		{
			codigo: 40808041,
			procedimento: "Mamografia digital bilateral"
		},
		{
			codigo: 40808050,
			procedimento: "RX - Ampliação ou magnificação de lesão mamária"
		},
		{
			codigo: 40808068,
			procedimento: "Marcação pré-cirúrgica por estereotaxia, orientada por imagem - por mama (já inclui exame de base)"
		},
		{
			codigo: 40808084,
			procedimento: "Punção ou biópsia mamária percutânea por agulha fina orientada por imagem (já inclui o exame de base)"
		},
		{
			codigo: 40808092,
			procedimento: "Biópsia percutânea de fragmento mamário (core biopsy) orientada por US ou RX - agulha grossa"
		},
		{
			codigo: 40808106,
			procedimento: "Mamotomia por estereotaxia ou US"
		},
		{
			codigo: 40808114,
			procedimento: "RX - Esqueleto (incidências básicas de: crânio, coluna, bacia e membros)"
		},
		{
			codigo: 40808122,
			procedimento: "Densitometria óssea (um segmento)"
		},
		{
			codigo: 40808130,
			procedimento: "Densitometria óssea - rotina: coluna e fêmur (ou dois segmentos)"
		},
		{
			codigo: 40808149,
			procedimento: "Densitometria óssea - corpo inteiro (avaliação de massa óssea ou de composição corporal)"
		},
		{
			codigo: 40808157,
			procedimento: "RX - Avaliação de fraturas vertebrais por DXA"
		},
		{
			codigo: 40808165,
			procedimento: "Planigrafia de osso"
		},
		{
			codigo: 40808173,
			procedimento: "Xeromamografia"
		},
		{
			codigo: 40808181,
			procedimento: "Biópsia de mama, dirigida por RM"
		},
		{
			codigo: 40808190,
			procedimento: "Marcação pré-cirúrgica por nódulo - máximo de 3 nódulos por mama, por estereotaxia (não inclui exame de imagem)"
		},
		{
			codigo: 40808200,
			procedimento: "MARCAÇÃO PRÉ-CIRÚRGICA POR NÓDULO - MÁXIMO DE 3 NÓDULOS POR MAMA, POR US (NÃO INCLUI EXAME DE IMAGEM)"
		},
		{
			codigo: 40808203,
			procedimento: "Marcação pré-cirúrgica por nódulo - máximo de 3 nódulos por mama, por US (não inclui exame de imagem)"
		},
		{
			codigo: 40808211,
			procedimento: "Marcação pré-cirúrgica por nódulo - máximo de 3 nódulos por mama, por RM (não inclui exame de imagem)"
		},
		{
			codigo: 40808220,
			procedimento: "Punção ou biópsia mamária percutânea por agulha fina orientada por estereotaxia (não inclui o exame de base)"
		},
		{
			codigo: 40808238,
			procedimento: "Punção ou biópsia mamária percutânea por agulha fina orientada por US (não inclui o exame de base)"
		},
		{
			codigo: 40808246,
			procedimento: "Punção ou biópsia mamária percutânea por agulha fina orientada por TC (não inclui o exame de base)"
		},
		{
			codigo: 40808254,
			procedimento: "Biópsia percutânea de fragmento mamário por agulha grossa (core biopsy) orientada por estereotaxia (não inclui o exame de imagem)"
		},
		{
			codigo: 40808262,
			procedimento: "Biópsia percutânea de fragmento mamário por agulha grossa (core biopsy) orientada por US (não inclui o exame de imagem)"
		},
		{
			codigo: 40808270,
			procedimento: "Biópsia percutânea de fragmento mamário por agulha grossa (core biopsy) orientada por RM (não inclui o exame de imagem)"
		},
		{
			codigo: 40808289,
			procedimento: "Mamotomia por estereotaxia (não inclui o exame de imagem)"
		},
		{
			codigo: 40808297,
			procedimento: "Mamotomia por US (não inclui o exame de imagem)"
		},
		{
			codigo: 40808300,
			procedimento: "Mamotomia por RM (não inclui o exame de imagem)"
		},
		{
			codigo: 40809013,
			procedimento: "Ductografia (por mama)"
		},
		{
			codigo: 40809021,
			procedimento: "Sialografia (por glândula)"
		},
		{
			codigo: 40809030,
			procedimento: "Histerossalpingografia"
		},
		{
			codigo: 40809048,
			procedimento: "Artrografia ou pneumoartrografia"
		},
		{
			codigo: 40809056,
			procedimento: "Fistulografia"
		},
		{
			codigo: 40809064,
			procedimento: "Colangiografia transcutânea"
		},
		{
			codigo: 40809072,
			procedimento: "Colangiopancreatografia retrógrada"
		},
		{
			codigo: 40809080,
			procedimento: "Dacriocistografia"
		},
		{
			codigo: 40809099,
			procedimento: "Punção biópsia/aspirativa de órgão ou estrutura orientada por RX, US ou CT (acrescentar o exame base)"
		},
		{
			codigo: 40809102,
			procedimento: "Drenagem percutânea orientada por RX (acrescentar o exame de base)"
		},
		{
			codigo: 40809110,
			procedimento: "Broncografia (por punção ou entubação traqueal)"
		},
		{
			codigo: 40809129,
			procedimento: "Broncografia unilateral"
		},
		{
			codigo: 40809137,
			procedimento: "Pneumoperitônio (RX)"
		},
		{
			codigo: 40809145,
			procedimento: "Colocação de marcador de local da intervenção"
		},
		{
			codigo: 40809153,
			procedimento: "Punção biópsia/aspirativa de órgão ou estrutura orientada por RX (não inclui o exame de base)"
		},
		{
			codigo: 40809161,
			procedimento: "Punção biópsia/aspirativa de órgão ou estrutura orientada por US (não inclui o exame de base)"
		},
		{
			codigo: 40809170,
			procedimento: "Punção biópsia/aspirativa de órgão ou estrutura orientada por TC (não inclui o exame de base)"
		},
		{
			codigo: 40809188,
			procedimento: "Punção biópsia/aspirativa de órgão ou estrutura orientada por RM (não inclui o exame de base)"
		},
		{
			codigo: 40810011,
			procedimento: "Mielografia segmentar (por segmento)"
		},
		{
			codigo: 40810020,
			procedimento: "Teste de oclusão de artéria carótida ou vertebral"
		},
		{
			codigo: 40810038,
			procedimento: "Colheita seletiva de sangue para dosagem hormonal"
		},
		{
			codigo: 40810046,
			procedimento: "Avaliação hemodinâmica por cateterismo (aferimento de pressão ou fluxo arterial ou venoso)"
		},
		{
			codigo: 40811018,
			procedimento: "Radioscopia diagnóstica"
		},
		{
			codigo: 40811026,
			procedimento: "Radioscopia para acompanhamento de procedimento cirúrgico (por hora ou fração)"
		},
		{
			codigo: 40812014,
			procedimento: "Aortografia abdominal por punção translombar"
		},
		{
			codigo: 40812022,
			procedimento: "Angiografia por punção"
		},
		{
			codigo: 40812030,
			procedimento: "Angiografia por cateterismo não seletivo de grande vaso"
		},
		{
			codigo: 40812049,
			procedimento: "Angiografia por cateterismo seletivo de ramo primário - por vaso"
		},
		{
			codigo: 40812057,
			procedimento: "Angiografia por cateterismo superseletivo de ramo secundário ou distal - por vaso"
		},
		{
			codigo: 40812065,
			procedimento: "Angiografia transoperatória de posicionamento"
		},
		{
			codigo: 40812073,
			procedimento: "Angiografia pós-operatória de controle"
		},
		{
			codigo: 40812081,
			procedimento: "Flebografia por punção venosa unilateral"
		},
		{
			codigo: 40812090,
			procedimento: "Flebografia retrógrada por cateterismo - unilateral"
		},
		{
			codigo: 40812103,
			procedimento: "Portografia trans-hepática"
		},
		{
			codigo: 40812111,
			procedimento: "Esplenoportografia percutânea"
		},
		{
			codigo: 40812120,
			procedimento: "Linfangioadenografia unilateral"
		},
		{
			codigo: 40812138,
			procedimento: "Cavernosografia"
		},
		{
			codigo: 40812146,
			procedimento: "Fármaco-cavernosografia (dinâmica)"
		},
		{
			codigo: 40812154,
			procedimento: "Angiografia Medular"
		},
		{
			codigo: 40812155,
			procedimento: "Angiografia Medular"
		},
		{
			codigo: 40813010,
			procedimento: "Ablação percutânea de tumor torácico (qualquer método)"
		},
		{
			codigo: 40813029,
			procedimento: "Ablação percutânea de tumor hepático (qualquer método) - metodo intervencionista/terapêutico por imagem"
		},
		{
			codigo: 40813037,
			procedimento: "Ablação percutânea de tumor ósseo (qualquer método)"
		},
		{
			codigo: 40813045,
			procedimento: "Ablação percutânea de tumor (qualquer método)"
		},
		{
			codigo: 40813053,
			procedimento: "Alcoolização percutânea de angioma"
		},
		{
			codigo: 40813061,
			procedimento: "Angioplastia de ramo intracraniano"
		},
		{
			codigo: 40813070,
			procedimento: "Angioplastia de tronco supra-aórtico"
		},
		{
			codigo: 40813088,
			procedimento: "Angioplastia de aorta para tratamento de coarctação"
		},
		{
			codigo: 40813100,
			procedimento: "Angioplastia de artéria visceral - por vaso"
		},
		{
			codigo: 40813118,
			procedimento: "Angioplastia arterial ou venosa de anastomose vascular de fígado transplantado"
		},
		{
			codigo: 40813126,
			procedimento: "Angioplastia renal para tratamento de hipertensão renovascular ou outra condição"
		},
		{
			codigo: 40813134,
			procedimento: "Angioplastia arterial ou venosa de anastomose vascular de rim transplantado"
		},
		{
			codigo: 40813142,
			procedimento: "Angioplastia de ramos hipogástricos para tratamento de impotência"
		},
		{
			codigo: 40813150,
			procedimento: "Angioplastia de tronco venoso"
		},
		{
			codigo: 40813169,
			procedimento: "Angioplastia venosa para tratamento de síndrome de BUDD-CHIARI"
		},
		{
			codigo: 40813177,
			procedimento: "Angioplastia transluminal percutânea"
		},
		{
			codigo: 40813185,
			procedimento: "Angioplastia transluminal percutânea para tratamento de obstrução arterial"
		},
		{
			codigo: 40813193,
			procedimento: "Colocação de stent em ramo intracraniano"
		},
		{
			codigo: 40813207,
			procedimento: "Colocação de stent em tronco supra-aórtico"
		},
		{
			codigo: 40813215,
			procedimento: "Colocação de stent aórtico"
		},
		{
			codigo: 40813223,
			procedimento: "Colocação de stent para tratamento de síndrome de VCI"
		},
		{
			codigo: 40813231,
			procedimento: "Colocação de cateter venoso central ou portocath"
		},
		{
			codigo: 40813240,
			procedimento: "Colocação de filtro de VCI para prevenção de TEP"
		},
		{
			codigo: 40813258,
			procedimento: "Colocação de stent em artéria visceral - por vaso"
		},
		{
			codigo: 40813266,
			procedimento: "Colocação de stent para tratamento de obstrução arterial ou venosa"
		},
		{
			codigo: 40813274,
			procedimento: "Colocação de stent revestido (stent-graft) para tratamento de aneurisma periférico"
		},
		{
			codigo: 40813282,
			procedimento: "Colocação de stent revestido (stent-graft) para tratamento de fístula arteriovenosa"
		},
		{
			codigo: 40813290,
			procedimento: "Colocação de stent em estenose vascular de enxerto transplantado"
		},
		{
			codigo: 40813304,
			procedimento: "Colocação de stent em traquéia ou brônquio"
		},
		{
			codigo: 40813312,
			procedimento: "Colocação de stent esofagiano, duodenal ou colônico"
		},
		{
			codigo: 40813320,
			procedimento: "Colocação de stent biliar"
		},
		{
			codigo: 40813339,
			procedimento: "Colocação de stent renal"
		},
		{
			codigo: 40813347,
			procedimento: "Colocação percutânea de cateter pielovesical"
		},
		{
			codigo: 40813355,
			procedimento: "Colocação percutânea de stent vascular"
		},
		{
			codigo: 40813363,
			procedimento: "Coluna vertebral: infiltração foraminal ou facetária ou articular"
		},
		{
			codigo: 40813371,
			procedimento: "Dilatação percutânea de estenose biliar cicatricial"
		},
		{
			codigo: 40813380,
			procedimento: "Dilatação percutânea de estenose de conduto urinário"
		},
		{
			codigo: 40813398,
			procedimento: "Dilatação percutânea de estenose de ducto pancreático"
		},
		{
			codigo: 40813401,
			procedimento: "Aterectomia percutânea orientada por RX"
		},
		{
			codigo: 40813410,
			procedimento: "Drenagem percutânea de coleção pleural"
		},
		{
			codigo: 40813428,
			procedimento: "Drenagem percutânea de pneumotórax"
		},
		{
			codigo: 40813436,
			procedimento: "Drenagem de abscesso pulmonar ou mediastinal"
		},
		{
			codigo: 40813444,
			procedimento: "Drenagem mediastinal orientada por RX ou TC"
		},
		{
			codigo: 40813452,
			procedimento: "Drenagem percutânea de coleção infectada abdominal"
		},
		{
			codigo: 40813460,
			procedimento: "Drenagem percutânea de abscesso hepático ou pancreático"
		},
		{
			codigo: 40813479,
			procedimento: "Drenagem percutânea de cisto hepático ou pancreático"
		},
		{
			codigo: 40813487,
			procedimento: "Drenagem percutânea de via biliar"
		},
		{
			codigo: 40813495,
			procedimento: "Drenagem percutânea de cisto renal"
		},
		{
			codigo: 40813509,
			procedimento: "Drenagem percutânea de abscesso renal"
		},
		{
			codigo: 40813517,
			procedimento: "Drenagem percutânea de coleção infectada profunda"
		},
		{
			codigo: 40813525,
			procedimento: "Drenagem percutânea de abscesso retroperitoneal ou pélvico"
		},
		{
			codigo: 40813533,
			procedimento: "Drenagem percutânea não especificada"
		},
		{
			codigo: 40813541,
			procedimento: "Embolização de aneurisma cerebral por oclusão sacular - por vaso"
		},
		{
			codigo: 40813550,
			procedimento: "Embolização de aneurisma cerebral por oclusão vascular - por vaso"
		},
		{
			codigo: 40813568,
			procedimento: "Embolização de malformação arteriovenosa cerebral ou medular - por vaso"
		},
		{
			codigo: 40813576,
			procedimento: "Embolização de fístula arteriovenosa em cabeça, pescoço ou coluna - por vaso"
		},
		{
			codigo: 40813584,
			procedimento: "Embolização para tratamento de epistaxe"
		},
		{
			codigo: 40813592,
			procedimento: "Embolização de aneurisma ou pseudoaneurisma visceral"
		},
		{
			codigo: 40813606,
			procedimento: "Embolização brônquica para tratamento de hemoptise"
		},
		{
			codigo: 40813614,
			procedimento: "Embolização pulmonar para tratamento de fístula arteriovenosa ou outra situação"
		},
		{
			codigo: 40813622,
			procedimento: "Embolização de varizes esofagianas ou gástricas"
		},
		{
			codigo: 40813630,
			procedimento: "Embolização de hemorragia digestiva"
		},
		{
			codigo: 40813649,
			procedimento: "Embolização de ramo portal"
		},
		{
			codigo: 40813657,
			procedimento: "Embolização esplênica para tratamento de hiperesplenismo ou outra situação"
		},
		{
			codigo: 40813665,
			procedimento: "Embolização arterial para tratamento de priapismo"
		},
		{
			codigo: 40813673,
			procedimento: "Embolização para tratamento de impotência"
		},
		{
			codigo: 40813681,
			procedimento: "Embolização de ramos hipogástricos para tratamento de sangramento ginecológico"
		},
		{
			codigo: 40813690,
			procedimento: "Embolização seletiva de fístula ou aneurisma renal para tratamento de hematúria"
		},
		{
			codigo: 40813703,
			procedimento: "Embolização de artéria renal para nefrectomia"
		},
		{
			codigo: 40813711,
			procedimento: "Embolização de fístula arteriovenosa não especificada acima - por vaso"
		},
		{
			codigo: 40813720,
			procedimento: "Embolização de malformação vascular - por vaso"
		},
		{
			codigo: 40813738,
			procedimento: "Embolização de pseudoaneurisma - por vaso"
		},
		{
			codigo: 40813746,
			procedimento: "Embolização de artéria uterina para tratamento de mioma ou outras situações"
		},
		{
			codigo: 40813754,
			procedimento: "Embolização de veia espermática para tratamento de varicocele"
		},
		{
			codigo: 40813762,
			procedimento: "Embolização de veias ovarianas para tratamento de varicocele"
		},
		{
			codigo: 40813770,
			procedimento: "Embolização definitiva não especificada acima - por vaso"
		},
		{
			codigo: 40813789,
			procedimento: "Embolização de tumor de cabeça e pescoço"
		},
		{
			codigo: 40813797,
			procedimento: "Embolização de tumor do aparelho digestivo"
		},
		{
			codigo: 40813800,
			procedimento: "Embolização de tumor ósseo ou de partes moles"
		},
		{
			codigo: 40813819,
			procedimento: "Embolização de tumor não especificado"
		},
		{
			codigo: 40813827,
			procedimento: "Traqueotomia percutânea orientada por RX ou TC"
		},
		{
			codigo: 40813835,
			procedimento: "Gastrostomia percutânea orientada por RX ou TC"
		},
		{
			codigo: 40813843,
			procedimento: "Colecistostomia percutânea orientada por RX, US ou TC"
		},
		{
			codigo: 40813851,
			procedimento: "Esclerose percutânea de cisto pancreático"
		},
		{
			codigo: 40813860,
			procedimento: "Celostomia percutânea orientada por RX ou TC"
		},
		{
			codigo: 40813878,
			procedimento: "Nefrostomia percutânea orientada por RX, US, TC ou RM"
		},
		{
			codigo: 40813886,
			procedimento: "Pielografia percutânea orientada por RX, US, TC ou RM"
		},
		{
			codigo: 40813894,
			procedimento: "Exérese percutânea de tumor benigno orientada por RX, US, TC ou RM"
		},
		{
			codigo: 40813908,
			procedimento: "Quimioterapia por cateter de tumor de cabeça e pescoço"
		},
		{
			codigo: 40813916,
			procedimento: "Quimioembolização para tratamento de tumor hepático"
		},
		{
			codigo: 40813924,
			procedimento: "Quimioterapia por cateter intra-arterial"
		},
		{
			codigo: 40813932,
			procedimento: "TIPS - anastomose porto-cava percutânea para tratamento de hipertensão portal"
		},
		{
			codigo: 40813940,
			procedimento: "Implante de endoprótese em aneurisma de aorta abdominal ou torácica com stent revestido (stent-graft)"
		},
		{
			codigo: 40813959,
			procedimento: "Implante de endoprótese em dissecção de aorta abdominal ou torácica com stent revestido (stent-graft)"
		},
		{
			codigo: 40813967,
			procedimento: "Tratamento de pseudoaneurisma por compressão com US-Doppler"
		},
		{
			codigo: 40813975,
			procedimento: "Tratamento do vasoespasmo pós-trauma"
		},
		{
			codigo: 40813983,
			procedimento: "Trombectomia mecânica para tratamento de TEP"
		},
		{
			codigo: 40813991,
			procedimento: "Trombectomia mecânica venosa"
		},
		{
			codigo: 40814017,
			procedimento: "Trombectomia medicamentosa para tratamento de TEP"
		},
		{
			codigo: 40814025,
			procedimento: "Trombólise medicamentosa arterial ou venosa - por vaso"
		},
		{
			codigo: 40814033,
			procedimento: "Trombólise medicamentosa arterial ou venosa para tratamento de isquemia mesentérica"
		},
		{
			codigo: 40814041,
			procedimento: "Trombólise medicamentosa em troncos supra-aórticos e intracranianos"
		},
		{
			codigo: 40814050,
			procedimento: "Repermeabilização tubária para tratamento de infertilidade"
		},
		{
			codigo: 40814068,
			procedimento: "Retirada percutânea de cálculos biliares orientada por RX, US ou TC"
		},
		{
			codigo: 40814076,
			procedimento: "Retirada percutânea de cálculos renais orientada por RX, US ou TC"
		},
		{
			codigo: 40814084,
			procedimento: "Retirada percutânea de corpo estranho intravascular"
		},
		{
			codigo: 40814092,
			procedimento: "Osteoplastia ou discectomia percutânea (vertebroplastia e outras)"
		},
		{
			codigo: 40814106,
			procedimento: "Discografia"
		},
		{
			codigo: 40814114,
			procedimento: "Litotripsia mecânica de cálculos renais orientada por RX ou US"
		},
		{
			codigo: 40814122,
			procedimento: "Trituração de calcificação tendínea orientada por RX ou US"
		},
		{
			codigo: 40814130,
			procedimento: "Sinusografia (abscessografia)"
		},
		{
			codigo: 40814149,
			procedimento: "Paracentese orientada por RX ou US"
		},
		{
			codigo: 40814157,
			procedimento: "Manipulação de drenos pós-drenagem (orientada por RX, TC, US ou RM)"
		},
		{
			codigo: 40814165,
			procedimento: "Esclerose percutânea de nódulos benignos dirigida por RX, US, TC ou RM"
		},
		{
			codigo: 40814173,
			procedimento: "Escleroterapia de cistos (renais, hepáticos, ovarianos), orientada por imagem"
		},
		{
			codigo: 40901017,
			procedimento: "US - Globo ocular - bilateral"
		},
		{
			codigo: 40901025,
			procedimento: "US - Globo ocular com Doppler colorido - bilateral"
		},
		{
			codigo: 40901033,
			procedimento: "US - Glândulas salivares (todas)"
		},
		{
			codigo: 40901041,
			procedimento: "US - Torácico extracardíaco"
		},
		{
			codigo: 40901050,
			procedimento: "Ecodopplercardiograma com contraste intracavitário"
		},
		{
			codigo: 40901068,
			procedimento: "Ecodopplercardiograma com contraste para perfusão miocárdica - em repouso"
		},
		{
			codigo: 40901076,
			procedimento: "Ecodopplercardiograma com estresse farmacológico"
		},
		{
			codigo: 40901084,
			procedimento: "Ecodopplercardiograma fetal com mapeamento de fluxo em cores - por feto"
		},
		{
			codigo: 40901092,
			procedimento: "Ecodopplercardiograma transesofágico (inclui transtorácico)"
		},
		{
			codigo: 40901106,
			procedimento: "Ecodopplercardiograma transtorácico"
		},
		{
			codigo: 40901114,
			procedimento: "US - Mamas"
		},
		{
			codigo: 40901122,
			procedimento: "US - Abdome total (abdome superior, rins, bexiga, aorta, veia cava inferior e adrenais)"
		},
		{
			codigo: 40901130,
			procedimento: "US - Abdome superior (fígado, vias biliares, vesícula, pâncreas e baço)"
		},
		{
			codigo: 40901149,
			procedimento: "US - Retroperitônio (grandes vasos ou adrenais)"
		},
		{
			codigo: 40901157,
			procedimento: "Aparelho urinário feminino (rins, ureteres e bexiga)"
		},
		{
			codigo: 40901165,
			procedimento: "Aparelho urinário masculino (rins, ureteres, bexiga e próstata)"
		},
		{
			codigo: 40901173,
			procedimento: "US - Abdome inferior masculino (bexiga, próstata e vesículas seminais)"
		},
		{
			codigo: 40901181,
			procedimento: "US - Abdome inferior feminino (bexiga, útero, ovário e anexos)"
		},
		{
			codigo: 40901190,
			procedimento: "US - Dermatológico - pele e subcutâneo"
		},
		{
			codigo: 40901203,
			procedimento: "US - Órgãos superficiais (tireóide ou escroto ou pênis ou crânio)"
		},
		{
			codigo: 40901211,
			procedimento: "US - Estruturas superficiais (cervical ou axilas ou músculo ou tendão)"
		},
		{
			codigo: 40901220,
			procedimento: "US - Articular (por articulação)"
		},
		{
			codigo: 40901238,
			procedimento: "US - Obstétrica"
		},
		{
			codigo: 40901246,
			procedimento: "US - Obstétrica com Doppler colorido"
		},
		{
			codigo: 40901254,
			procedimento: "US - Obstétrica com translucência nucal"
		},
		{
			codigo: 40901262,
			procedimento: "US - Obstétrica morfológica"
		},
		{
			codigo: 40901270,
			procedimento: "US - Obstétrica gestação múltipla: cada feto"
		},
		{
			codigo: 40901289,
			procedimento: "US - Obstétrica gestação múltipla com Doppler colorido: cada feto"
		},
		{
			codigo: 40901297,
			procedimento: "US - Obstétrica 1º trimestre (endovaginal)"
		},
		{
			codigo: 40901300,
			procedimento: "US - Transvaginal (útero, ovário, anexos e vagina)"
		},
		{
			codigo: 40901319,
			procedimento: "US - Transvaginal para controle de ovulação (3 ou mais exames)"
		},
		{
			codigo: 40901327,
			procedimento: "US - Histerossonografia"
		},
		{
			codigo: 40901335,
			procedimento: "US - Próstata transretal (não inclui abdome inferior masculino)"
		},
		{
			codigo: 40901351,
			procedimento: "Doppler colorido transfontanela"
		},
		{
			codigo: 40901360,
			procedimento: "Doppler colorido de vasos cervicais arteriais bilateral (carótidas e vertebrais)"
		},
		{
			codigo: 40901378,
			procedimento: "Doppler colorido de vasos cervicais venosos bilateral (subclávias e jugulares)"
		},
		{
			codigo: 40901386,
			procedimento: "Doppler colorido de órgão ou estrutura isolada"
		},
		{
			codigo: 40901394,
			procedimento: "Doppler colorido de aorta e artérias renais"
		},
		{
			codigo: 40901408,
			procedimento: "Doppler colorido de aorta e ilíacas"
		},
		{
			codigo: 40901416,
			procedimento: "Doppler colorido de artérias viscerais (mesentéricas superior e inferior e tronco celíaco)"
		},
		{
			codigo: 40901424,
			procedimento: "Doppler colorido de hemangioma"
		},
		{
			codigo: 40901432,
			procedimento: "Doppler colorido de veia cava superior ou inferior"
		},
		{
			codigo: 40901440,
			procedimento: "Doppler colorido peniano com fármaco-indução"
		},
		{
			codigo: 40901459,
			procedimento: "Doppler colorido arterial de membro superior - unilateral"
		},
		{
			codigo: 40901467,
			procedimento: "Doppler colorido venoso de membro superior - unilateral"
		},
		{
			codigo: 40901475,
			procedimento: "Doppler colorido arterial de membro inferior - unilateral"
		},
		{
			codigo: 40901483,
			procedimento: "Doppler colorido venoso de membro inferior - unilateral"
		},
		{
			codigo: 40901491,
			procedimento: "US - Tridimensional - acrescentar ao exame de base"
		},
		{
			codigo: 40901505,
			procedimento: "US - Obstétrica: perfil biofísico fetal"
		},
		{
			codigo: 40901513,
			procedimento: "Doppler colorido de artérias penianas (sem fármaco indução)"
		},
		{
			codigo: 40901521,
			procedimento: "Ultrassonografia biomicroscópica - monocular"
		},
		{
			codigo: 40901530,
			procedimento: "Ultrassonografia diagnóstica - monocular"
		},
		{
			codigo: 40901548,
			procedimento: "Doppler convencional órgão/estrutura isolada"
		},
		{
			codigo: 40901556,
			procedimento: "Ecocardiografia fetal gestação múltipla"
		},
		{
			codigo: 40901564,
			procedimento: "Ecoencefalograma"
		},
		{
			codigo: 40901572,
			procedimento: "Ultrassom com doppler abdôme total e pelve feminino"
		},
		{
			codigo: 40901580,
			procedimento: "US - Estudo sonográfico dinâmico das vias urinárias (masculino)"
		},
		{
			codigo: 40901599,
			procedimento: "US - Estudo sonográfico dinâmico das vias urinárias (feminino)"
		},
		{
			codigo: 40901602,
			procedimento: "Doppler transcraniano"
		},
		{
			codigo: 40901610,
			procedimento: "US - Crânio para criança"
		},
		{
			codigo: 40901629,
			procedimento: "US - Ecodopplercardiograma com análise do sincronismo cardíaco"
		},
		{
			codigo: 40901637,
			procedimento: "US - Ecocardiograma com Doppler convencional - artérias"
		},
		{
			codigo: 40901645,
			procedimento: "US - Ecocardiograma com Doppler convencional - carótidas"
		},
		{
			codigo: 40901653,
			procedimento: "US - Ecocardiograma com Doppler tecidual para ressincronização"
		},
		{
			codigo: 40901661,
			procedimento: "US - Ecodoppler de carótidas"
		},
		{
			codigo: 40901670,
			procedimento: "US - Prova de Boyden"
		},
		{
			codigo: 40901688,
			procedimento: "US - Adicional de reconstrução 3D - ECO"
		},
		{
			codigo: 40901696,
			procedimento: "US - Ecodopplercardiograma com estresse físico"
		},
		{
			codigo: 40901700,
			procedimento: "Ecodopplercardiograma sob estresse físico ou farmacológico com contraste"
		},
		{
			codigo: 40901718,
			procedimento: "Ecodopplercardiograma para ajuste de marca-passo"
		},
		{
			codigo: 40901726,
			procedimento: "US - Neurossonografia fetal"
		},
		{
			codigo: 40901734,
			procedimento: "US - Peça cirúgica"
		},
		{
			codigo: 40901742,
			procedimento: "US - Transretal Radial"
		},
		{
			codigo: 40901750,
			procedimento: "US - Próstata (via abdominal)"
		},
		{
			codigo: 40901769,
			procedimento: "US - Aparelho urinário (rins, ureteres e bexiga)"
		},
		{
			codigo: 40901793,
			procedimento: "Elastografia hepática ultrassônica"
		},
		{
			codigo: 40902013,
			procedimento: "US - Obstétrica: com amniocentese"
		},
		{
			codigo: 40902021,
			procedimento: "US - Obstétrica 1º trimestre com punção: biópsia ou aspirativa"
		},
		{
			codigo: 40902030,
			procedimento: "US - Próstata transretal com biópsia - até 8 fragmentos"
		},
		{
			codigo: 40902048,
			procedimento: "US - Próstata transretal com biópsia - mais de 8 fragmentos"
		},
		{
			codigo: 40902056,
			procedimento: "US - Intra-operatório"
		},
		{
			codigo: 40902064,
			procedimento: "Doppler colorido intra-operatório"
		},
		{
			codigo: 40902072,
			procedimento: "Ecodopplercardiograma transoperatório (transesofágico ou epicárdico) (1ª hora)"
		},
		{
			codigo: 40902080,
			procedimento: "Ecodopplercardiograma transoperatório (transesofágico ou epicárdico) - por hora suplementar"
		},
		{
			codigo: 40902110,
			procedimento: "Drenagem percutânea orientada por US (acrescentar o exame de base)"
		},
		{
			codigo: 40902129,
			procedimento: "Redução de invaginação intestinal por enema, orientada por US (acrescentar o exame de base)"
		},
		{
			codigo: 40902137,
			procedimento: "Monitorização por Doppler transcraniano"
		},
		{
			codigo: 40902145,
			procedimento: "Ecodopplercardiograma intracardíaco"
		},
		{
			codigo: 41001010,
			procedimento: "TC - Crânio ou sela túrcica ou órbitas"
		},
		{
			codigo: 41001028,
			procedimento: "TC - Mastóides ou orelhas"
		},
		{
			codigo: 41001036,
			procedimento: "TC - Face ou seios da face"
		},
		{
			codigo: 41001044,
			procedimento: "TC - Articulações temporomandibulares"
		},
		{
			codigo: 41001052,
			procedimento: "TC - Dental (dentascan)"
		},
		{
			codigo: 41001060,
			procedimento: "TC - Pescoço (partes moles, laringe, tireóide, faringe e glândulas salivares)"
		},
		{
			codigo: 41001079,
			procedimento: "TC - Tórax"
		},
		{
			codigo: 41001087,
			procedimento: "TC - Coração - para avaliação do escore de cálcio coronariano"
		},
		{
			codigo: 41001095,
			procedimento: "TC - Abdome total (abdome superior, pelve e retroperitônio)"
		},
		{
			codigo: 41001109,
			procedimento: "TC - Abdome superior"
		},
		{
			codigo: 41001117,
			procedimento: "TC - Pelve ou bacia"
		},
		{
			codigo: 41001125,
			procedimento: "TC - Coluna cervical ou dorsal ou lombo-sacra (até 3 segmentos)"
		},
		{
			codigo: 41001133,
			procedimento: "TC - Coluna - segmento adicional"
		},
		{
			codigo: 41001141,
			procedimento: "TC - Articulação (esternoclavicular ou ombro ou cotovelo ou punho ou sacroilíacas ou coxofemoral ou joelho ou tornozelo) - unilateral"
		},
		{
			codigo: 41001150,
			procedimento: "TC - Segmento apendicular (braço ou antebraço ou mão ou coxa ou perna ou pé) - unilateral"
		},
		{
			codigo: 41001168,
			procedimento: "Angiotomografia (crânio ou pescoço ou tórax ou abdome superior ou pelve) - arterial ou venosa"
		},
		{
			codigo: 41001176,
			procedimento: "Angiotomografia de aorta torácica"
		},
		{
			codigo: 41001184,
			procedimento: "Angiotomografia de aorta abdominal"
		},
		{
			codigo: 41001192,
			procedimento: "TC - Escanometria digital"
		},
		{
			codigo: 41001206,
			procedimento: "TC - Reconstrução tridimensional de qualquer órgão ou estrutura - acrescentar ao exame de base"
		},
		{
			codigo: 41001214,
			procedimento: "Endoscopia virtual de qualquer órgão ou estrutura por TC - acrescentar ao exame de base"
		},
		{
			codigo: 41001222,
			procedimento: "TC para PET dedicado oncológico"
		},
		{
			codigo: 41001230,
			procedimento: "TC - Angiotomografia coronariana"
		},
		{
			codigo: 41001249,
			procedimento: "TC - Artérias de membro superior"
		},
		{
			codigo: 41001257,
			procedimento: "TC - Cisternografia por tomografia"
		},
		{
			codigo: 41001265,
			procedimento: "TC - Colonoscopia virtual"
		},
		{
			codigo: 41001273,
			procedimento: "TC - Mandíbula"
		},
		{
			codigo: 41001281,
			procedimento: "TC - Maxilar"
		},
		{
			codigo: 41001290,
			procedimento: "PET-CT cardiológico"
		},
		{
			codigo: 41001303,
			procedimento: "PET-CT infecção"
		},
		{
			codigo: 41001311,
			procedimento: "PET-CT neurológico"
		},
		{
			codigo: 41001320,
			procedimento: "TC - Tomossíntese digital mamária"
		},
		{
			codigo: 41001338,
			procedimento: "TC - Radiocirurgia esterotáxica"
		},
		{
			codigo: 41001346,
			procedimento: "TC - Multifase (dinâmica)"
		},
		{
			codigo: 41001354,
			procedimento: "TC - Articular dinâmica"
		},
		{
			codigo: 41001362,
			procedimento: "TC - Vias urinárias (Urotomografia)"
		},
		{
			codigo: 41001370,
			procedimento: "Angiotomografia arterial de crânio"
		},
		{
			codigo: 41001389,
			procedimento: "Angiotomografia venosa de crânio"
		},
		{
			codigo: 41001397,
			procedimento: "Angiotomografia arterial de pescoço"
		},
		{
			codigo: 41001400,
			procedimento: "Angiotomografia venosa de pescoço"
		},
		{
			codigo: 41001419,
			procedimento: "Angiotomografia arterial de tórax"
		},
		{
			codigo: 41001427,
			procedimento: "Angiotomografia venosa de tórax"
		},
		{
			codigo: 41001435,
			procedimento: "Angiotomografia arterial de abdome superior"
		},
		{
			codigo: 41001443,
			procedimento: "Angiotomografia venosa de abdome superior"
		},
		{
			codigo: 41001451,
			procedimento: "Angiotomografia arterial de pelve"
		},
		{
			codigo: 41001460,
			procedimento: "Angiotomografia venosa de pelve"
		},
		{
			codigo: 41001478,
			procedimento: "Angiotomografia arterial de membro inferior"
		},
		{
			codigo: 41001486,
			procedimento: "Angiotomografia venosa de membro inferior"
		},
		{
			codigo: 41001494,
			procedimento: "Angiotomografia arterial de membro superior"
		},
		{
			codigo: 41001508,
			procedimento: "Angiotomografia venosa de membro superior"
		},
		{
			codigo: 41001516,
			procedimento: "Angiotomografia arterial pulmonar"
		},
		{
			codigo: 41001524,
			procedimento: "Angiotomografia venosa pulmonar"
		},
		{
			codigo: 41001532,
			procedimento: "TC para planejamento oncológico"
		},
		{
			codigo: 41002016,
			procedimento: "Tomomielografia (até 3 segmentos) - acrescentar a TC da coluna e incluir a punção"
		},
		{
			codigo: 41002024,
			procedimento: "Punção aspirativa orientada por TC (acrescentar o exame de base)"
		},
		{
			codigo: 41002032,
			procedimento: "Drenagem percutânea orientada por TC (acrescentar o exame de base)"
		},
		{
			codigo: 41002040,
			procedimento: "TC - Punção para introdução de contraste (acrescentar o exame de base)"
		},
		{
			codigo: 41002059,
			procedimento: "Artro-TC"
		},
		{
			codigo: 41101014,
			procedimento: "RM - Crânio (encéfalo)"
		},
		{
			codigo: 41101022,
			procedimento: "RM - Sela túrcica (hipófise)"
		},
		{
			codigo: 41101030,
			procedimento: "RM - Base do crânio"
		},
		{
			codigo: 41101049,
			procedimento: "Estudo funcional (mapeamento cortical por RM)"
		},
		{
			codigo: 41101057,
			procedimento: "Perfusão cerebral por RM"
		},
		{
			codigo: 41101065,
			procedimento: "Espectroscopia por RM"
		},
		{
			codigo: 41101073,
			procedimento: "RM - Órbita bilateral"
		},
		{
			codigo: 41101081,
			procedimento: "RM - Ossos temporais bilateral"
		},
		{
			codigo: 41101090,
			procedimento: "RM - Face (inclui seios da face)"
		},
		{
			codigo: 41101103,
			procedimento: "RM - Articulação temporomandibular (bilateral)"
		},
		{
			codigo: 41101111,
			procedimento: "RM - Pescoço (nasofaringe, orofaringe, laringe, traquéia, tireóide, paratireóide)"
		},
		{
			codigo: 41101120,
			procedimento: "RM - Tórax (mediastino, pulmão, parede torácica)"
		},
		{
			codigo: 41101138,
			procedimento: "RM - Coração - morfológico e funcional"
		},
		{
			codigo: 41101146,
			procedimento: "RM - Coração - morfológico e funcional + perfusão + estresse"
		},
		{
			codigo: 41101154,
			procedimento: "RM - Coração - morfológico e funcional + perfusão + viabilidade miocárdica"
		},
		{
			codigo: 41101162,
			procedimento: "Mama (unilateral)"
		},
		{
			codigo: 41101170,
			procedimento: "RM - Abdome superior (fígado, pâncreas, baço, rins, supra-renais, retroperitônio)"
		},
		{
			codigo: 41101189,
			procedimento: "RM - Pelve (não inclui articulações coxofemorais)"
		},
		{
			codigo: 41101197,
			procedimento: "RM - Fetal"
		},
		{
			codigo: 41101200,
			procedimento: "RM - Pênis"
		},
		{
			codigo: 41101219,
			procedimento: "RM - Bolsa escrotal"
		},
		{
			codigo: 41101227,
			procedimento: "RM - Coluna cervical ou dorsal ou lombar"
		},
		{
			codigo: 41101235,
			procedimento: "RM - Fluxo liquórico (como complementar)"
		},
		{
			codigo: 41101243,
			procedimento: "RM - Plexo braquial (desfiladeiro torácico) ou lombossacral (não inclui coluna cervical ou lombar)"
		},
		{
			codigo: 41101251,
			procedimento: "RM - Membro superior unilateral (não inclui mão e articulações)"
		},
		{
			codigo: 41101260,
			procedimento: "RM - Mão (não inclui punho)"
		},
		{
			codigo: 41101278,
			procedimento: "RM - Bacia (articulações sacroilíacas)"
		},
		{
			codigo: 41101286,
			procedimento: "RM - Coxa (unilateral)"
		},
		{
			codigo: 41101294,
			procedimento: "RM - Perna (unilateral)"
		},
		{
			codigo: 41101308,
			procedimento: "RM - Pé (antepé) - não inclui tornozelo"
		},
		{
			codigo: 41101316,
			procedimento: "RM - Articular (por articulação)"
		},
		{
			codigo: 41101324,
			procedimento: "Angio-RM (crânio ou pescoço ou tórax ou abdome superior ou pelve) - arterial ou venosa"
		},
		{
			codigo: 41101332,
			procedimento: "Angio-RM de aorta torácica"
		},
		{
			codigo: 41101340,
			procedimento: "Angio-RM de aorta abdominal"
		},
		{
			codigo: 41101359,
			procedimento: "Hidro-RM (colângio-RM ou uro-RM ou mielo-RM ou sialo-RM ou cistografia por RM)"
		},
		{
			codigo: 41101367,
			procedimento: "RM - Endocavitária (endorretal ou endovaginal)"
		},
		{
			codigo: 41101375,
			procedimento: "Endoscopia virtual por RM - acrescentar ao exame de base"
		},
		{
			codigo: 41101383,
			procedimento: "RM - Reconstrução tridimensional - acrescentar ao exame de base"
		},
		{
			codigo: 41101391,
			procedimento: "RM artérias membros inferiores"
		},
		{
			codigo: 41101430,
			procedimento: "RM - Avaliação de ferro (coração ou fígado)"
		},
		{
			codigo: 41101448,
			procedimento: "RM - Tractografia"
		},
		{
			codigo: 41101456,
			procedimento: "RM - Difusão por RM"
		},
		{
			codigo: 41101464,
			procedimento: "RM - Multiparamétrica transretal da próstata"
		},
		{
			codigo: 41101472,
			procedimento: "RM - Planejamento"
		},
		{
			codigo: 41101480,
			procedimento: "RM - Mama (bilateral)"
		},
		{
			codigo: 41101499,
			procedimento: "Angio-RM arterial pulmonar"
		},
		{
			codigo: 41101502,
			procedimento: "Angio-RM venosa pulmonar"
		},
		{
			codigo: 41101510,
			procedimento: "Angio-RM arterial de abdome superior"
		},
		{
			codigo: 41101529,
			procedimento: "Angio-RM venosa de abdome superior"
		},
		{
			codigo: 41101537,
			procedimento: "Angio-RM arterial de crânio"
		},
		{
			codigo: 41101545,
			procedimento: "Angio-RM venosa de crânio"
		},
		{
			codigo: 41101553,
			procedimento: "Angio-RM arterial de membro inferior (unilateral)"
		},
		{
			codigo: 41101561,
			procedimento: "Angio-RM venosa de membro inferior (unilateral)"
		},
		{
			codigo: 41101570,
			procedimento: "Angio-RM arterial de membro superior (unilateral)"
		},
		{
			codigo: 41101588,
			procedimento: "Angio-RM venosa de membro superior (unilateral)"
		},
		{
			codigo: 41101596,
			procedimento: "Angio-RM arterial de pelve"
		},
		{
			codigo: 41101600,
			procedimento: "Angio-RM venosa de pelve"
		},
		{
			codigo: 41101618,
			procedimento: "Angio-RM arterial de pescoço"
		},
		{
			codigo: 41101626,
			procedimento: "Angio-RM venosa de pescoço"
		},
		{
			codigo: 41101634,
			procedimento: "RM - Endorretal"
		},
		{
			codigo: 41101642,
			procedimento: "RM - Endovaginal"
		},
		{
			codigo: 41101650,
			procedimento: "RM - Neuronavegador"
		},
		{
			codigo: 41101669,
			procedimento: "RM para planejamento oncológico"
		},
		{
			codigo: 41102010,
			procedimento: "Artro-RM (incluir a punção articular) - por articulação"
		},
		{
			codigo: 41203011,
			procedimento: "Betaterapia (placa de estrôncio) - por campo"
		},
		{
			codigo: 41203020,
			procedimento: "Radiocirurgia (RTC) - nível 1, lesão única e/ou um isocentro - por tratamento"
		},
		{
			codigo: 41203038,
			procedimento: "Radiocirurgia (RTC) - nível 2, duas lesões e/ou dois a quatro isocentros - por tratamento"
		},
		{
			codigo: 41203046,
			procedimento: "Radiocirurgia (RTC) - nível 3, três lesões e/ou de mais de quatro isocentros - por tratamento"
		},
		{
			codigo: 41203054,
			procedimento: "Radioterapia  com Modulação da Intensidade do Feixe (IMRT) - por tratamento"
		},
		{
			codigo: 41203062,
			procedimento: "Radioterapia Conformada Tridimensional (RCT-3D)  com Acelerador Linear - por tratamento"
		},
		{
			codigo: 41203070,
			procedimento: "Radioterapia Convencional de Megavoltagem com Acelerador Linear com Fótons e Elétrons - por campo"
		},
		{
			codigo: 41203089,
			procedimento: "Radioterapia Convencional de Megavoltagem com Acelerador Linear só com Fótons - por campo"
		},
		{
			codigo: 41203097,
			procedimento: "Radioterapia Convencional de Megavoltagem com Unidade de Telecobalto - por campo"
		},
		{
			codigo: 41203100,
			procedimento: "Radioterapia de Corpo Inteiro - por tratamento"
		},
		{
			codigo: 41203119,
			procedimento: "Radioterapia de Meio Corpo (HBI) - por dia de tratamento"
		},
		{
			codigo: 41203127,
			procedimento: "Radioterapia de Pele Total (TSI) - por tratamento"
		},
		{
			codigo: 41203135,
			procedimento: "Radioterapia Estereotática - 1º dia de tratamento"
		},
		{
			codigo: 41203143,
			procedimento: "Radioterapia Estereotática - por dia subsequente"
		},
		{
			codigo: 41203151,
			procedimento: "Radioterapia Externa de Ortovoltagem (Roentgenterapia) - por campo"
		},
		{
			codigo: 41203160,
			procedimento: "Radioterapia Intra-operatória (IORT) - por tratamento"
		},
		{
			codigo: 41203178,
			procedimento: "Radioterapia Rotatória com acelerador linear com fótons e elétrons - por volume tratado e por dia"
		},
		{
			codigo: 41203186,
			procedimento: "Radioterapia Rotatória com acelerador linear só com fótons - por volume tratado e por dia"
		},
		{
			codigo: 41203194,
			procedimento: "Radioterapia Rotatória com unidade de cobalto - por volume tratado e por dia"
		},
		{
			codigo: 41203208,
			procedimento: "Sangues e derivados (por unidade)"
		},
		{
			codigo: 41204018,
			procedimento: "Colimação individual - 1 por incidência planejada"
		},
		{
			codigo: 41204026,
			procedimento: "Filme de verificação (cheque-filme) - 1 por incidência planejada/semana - filme a parte"
		},
		{
			codigo: 41204034,
			procedimento: "Planejamento de tratamento computadorizado - 1 por volume tratado"
		},
		{
			codigo: 41204042,
			procedimento: "Planejamento de tratamento computadorizado tridimensional - 1 por volume tratado"
		},
		{
			codigo: 41204050,
			procedimento: "Planejamento de tratamento simples (não computadorizado) - 1 por volume tratado"
		},
		{
			codigo: 41204069,
			procedimento: "Simulação de tratamento complexa (com tomografia e com contraste) - 1 por volume tratado"
		},
		{
			codigo: 41204077,
			procedimento: "Simulação de tratamento intermediária (com tomografia) - 1 por volume tratado"
		},
		{
			codigo: 41204085,
			procedimento: "Simulação de tratamento simples (sem tomografia computadorizada) - 1 por volume tratado"
		},
		{
			codigo: 41204093,
			procedimento: "Sistemas de imobilização - cabeça (máscaras) ou membros - 1 por tratamento"
		},
		{
			codigo: 41204107,
			procedimento: "Sistemas de imobilização - tórax, abdome ou pélvis - 1 por tratamento"
		},
		{
			codigo: 41205014,
			procedimento: "Braquiterapia endoluminal de alta taxa de dose (BATD) - por inserção"
		},
		{
			codigo: 41205022,
			procedimento: "Braquiterapia endoluminal de baixa taxa de dose (BBTD) - por inserção"
		},
		{
			codigo: 41205030,
			procedimento: "Braquiterapia intersticial de alta taxa de dose (BATD) - por inserção"
		},
		{
			codigo: 41205049,
			procedimento: "Braquiterapia intersticial de baixa taxa de dose (BBTD) - com Césio - por inserção"
		},
		{
			codigo: 41205057,
			procedimento: "Braquiterapia intersticial de baixa taxa de dose (BBTD) permanente de próstata - por tratamento"
		},
		{
			codigo: 41205065,
			procedimento: "Braquiterapia intersticial de baixa taxa de dose (BBTD) com ouro, irídio ou iodo - por tratamento"
		},
		{
			codigo: 41205073,
			procedimento: "Braquiterapia intracavitária de alta taxa de dose (BATD) - por inserção"
		},
		{
			codigo: 41205081,
			procedimento: "Braquiterapia intracavitária de baixa taxa de dose (BBTD) com Césio - por inserção"
		},
		{
			codigo: 41205090,
			procedimento: "Braquiterapia oftálmica de baixa taxa de dose (BBTD) - por inserção"
		},
		{
			codigo: 41205103,
			procedimento: "Braquiterapia por moldagem ou contato de baixa taxa de dose (BBTD) com Césio - por inserção"
		},
		{
			codigo: 41205111,
			procedimento: "Braquiterapia por moldagem ou contato de baixa taxa de dose (BBTD) com ouro, irídio ou iodo - por tratamento"
		},
		{
			codigo: 41205120,
			procedimento: "Braquiterapia por moldagem ou contato, de alta taxa de dose (BATD) - por inserção"
		},
		{
			codigo: 41206010,
			procedimento: "Filme de verificação (cheque-filme) de braquiterapia - 2 por inserção - filme à parte"
		},
		{
			codigo: 41206029,
			procedimento: "Colocação ou retirada da placa oftálmica - 1 colocação e 1 retirada por tratamento"
		},
		{
			codigo: 41206037,
			procedimento: "Colocação ou retirada dos cateteres - 1 colocação e 1 retirada por inserção"
		},
		{
			codigo: 41206045,
			procedimento: "Planejamento computadorizado de braquiterapia - 1 por inserção"
		},
		{
			codigo: 41206053,
			procedimento: "Planejamento computadorizado tridimensional de braquiterapia - 1 por inserção"
		},
		{
			codigo: 41206061,
			procedimento: "Planejamento não-computadorizado de braquiterapia - 1 por inserção"
		},
		{
			codigo: 41206070,
			procedimento: "Simulação de braquiterapia - 1 por inserção"
		},
		{
			codigo: 41301013,
			procedimento: "Angiofluoresceinografia - monocular"
		},
		{
			codigo: 41301021,
			procedimento: "Angiografia com indocianina verde - monocular"
		},
		{
			codigo: 41301030,
			procedimento: "Avaliação órbito-palpebral-exoftalmometria - binocular"
		},
		{
			codigo: 41301048,
			procedimento: "Bioimpedanciometria (ambulatorial) exame"
		},
		{
			codigo: 41301056,
			procedimento: "Biópsia do vilo corial"
		},
		{
			codigo: 41301064,
			procedimento: "Calorimetria indireta (ambulatorial) exame"
		},
		{
			codigo: 41301072,
			procedimento: "Campimetria manual - monocular"
		},
		{
			codigo: 41301080,
			procedimento: "Ceratoscopia computadorizada - monocular"
		},
		{
			codigo: 41301099,
			procedimento: "Coleta de material cérvico-vaginal"
		},
		{
			codigo: 41301102,
			procedimento: "Colposcopia (cérvice uterina e vagina)"
		},
		{
			codigo: 41301110,
			procedimento: "Cordocentese"
		},
		{
			codigo: 41301129,
			procedimento: "Curva tensional diária - binocular"
		},
		{
			codigo: 41301137,
			procedimento: "Dermatoscopia (por lesão)"
		},
		{
			codigo: 41301145,
			procedimento: "Ereção fármaco-induzida"
		},
		{
			codigo: 41301153,
			procedimento: "Estéreo-foto de papila - monocular"
		},
		{
			codigo: 41301161,
			procedimento: "Estesiometria (por membro)"
		},
		{
			codigo: 41301170,
			procedimento: "Avaliação de vias lacrimais (Teste de Schirmer) - monocular"
		},
		{
			codigo: 41301188,
			procedimento: "Exame a fresco do conteúdo vaginal e cervical"
		},
		{
			codigo: 41301200,
			procedimento: "Exame de motilidade ocular (teste ortóptico) - binocular"
		},
		{
			codigo: 41301218,
			procedimento: "Exame micológico - cultura e identificação de colônia"
		},
		{
			codigo: 41301226,
			procedimento: "Exame micológico direto (por local)"
		},
		{
			codigo: 41301234,
			procedimento: "Fotodermatoscopia (por lesão)"
		},
		{
			codigo: 41301242,
			procedimento: "Gonioscopia - binocular"
		},
		{
			codigo: 41301250,
			procedimento: "Mapeamento de retina (oftalmoscopia indireta) - monocular"
		},
		{
			codigo: 41301269,
			procedimento: "Microscopia especular de córnea - monocular"
		},
		{
			codigo: 41301277,
			procedimento: "Oftalmodinamometria - monocular"
		},
		{
			codigo: 41301285,
			procedimento: "Peniscopia (inclui bolsa escrotal)"
		},
		{
			codigo: 41301307,
			procedimento: "Potencial de acuidade visual - monocular"
		},
		{
			codigo: 41301315,
			procedimento: "Retinografia (só honorário) monocular"
		},
		{
			codigo: 41301323,
			procedimento: "Tonometria - binocular"
		},
		{
			codigo: 41301331,
			procedimento: "Tricograma"
		},
		{
			codigo: 41301340,
			procedimento: "Urodinâmica completa"
		},
		{
			codigo: 41301358,
			procedimento: "Urofluxometria"
		},
		{
			codigo: 41301366,
			procedimento: "Visão subnormal - monocular"
		},
		{
			codigo: 41301374,
			procedimento: "Vulvoscopia (vulva e períneo)"
		},
		{
			codigo: 41301382,
			procedimento: "Capilaroscopia periungueal"
		},
		{
			codigo: 41301390,
			procedimento: "Coleta de raspado dérmico em lesões e sítios específicos para baciloscopia (por sítio)"
		},
		{
			codigo: 41301404,
			procedimento: "Avaliação da função muscular por movimento manual (por membro)"
		},
		{
			codigo: 41301412,
			procedimento: "Calorimetria direta"
		},
		{
			codigo: 41301420,
			procedimento: "Biomicroscopia de fundo"
		},
		{
			codigo: 41301439,
			procedimento: "Fundoscopia sob medríases - binocular"
		},
		{
			codigo: 41301447,
			procedimento: "Glare (BAT) - binocular"
		},
		{
			codigo: 41301455,
			procedimento: "Olfatometria"
		},
		{
			codigo: 41301463,
			procedimento: "Triagem auditiva neonatal/infantil"
		},
		{
			codigo: 41301471,
			procedimento: "Teste do reflexo vermelho em recém nato (teste do olhinho)"
		},
		{
			codigo: 41301480,
			procedimento: "Ceratoscopia computadorizada da córnea por orbscan, olho"
		},
		{
			codigo: 41301498,
			procedimento: "Exame neuro oftalmlógico"
		},
		{
			codigo: 41301510,
			procedimento: "Topografia do disco óptico - HRT - binocular"
		},
		{
			codigo: 41301528,
			procedimento: "Cauterização de alta frequência em sistema genital e reprodutor feminino"
		},
		{
			codigo: 41301536,
			procedimento: "Colposcopia anal"
		},
		{
			codigo: 41301544,
			procedimento: "Colposcopia por vídeo"
		},
		{
			codigo: 41301549,
			procedimento: "Campimetria blue-yellow (perimetria azul amarelo)"
		},
		{
			codigo: 41301552,
			procedimento: "Vulvoscopia por vídeo"
		},
		{
			codigo: 41401018,
			procedimento: "Avaliação da função muscular (por movimento) com equipamento informatizado (isocinético)"
		},
		{
			codigo: 41401026,
			procedimento: "Avaliação da função muscular (por movimento) com equipamento mecânico (dinamometria/módulos de cargas)"
		},
		{
			codigo: 41401042,
			procedimento: "Prova de auto-rotação cefálica"
		},
		{
			codigo: 41401050,
			procedimento: "Prova de Lombard"
		},
		{
			codigo: 41401069,
			procedimento: "Provas imuno-alérgicas para bactérias (por antígeno)"
		},
		{
			codigo: 41401077,
			procedimento: "Provas imuno-alérgicas para fungos (por antígeno)"
		},
		{
			codigo: 41401085,
			procedimento: "Teste da histamina (duas áreas testadas)"
		},
		{
			codigo: 41401093,
			procedimento: "Teste de adaptação patológica (tone decay test)"
		},
		{
			codigo: 41401107,
			procedimento: "Teste de broncoprovocação"
		},
		{
			codigo: 41401115,
			procedimento: "Teste de caminhada de 6 minutos"
		},
		{
			codigo: 41401123,
			procedimento: "Teste de desempenho anaeróbico em laboratório (T. de Wingate)"
		},
		{
			codigo: 41401131,
			procedimento: "Teste de equilíbrio peritoneal (PET)"
		},
		{
			codigo: 41401140,
			procedimento: "Teste de exercício dos 4 segundos"
		},
		{
			codigo: 41401158,
			procedimento: "Teste de exercício em ergômetro   com  determinação  do lactato sanguíneo"
		},
		{
			codigo: 41401166,
			procedimento: "Teste de exercício em ergômetro com   realização  de gasometria arterial"
		},
		{
			codigo: 41401174,
			procedimento: "Teste de exercício em ergômetro com  monitorização  da frequência cardíaca"
		},
		{
			codigo: 41401182,
			procedimento: "Teste de exercício em ergômetro com  monitorização  do eletrocardiograma"
		},
		{
			codigo: 41401190,
			procedimento: "Teste de exercício em ergômetro com medida de gases expirados (teste cardiopulmonar de exercício) com qualquer ergômetro"
		},
		{
			codigo: 41401204,
			procedimento: "Teste de exercício em ergômetro com medida de gases expirados e eletrocardiograma"
		},
		{
			codigo: 41401212,
			procedimento: "Teste de glicerol (com audiometria tonal limiar pré e pós)"
		},
		{
			codigo: 41401220,
			procedimento: "Teste de glicerol (com eletrococleografia pré e pós)"
		},
		{
			codigo: 41401239,
			procedimento: "Teste de Hilger para paralisia facial"
		},
		{
			codigo: 41401247,
			procedimento: "Teste de Huhner"
		},
		{
			codigo: 41401255,
			procedimento: "Teste de Mitsuda"
		},
		{
			codigo: 41401263,
			procedimento: "Teste de prótese auditiva"
		},
		{
			codigo: 41401271,
			procedimento: "Teste de sensibilidade de contraste ou de cores - monocular"
		},
		{
			codigo: 41401280,
			procedimento: "Teste de SISI"
		},
		{
			codigo: 41401298,
			procedimento: "Teste para broncoespasmo de exercício"
		},
		{
			codigo: 41401301,
			procedimento: "Teste provocativo para glaucoma - binocular"
		},
		{
			codigo: 41401310,
			procedimento: "Testes aeróbicos em campo com determinação do lactato sanguíneo"
		},
		{
			codigo: 41401328,
			procedimento: "Testes aeróbicos em campo com medida de gases expirados"
		},
		{
			codigo: 41401336,
			procedimento: "Testes aeróbicos em campo com telemetria da frequência cardíaca"
		},
		{
			codigo: 41401344,
			procedimento: "Testes anaeróbicos em campo com determinação do lactato sanguíneo"
		},
		{
			codigo: 41401352,
			procedimento: "Testes anaeróbicos em campo sem determinação do lactato sanguíneo"
		},
		{
			codigo: 41401360,
			procedimento: "Testes cutâneo-alérgicos para alérgenos da poeira"
		},
		{
			codigo: 41401379,
			procedimento: "Testes cutâneo-alérgicos para alimentos"
		},
		{
			codigo: 41401387,
			procedimento: "Testes cutâneo-alérgicos para fungos"
		},
		{
			codigo: 41401395,
			procedimento: "Testes cutâneo-alérgicos para insetos hematófagos"
		},
		{
			codigo: 41401409,
			procedimento: "Testes cutâneo-alérgicos para pólens"
		},
		{
			codigo: 41401417,
			procedimento: "Testes de aptidão em laboratório (agilidade, equilíbrio, tempo de reação e coordenação)"
		},
		{
			codigo: 41401425,
			procedimento: "Testes de contato - até 30 substâncias"
		},
		{
			codigo: 41401433,
			procedimento: "Testes de contato - por substância, acima de 30"
		},
		{
			codigo: 41401441,
			procedimento: "Testes de contato por fotossensibilização - até 30 substâncias"
		},
		{
			codigo: 41401450,
			procedimento: "Testes de contato por fotossensibilização - por substância, acima de 30"
		},
		{
			codigo: 41401468,
			procedimento: "Testes do desenvolvimento (escala de Denver e outras)"
		},
		{
			codigo: 41401476,
			procedimento: "Testes vestibulares, com prova calórica, com eletronistagmografia"
		},
		{
			codigo: 41401484,
			procedimento: "Testes vestibulares, com prova calórica, sem eletronistagmografia"
		},
		{
			codigo: 41401492,
			procedimento: "Testes vestibulares, com vecto-eletronistagmografia"
		},
		{
			codigo: 41401514,
			procedimento: "Oximetria não invasiva"
		},
		{
			codigo: 41401522,
			procedimento: "Teste cutâneo-alérgicos para látex"
		},
		{
			codigo: 41401530,
			procedimento: "Teste cutâneo-alérgicos Epitelis de Animais"
		},
		{
			codigo: 41401549,
			procedimento: "Teste de monitorização contínua da glicose (TMCG)"
		},
		{
			codigo: 41401557,
			procedimento: "Repertorização"
		},
		{
			codigo: 41401565,
			procedimento: "Teste de avaliação geriátrica global"
		},
		{
			codigo: 41401573,
			procedimento: "Estudo cito-alergológico (ECA)"
		},
		{
			codigo: 41401581,
			procedimento: "Teste de Heald"
		},
		{
			codigo: 41401590,
			procedimento: "Teste de imagens"
		},
		{
			codigo: 41401603,
			procedimento: "Teste de Teller - binocular"
		},
		{
			codigo: 41401611,
			procedimento: "Teste de Wepmann"
		},
		{
			codigo: 41401620,
			procedimento: "Teste sensibilidade ao sal"
		},
		{
			codigo: 41401638,
			procedimento: "Teste suplementar de sensibilidade"
		},
		{
			codigo: 41401646,
			procedimento: "Testes cutâneos de contato (patch tests)"
		},
		{
			codigo: 41401654,
			procedimento: "Teste de fluxo salivar"
		},
		{
			codigo: 41401662,
			procedimento: "Teste de estimulação muscúlo-esquelética \"in vitro\" (mínimo seis)"
		},
		{
			codigo: 41401670,
			procedimento: "Teste de fibronectina fetal - indicador bioquímico para parto prematuro"
		},
		{
			codigo: 41401689,
			procedimento: "Metabolismo de repouso"
		},
		{
			codigo: 41401697,
			procedimento: "Estudo da halitose"
		},
		{
			codigo: 41401700,
			procedimento: "Teste de Wada"
		},
		{
			codigo: 41401719,
			procedimento: "Teste rápido para detecção da PAMG-1 para diagnóstico de ruptura de membranas fetais"
		},
		{
			codigo: 41401751,
			procedimento: "Teste de contato bateria cosméticos"
		},
		{
			codigo: 41401760,
			procedimento: "Teste de contato bateria regional"
		},
		{
			codigo: 41401778,
			procedimento: "Teste de contato bateria capilar"
		},
		{
			codigo: 41401786,
			procedimento: "Teste de contato bateria unhas"
		},
		{
			codigo: 41401794,
			procedimento: "Teste de contato bateria medicamentos/corticoides"
		},
		{
			codigo: 41401808,
			procedimento: "Teste de contato bateria agentes ocupacionais"
		},
		{
			codigo: 41501012,
			procedimento: "Biometria ultrassônica - monocular"
		},
		{
			codigo: 41501020,
			procedimento: "Cavernosometria"
		},
		{
			codigo: 41501047,
			procedimento: "Dopplermetria dos cordões espermáticos"
		},
		{
			codigo: 41501063,
			procedimento: "Investigação ultrassônica com registro gráfico (qualquer área)"
		},
		{
			codigo: 41501071,
			procedimento: "Investigação ultrassônica com teste de stress e com registro gráfico"
		},
		{
			codigo: 41501080,
			procedimento: "Investigação ultrassônica com teste de stress e sem registro gráfico"
		},
		{
			codigo: 41501098,
			procedimento: "Investigação ultrassônica com teste de stress em esteira e com registro gráfico"
		},
		{
			codigo: 41501101,
			procedimento: "Investigação ultrassônica sem registro gráfico (qualquer área)"
		},
		{
			codigo: 41501110,
			procedimento: "Medida de índice de artelhos com registro gráfico"
		},
		{
			codigo: 41501128,
			procedimento: "Paquimetria ultrassônica - monocular"
		},
		{
			codigo: 41501136,
			procedimento: "Termometria cutânea (por lateralidade: pescoço, membros, bolsa escrotal, por território peniano)"
		},
		{
			codigo: 41501144,
			procedimento: "Tomografia de coerência óptica - monocular"
		},
		{
			codigo: 41501179,
			procedimento: "Fotopletismografia (venosa ou arterial) por lateralidade ou segmento"
		},
		{
			codigo: 41501187,
			procedimento: "Medida de pressão segmentar (nos quatro segmentos)"
		},
		{
			codigo: 41501195,
			procedimento: "Pletismografia (qualquer tipo) por lateralidade ou território"
		},
		{
			codigo: 41501209,
			procedimento: "Medida de pressão hepática"
		},
		{
			codigo: 41501217,
			procedimento: "Injeção intracavernosa"
		},
		{
			codigo: 41501225,
			procedimento: "Oximetria arterial, perfil"
		},
		{
			codigo: 41501233,
			procedimento: "Oximetria venosa, perfil"
		},
		{
			codigo: 41501241,
			procedimento: "Perfil de pressão uretral"
		},
		{
			codigo: 41501250,
			procedimento: "Pressão intra abdominal urológica"
		},
		{
			codigo: 41501268,
			procedimento: "Pressão arterial peniana"
		},
		{
			codigo: 50000012,
			procedimento: "Sessão de psicomotricidade individual"
		},
		{
			codigo: 50000020,
			procedimento: "Sessão de psicomotricidade em grupo"
		},
		{
			codigo: 50000039,
			procedimento: "Sessão de ludoterapia individual"
		},
		{
			codigo: 50000047,
			procedimento: "Sessão de ludoterapia em grupo"
		},
		{
			codigo: 50000055,
			procedimento: "Consulta individual ambulatorial, em terapia ocupacional"
		},
		{
			codigo: 50000063,
			procedimento: "Consulta individual domiciliar, em terapia ocupacional"
		},
		{
			codigo: 50000071,
			procedimento: "Consulta individual hospitalar, em terapia ocupacional"
		},
		{
			codigo: 50000080,
			procedimento: "Sessão individual ambulatorial, em terapia ocupacional"
		},
		{
			codigo: 50000098,
			procedimento: "Sessão individual domiciliar, em terapia ocupacional"
		},
		{
			codigo: 50000101,
			procedimento: "Sessão individual hospitalar, em terapia ocupacional"
		},
		{
			codigo: 50000110,
			procedimento: "Sessão de terapia ocupacional familiar"
		},
		{
			codigo: 50000128,
			procedimento: "Sessão de terapia ocupacional em grupo"
		},
		{
			codigo: 50000136,
			procedimento: "Sessão de terapia ocupacional para treinamento órteses, próteses e adaptações"
		},
		{
			codigo: 50000144,
			procedimento: "Consulta ambulatorial em fisioterapia"
		},
		{
			codigo: 50000152,
			procedimento: "Sessão para assistência fisioterapêutica ambulatorial ao paciente com disfunção decorrente de lesão do sistema nervoso central e/ou periférico"
		},
		{
			codigo: 50000160,
			procedimento: "Atendimento fisioterapêutico ambulatorial ao paciente com disfunção decorrente de alterações do sistema músculo-esquelético"
		},
		{
			codigo: 50000179,
			procedimento: "Sessão para assistência fisioterapêutica ambulatorial ao paciente com disfunção decorrente de alterações no sistema respiratório"
		},
		{
			codigo: 50000187,
			procedimento: "Sessão para assistência fisioterapêutica ambulatorial ao paciente com disfunção decorrente de alterações do sistema cardiovascular"
		},
		{
			codigo: 50000195,
			procedimento: "Atendimento fisioterapêutico ambulatorial ao paciente com disfunção decorrente de queimaduras"
		},
		{
			codigo: 50000209,
			procedimento: "Sessão para assistência fisioterapêutica ambulatorial ao paciente com disfunção decorrente de alterações do sistema linfático e/ou vascular periférico"
		},
		{
			codigo: 50000217,
			procedimento: "Sessão para assistência fisioterapêutica ambulatorial no pré e pós cirúrgico e em recuperação de tecidos"
		},
		{
			codigo: 50000225,
			procedimento: "Sessão para assistência fisioterapêutica ambulatorial por alterações endocrino-metabólicas"
		},
		{
			codigo: 50000233,
			procedimento: "Sessão para assistência fisioterapêutica ambulatorial para alterações inflamatórias e ou degenerativas do aparelho genito-urinário e reprodutor"
		},
		{
			codigo: 50000241,
			procedimento: "Consulta domiciliar em fisioterapia"
		},
		{
			codigo: 50000250,
			procedimento: "Sessão para assistência fisioterapêutica domiciliar ao paciente com disfunção decorrente de lesão do sistema nervoso central e/ou periférico"
		},
		{
			codigo: 50000268,
			procedimento: "Sessão para assistência fisioterapêutica domiciliar ao paciente com disfunção decorrente de alterações do sistema músculo-esquelético"
		},
		{
			codigo: 50000276,
			procedimento: "Sessão para assistência fisioterapêutica domiciliar ao paciente com disfunção decorrente de alterações no sistema respiratório"
		},
		{
			codigo: 50000284,
			procedimento: "Sessão para assistência fisioterapêutica domiciliar ao paciente com disfunção decorrente de alterações do sistema cardiovascular"
		},
		{
			codigo: 50000292,
			procedimento: "Sessão para assistência fisioterapêutica domiciliar ao paciente com disfunção decorrente de queimaduras"
		},
		{
			codigo: 50000306,
			procedimento: "Atendimento fisioterapêutico domiciliar ao paciente com disfunção decorrente de alterações do sistema linfático e/ou vascular periférico"
		},
		{
			codigo: 50000314,
			procedimento: "Sessão para assistência fisioterapêutica domiciliar no pré e pós cirúrgico e em recuperação de tecidos"
		},
		{
			codigo: 50000322,
			procedimento: "Sessão para assistência fisioterapêutica domiciliar por alterações endocrino-metabólicas"
		},
		{
			codigo: 50000330,
			procedimento: "Atendimento fisioterapêutico domiciliar para alterações inflamatórias e ou degenerativas do aparelho genito-urinário, reprodutor e/ou proctológico"
		},
		{
			codigo: 50000349,
			procedimento: "Consulta hospitalar em fisioterapia"
		},
		{
			codigo: 50000357,
			procedimento: "Sessão para assistência fisioterapêutica hospitalar ao paciente com disfunção decorrente de lesão do sistema nervoso central e/ou periférico"
		},
		{
			codigo: 50000365,
			procedimento: "Atendimento fisioterapêutico hospitalar ao paciente com disfunção decorrente de alterações do sistema músculo-esquelético"
		},
		{
			codigo: 50000373,
			procedimento: "Sessão para assistência fisioterapêutica hospitalar ao paciente com disfunção decorrente de alterações no sistema respiratório"
		},
		{
			codigo: 50000381,
			procedimento: "Sessão para assistência fisioterapêutica hospitalar ao paciente com disfunção decorrente de alterações do sistema cardiovascular"
		},
		{
			codigo: 50000390,
			procedimento: "Atendimento fisioterapêutico hospitalar ao paciente com disfunção decorrente de queimaduras"
		},
		{
			codigo: 50000403,
			procedimento: "Sessão para assistência fisioterapêutica hospitalar ao paciente com disfunção decorrente de alterações do sistema linfático e/ou vascular periférico"
		},
		{
			codigo: 50000411,
			procedimento: "Atendimento fisioterapêutico hospitalar no pré e pós cirúrgico e em recuperação de tecidos"
		},
		{
			codigo: 50000420,
			procedimento: "Sessão para assistência fisioterapêutica hospitalar por alterações endocrino-metabólicas"
		},
		{
			codigo: 50000438,
			procedimento: "Hidroterapia"
		},
		{
			codigo: 50000446,
			procedimento: "RPG"
		},
		{
			codigo: 50000454,
			procedimento: "Sessão para assistência fisioterapêutica hospitalar para alterações inflamatórias e ou degenerativas do aparelho genito-urinário e reprodutor"
		},
		{
			codigo: 50000462,
			procedimento: "Consulta em psicologia"
		},
		{
			codigo: 50000470,
			procedimento: "Sessão de psicoterapia individual por psicólogo"
		},
		{
			codigo: 50000489,
			procedimento: "Sessão de psicoterapia em grupo por psicólogo"
		},
		{
			codigo: 50000497,
			procedimento: "Sessão de psicoterapia em casal por psicólogo"
		},
		{
			codigo: 50000500,
			procedimento: "Sessão de psicoterapia familiar por psicólogo"
		},
		{
			codigo: 50000519,
			procedimento: "Acompanhamento e reabilitação profissional por psicólogo"
		},
		{
			codigo: 50000527,
			procedimento: "Consulta hospitalar de enfermagem"
		},
		{
			codigo: 50000535,
			procedimento: "Enfermagem domiciliar"
		},
		{
			codigo: 50000543,
			procedimento: "Acompanhamento de cuidador domiciliar"
		},
		{
			codigo: 50000551,
			procedimento: "Acompanhamento de cuidador para paciente psiquiátrico"
		},
		{
			codigo: 50000560,
			procedimento: "Consulta ambulatorial por nutricionista"
		},
		{
			codigo: 50000578,
			procedimento: "Consulta domiciliar por nutricionista"
		},
		{
			codigo: 50000586,
			procedimento: "Consulta individual ambulatorial de fonoaudiologia"
		},
		{
			codigo: 50000594,
			procedimento: "Consulta individual domiciliar de fonoaudiologia"
		},
		{
			codigo: 50000608,
			procedimento: "Consulta individual hospitalar de fonoaudiologia"
		},
		{
			codigo: 50000616,
			procedimento: "Sessão individual ambulatorial de fonoaudiologia"
		},
		{
			codigo: 50000624,
			procedimento: "Sessão individual domiciliar de fonoaudiologia"
		},
		{
			codigo: 50000632,
			procedimento: "Sessão individual hospitalar de fonoaudiologia"
		},
		{
			codigo: 50000640,
			procedimento: "Sessão de fonoaudiologia em grupo"
		},
		{
			codigo: 50000659,
			procedimento: "Orientação fonoaudiológica aos pais/escolar/cuidador"
		},
		{
			codigo: 50000667,
			procedimento: "Análise acústica da voz por fonoaudiólogo"
		},
		{
			codigo: 50000675,
			procedimento: "Avaliação do processamento auditivo central por fonoaudiólogo"
		},
		{
			codigo: 50000683,
			procedimento: "Visita de assistente social"
		},
		{
			codigo: 50000691,
			procedimento: "Consulta hospitalar por nutricionista"
		},
		{
			codigo: 50000705,
			procedimento: "Consulta ambulatorial de enfermagem"
		},
		{
			codigo: 50000713,
			procedimento: "Atendimento fisioterapêutico ambulatorial ao paciente independente ou com dependência parcial, com disfunção decorrente de lesão do sistema nervoso central e/ou periférico"
		},
		{
			codigo: 50000721,
			procedimento: "Atendimento fisioterapêutico ambulatorial ao paciente dependente com disfunção decorrente de lesão do sistema nervoso central e/ou periférico"
		},
		{
			codigo: 50000730,
			procedimento: "Atendimento fisioterapêutico ambulatorial individual ao paciente com disfunção decorrente de alterações no sistema respiratório"
		},
		{
			codigo: 50000748,
			procedimento: "Atendimento fisioterapêutico ambulatorial em grupo aos pacientes com disfunção decorrente de alterações no sistema respiratório"
		},
		{
			codigo: 50000756,
			procedimento: "Atendimento fisioterapêutico ambulatorial individual ao paciente com disfunção decorrente de alterações do sistema cardiovascular"
		},
		{
			codigo: 50000764,
			procedimento: "Atendimento fisioterapêutico ambulatorial em grupo aos pacientes com disfunção decorrente de alterações do sistema cardiovascular"
		},
		{
			codigo: 50000772,
			procedimento: "Atendimento fisioterapêutico ambulatorial individual por alterações endocrino-metabólicas"
		},
		{
			codigo: 50000780,
			procedimento: "Atendimento fisioterapêutico ambulatorial em grupo por alterações endocrino-metabólicas"
		},
		{
			codigo: 50000799,
			procedimento: "Atendimento fisioterapêutico hospitalar ao paciente independente ou com dependência parcial, com disfunção decorrente de lesão do sistema nervoso central e/ou periférico"
		},
		{
			codigo: 50000802,
			procedimento: "Atendimento fisioterapêutico hospitalar ao paciente dependente com disfunção decorrente de lesão do sistema nervoso central e/ou periférico"
		},
		{
			codigo: 50000810,
			procedimento: "Atendimento fisioterapêutico hospitalar ao paciente com disfunção decorrente de alterações no sistema respiratório com assistência ventilatória."
		},
		{
			codigo: 50000829,
			procedimento: "Atendimento fisioterapêutico hospitalar ao paciente com disfunção decorrente de alterações no sistema respiratório sem assistência ventilatória"
		},
		{
			codigo: 50000837,
			procedimento: "Fisioterapia aquatica individual"
		},
		{
			codigo: 50000845,
			procedimento: "Fisioterapia aquatica em grupo (Hidroterapia)"
		},
		{
			codigo: 50000853,
			procedimento: "Atendimento Fisioterapêutico individual em Pilates"
		},
		{
			codigo: 50000861,
			procedimento: "Atendimento Fisioterapêutico em grupo em Pilates"
		},
		{
			codigo: 50000870,
			procedimento: "Atendimento Fisioterapêutico em Quiropraxia"
		},
		{
			codigo: 50000888,
			procedimento: "Baropodometria"
		},
		{
			codigo: 50000896,
			procedimento: "Avaliação ergonômica"
		},
		{
			codigo: 50000900,
			procedimento: "EMG não  invasivo"
		},
		{
			codigo: 50000918,
			procedimento: "Estabilometria"
		},
		{
			codigo: 50000926,
			procedimento: "Ventilometria (incluindo Capacidade Vital, Capacidade Inspiratoria, volume minuto, volume corrente e todos índices derivados destas avaliações)"
		},
		{
			codigo: 50000934,
			procedimento: "Análise Eletroterapêutica não invasiva, identificação de ponto motor, cronaximetria, reobase, acomodação e curva I/T - por segmento ou membro"
		},
		{
			codigo: 50000942,
			procedimento: "Atendimento fisioterapêutico ambulatorial individual ao paciente com disfunção decorrente de alterações do sistema cardiovascular"
		},
		{
			codigo: 50000950,
			procedimento: "Atendimento fisioterapêutico ambulatorial em grupo ao paciente com disfunção decorrente de alterações do sistema cardiovascular"
		},
		{
			codigo: 50000969,
			procedimento: "Hidroterapia individual"
		},
		{
			codigo: 50000977,
			procedimento: "Hidroterapia em grupo"
		},
		{
			codigo: 50000985,
			procedimento: "Atendimento fisioterapêutico ambulatorial individual ao paciente com disfunção decorrente de alterações no sistema respiratório"
		},
		{
			codigo: 50000993,
			procedimento: "Atendimento fisioterapêutico ambulatorial em grupo ao paciente com disfunção decorrente de alterações no sistema respiratório"
		},
		{
			codigo: 50001000,
			procedimento: "Atendimento fisioterapêutico hospitalar ao paciente com disfunção decorrente de alterações no sistema respiratório sem Assistência Ventilatória Mecânica."
		},
		{
			codigo: 50001019,
			procedimento: "Atendimento fisioterapêutico hospitalar ao paciente com disfunção decorrente de alterações no sistema respiratório com Assistência Ventilatória Mecânica."
		},
		{
			codigo: 50001027,
			procedimento: "Atendimento fisioterapêutico ambulatorial individual por alterações endocrino-metabólicas"
		},
		{
			codigo: 50001035,
			procedimento: "Atendimento fisioterapêutico ambulatorial em grupo por alterações endocrino-metabólicas"
		},
		{
			codigo: 50001043,
			procedimento: "Atendimento fisioterapêutico hospitalar ao paciente com dependência parcial com disfunção decorrente de lesão do sistema nervoso central e/ou periférico"
		},
		{
			codigo: 50001051,
			procedimento: "Atendimento fisioterapêutico hospitalar ao paciente com dependência total com disfunção decorrente de lesão do sistema nervoso central e/ou periférico"
		},
		{
			codigo: 50001060,
			procedimento: "Atendimento fisioterapêutico ambulatorial ao paciente com dependência parcial com disfunção decorrente de lesão do sistema nervoso central e/ou periférico"
		},
		{
			codigo: 50001078,
			procedimento: "Atendimento fisioterapêutico ambulatorial ao paciente com dependência total com disfunção decorrente de lesão do sistema nervoso central e/ou periférico"
		},
		{
			codigo: 50001086,
			procedimento: "Atendimento Fisioterapêutico individual em Pilates"
		},
		{
			codigo: 50001094,
			procedimento: "Atendimento Fisioterapêutico em grupo em Pilates"
		},
		{
			codigo: 50001108,
			procedimento: "Atendimento fisioterapêutico em Quiropraxia"
		},
		{
			codigo: 50001116,
			procedimento: "Análise Eletroterapêutica não invasiva, identificação de ponto motor, cronaximetria, reobase, acomodação e curva I/T - por segmento ou membro"
		},
		{
			codigo: 50001124,
			procedimento: "Baropodometria"
		},
		{
			codigo: 50001132,
			procedimento: "Avaliação ergonômica"
		},
		{
			codigo: 50001140,
			procedimento: "EMG não invasivo"
		},
		{
			codigo: 50001159,
			procedimento: "Estabilometria"
		},
		{
			codigo: 50001167,
			procedimento: "Confecção de recursos de tecnologia assistiva"
		},
		{
			codigo: 50001175,
			procedimento: "Ventilometria (incluindo Capacidade Vital, Capacidade Inspiratória, volume minuto, volume corrente e todos índices derivados destas avaliações)"
		},
		{
			codigo: 81000014,
			procedimento: "Condicionamento em Odontologia"
		},
		{
			codigo: 81000030,
			procedimento: "Consulta odontológica"
		},
		{
			codigo: 81000049,
			procedimento: "Consulta odontológica de Urgência"
		},
		{
			codigo: 81000057,
			procedimento: "Consulta odontológica de Urgência 24 hs"
		},
		{
			codigo: 81000065,
			procedimento: "Consulta odontológica inicial"
		},
		{
			codigo: 81000073,
			procedimento: "Consulta odontológica para avaliação técnica de auditoria"
		},
		{
			codigo: 81000090,
			procedimento: "Consulta para Técnica de Clareamento Dentário Caseiro"
		},
		{
			codigo: 81000111,
			procedimento: "Diagnóstico anatomopatológico em citologia esfoliativa na região buco-maxilo-facial"
		},
		{
			codigo: 81000138,
			procedimento: "Diagnóstico anatomopatológico em material de biópsia na região buco-maxilo-facial"
		},
		{
			codigo: 81000154,
			procedimento: "Diagnóstico anatomopatológico em peça cirúrgica na região buco-maxilo-facial"
		},
		{
			codigo: 81000170,
			procedimento: "Diagnóstico anatomopatológico em punção na região buco-maxilo-facial"
		},
		{
			codigo: 81000189,
			procedimento: "Diagnóstico e planejamento para tratamento odontológico"
		},
		{
			codigo: 81000197,
			procedimento: "Diagnóstico e tratamento de estomatite herpética"
		},
		{
			codigo: 81000200,
			procedimento: "Diagnóstico e tratamento de estomatite por candidose"
		},
		{
			codigo: 81000219,
			procedimento: "Diagnóstico e tratamento de halitose"
		},
		{
			codigo: 81000235,
			procedimento: "Diagnóstico e tratamento de xerostomia"
		},
		{
			codigo: 81000243,
			procedimento: "Diagnóstico por meio de enceramento"
		},
		{
			codigo: 81000260,
			procedimento: "Diagnóstico por meio de procedimentos laboratoriais"
		},
		{
			codigo: 81000278,
			procedimento: "Fotografia"
		},
		{
			codigo: 81000294,
			procedimento: "Levantamento Radiográfico (Exame Radiodôntico)"
		},
		{
			codigo: 81000308,
			procedimento: "Modelos ortodônticos"
		},
		{
			codigo: 81000324,
			procedimento: "Radiografia antero-posterior"
		},
		{
			codigo: 81000340,
			procedimento: "Radiografia da ATM"
		},
		{
			codigo: 81000367,
			procedimento: "Radiografia da mão e punho - carpal"
		},
		{
			codigo: 81000375,
			procedimento: "Radiografia interproximal - bite-wing"
		},
		{
			codigo: 81000383,
			procedimento: "Radiografia oclusal"
		},
		{
			codigo: 81000405,
			procedimento: "Radiografia panorâmica de mandíbula/maxila (ortopantomografia)"
		},
		{
			codigo: 81000413,
			procedimento: "Radiografia panorâmica de mandíbula/maxila (ortopantomografia) com traçado cefalométrico"
		},
		{
			codigo: 81000421,
			procedimento: "Radiografia periapical"
		},
		{
			codigo: 81000430,
			procedimento: "Radiografia póstero-anterior"
		},
		{
			codigo: 81000456,
			procedimento: "Slide"
		},
		{
			codigo: 81000472,
			procedimento: "Telerradiografia"
		},
		{
			codigo: 81000480,
			procedimento: "Telerradiografia com traçado cefalométrico"
		},
		{
			codigo: 81000510,
			procedimento: "Tomografia computadorizada por feixe cônico – cone beam"
		},
		{
			codigo: 81000529,
			procedimento: "Tomografia convencional – linear ou multi-direcional"
		},
		{
			codigo: 81000537,
			procedimento: "Traçado Cefalométrico"
		},
		{
			codigo: 81000545,
			procedimento: "Diagnóstico e tratamento de trismo"
		},
		{
			codigo: 81000553,
			procedimento: "Documentação odontológica em mídia digital"
		},
		{
			codigo: 81000561,
			procedimento: "Radiografia lateral corpo da mandíbula"
		},
		{
			codigo: 81000570,
			procedimento: "Técnica de localização radiográfica"
		},
		{
			codigo: 82000026,
			procedimento: "Acompanhamento de tratamento/procedimento cirúrgico em odontologia"
		},
		{
			codigo: 82000034,
			procedimento: "Alveoloplastia"
		},
		{
			codigo: 82000050,
			procedimento: "Amputação radicular com obturação retrógrada"
		},
		{
			codigo: 82000069,
			procedimento: "Amputação radicular sem obturação retrógrada"
		},
		{
			codigo: 82000077,
			procedimento: "Apicetomia birradiculares com obturação retrógrada"
		},
		{
			codigo: 82000085,
			procedimento: "Apicetomia birradiculares sem obturação retrógrada"
		},
		{
			codigo: 82000158,
			procedimento: "Apicetomia multirradiculares com obturação retrógrada"
		},
		{
			codigo: 82000166,
			procedimento: "Apicetomia multirradiculares sem obturação retrógrada"
		},
		{
			codigo: 82000174,
			procedimento: "Apicetomia unirradiculares com obturação retrógrada"
		},
		{
			codigo: 82000182,
			procedimento: "Apicetomia unirradiculares sem obturação retrógrada"
		},
		{
			codigo: 82000190,
			procedimento: "Aprofundamento/aumento de vestíbulo"
		},
		{
			codigo: 82000212,
			procedimento: "Aumento de coroa clínica"
		},
		{
			codigo: 82000239,
			procedimento: "Biópsia de boca"
		},
		{
			codigo: 82000247,
			procedimento: "Biópsia de glândula salivar"
		},
		{
			codigo: 82000255,
			procedimento: "Biópsia de lábio"
		},
		{
			codigo: 82000263,
			procedimento: "Biópsia de língua"
		},
		{
			codigo: 82000271,
			procedimento: "Biópsia de mandíbula"
		},
		{
			codigo: 82000280,
			procedimento: "Biópsia de maxila"
		},
		{
			codigo: 82000298,
			procedimento: "Bridectomia"
		},
		{
			codigo: 82000301,
			procedimento: "Bridotomia"
		},
		{
			codigo: 82000336,
			procedimento: "Cirurgia odontológica a retalho"
		},
		{
			codigo: 82000344,
			procedimento: "Cirurgia odontológica com aplicação de aloenxertos"
		},
		{
			codigo: 82000352,
			procedimento: "Cirurgia para exostose maxilar"
		},
		{
			codigo: 82000360,
			procedimento: "Cirurgia para torus mandibular – bilateral"
		},
		{
			codigo: 82000387,
			procedimento: "Cirurgia para torus mandibular – unilateral"
		},
		{
			codigo: 82000395,
			procedimento: "Cirurgia para torus palatino"
		},
		{
			codigo: 82000417,
			procedimento: "Cirurgia periodontal a retalho"
		},
		{
			codigo: 82000441,
			procedimento: "Coleta de raspado em lesões ou sítios específicos da região buco-maxilo-facial"
		},
		{
			codigo: 82000468,
			procedimento: "Controle de hemorragia com aplicação de agente hemostático em região buco-maxilo-facial"
		},
		{
			codigo: 82000484,
			procedimento: "Controle de hemorragia sem aplicação de agente hemostático em região buco-maxilo-facial"
		},
		{
			codigo: 82000506,
			procedimento: "Controle pós-operatório em odontologia"
		},
		{
			codigo: 82000522,
			procedimento: "Criocirurgia de neoplasias da região buco-maxilo-facial"
		},
		{
			codigo: 82000549,
			procedimento: "Crioterapia ou termoterapia em odontologia"
		},
		{
			codigo: 82000557,
			procedimento: "Cunha proximal"
		},
		{
			codigo: 82000581,
			procedimento: "Enxerto com osso autógeno da linha oblíqua"
		},
		{
			codigo: 82000603,
			procedimento: "Enxerto com osso autógeno do mento"
		},
		{
			codigo: 82000620,
			procedimento: "Enxerto com osso liofilizado"
		},
		{
			codigo: 82000646,
			procedimento: "Enxerto conjuntivo subepitelial"
		},
		{
			codigo: 82000662,
			procedimento: "Enxerto gengival livre"
		},
		{
			codigo: 82000689,
			procedimento: "Enxerto pediculado"
		},
		{
			codigo: 82000700,
			procedimento: "Estabilização de paciente por meio de contenção física e/ou mecânica"
		},
		{
			codigo: 82000743,
			procedimento: "Exérese de lipoma na região buco-maxilo-facial"
		},
		{
			codigo: 82000778,
			procedimento: "Exérese ou excisão de cálculo salivar"
		},
		{
			codigo: 82000786,
			procedimento: "Exérese ou excisão de cistos odontológicos"
		},
		{
			codigo: 82000794,
			procedimento: "Exérese ou excisão de mucocele"
		},
		{
			codigo: 82000808,
			procedimento: "Exérese ou excisão de rânula"
		},
		{
			codigo: 82000816,
			procedimento: "Exodontia a retalho"
		},
		{
			codigo: 82000832,
			procedimento: "Exodontia de permanente por indicação ortodôntica/protética"
		},
		{
			codigo: 82000859,
			procedimento: "Exodontia de raiz residual"
		},
		{
			codigo: 82000875,
			procedimento: "Exodontia simples de permanente"
		},
		{
			codigo: 82000883,
			procedimento: "Frenulectomia labial"
		},
		{
			codigo: 82000891,
			procedimento: "Frenulectomia lingual"
		},
		{
			codigo: 82000905,
			procedimento: "Frenulotomia labial"
		},
		{
			codigo: 82000913,
			procedimento: "Frenulotomia lingual"
		},
		{
			codigo: 82000921,
			procedimento: "Gengivectomia"
		},
		{
			codigo: 82000948,
			procedimento: "Gengivoplastia"
		},
		{
			codigo: 82000964,
			procedimento: "Implante ortodôntico"
		},
		{
			codigo: 82000980,
			procedimento: "Implante ósseo integrado"
		},
		{
			codigo: 82001006,
			procedimento: "Implante Zigomático"
		},
		{
			codigo: 82001022,
			procedimento: "Incisão e Drenagem extra-oral de abscesso, hematoma e/ou flegmão da região buco-maxilo-facial"
		},
		{
			codigo: 82001030,
			procedimento: "Incisão e Drenagem intra-oral de abscesso, hematoma e/ou flegmão da região buco-maxilo-facial"
		},
		{
			codigo: 82001049,
			procedimento: "Levantamento do seio maxilar com osso autógeno"
		},
		{
			codigo: 82001057,
			procedimento: "Levantamento do seio maxilar com osso homólogo"
		},
		{
			codigo: 82001065,
			procedimento: "Levantamento do seio maxilar com osso liofilizado"
		},
		{
			codigo: 82001073,
			procedimento: "Odonto-secção"
		},
		{
			codigo: 82001103,
			procedimento: "Punção aspirativa na região buco-maxilo-facial"
		},
		{
			codigo: 82001120,
			procedimento: "Punção aspirativa orientada por imagem na região buco-maxilo-facial"
		},
		{
			codigo: 82001138,
			procedimento: "Reabertura - colocação de cicatrizador"
		},
		{
			codigo: 82001154,
			procedimento: "Reconstrução de sulco gengivo-labial"
		},
		{
			codigo: 82001170,
			procedimento: "Redução cruenta de fratura alvéolo dentária"
		},
		{
			codigo: 82001189,
			procedimento: "Redução incruenta de fratura alvéolo dentária"
		},
		{
			codigo: 82001197,
			procedimento: "Redução simples de luxação de Articulação Têmporo-mandibular (ATM)"
		},
		{
			codigo: 82001219,
			procedimento: "Reeducação e/ou reabilitação de distúrbio buco-maxilo-facial"
		},
		{
			codigo: 82001235,
			procedimento: "Reeducação e/ou reabilitação de sequela em traumatismo buco-maxilo-facial"
		},
		{
			codigo: 82001243,
			procedimento: "Regeneração tecidual guiada – RTG"
		},
		{
			codigo: 82001251,
			procedimento: "Reimplante dentário com contenção"
		},
		{
			codigo: 82001286,
			procedimento: "Remoção de dentes inclusos / impactados"
		},
		{
			codigo: 82001294,
			procedimento: "Remoção de dentes semi-inclusos / impactados"
		},
		{
			codigo: 82001308,
			procedimento: "Remoção de dreno extra-oral"
		},
		{
			codigo: 82001316,
			procedimento: "Remoção de dreno intra-oral"
		},
		{
			codigo: 82001324,
			procedimento: "Remoção de implante dentário não ósseo integrado"
		},
		{
			codigo: 82001332,
			procedimento: "Remoção de implante dentário ósseo integrado no seio maxilar"
		},
		{
			codigo: 82001367,
			procedimento: "Remoção de odontoma"
		},
		{
			codigo: 82001375,
			procedimento: "Remoção de tamponamento nasal"
		},
		{
			codigo: 82001391,
			procedimento: "Retirada de corpo estranho oroantral ou oronasal da região buco-maxilo-facial"
		},
		{
			codigo: 82001413,
			procedimento: "Retirada de corpo estranho subcutâneo ou submucoso da região buco-maxilo-facial"
		},
		{
			codigo: 82001430,
			procedimento: "Retirada dos meios de fixação da região buco-maxilo-facial"
		},
		{
			codigo: 82001448,
			procedimento: "Sedação consciente com óxido nitroso e oxigênio em odontologia"
		},
		{
			codigo: 82001456,
			procedimento: "Sedação medicamentosa ambulatorial em odontologia"
		},
		{
			codigo: 82001464,
			procedimento: "Sepultamento radicular"
		},
		{
			codigo: 82001499,
			procedimento: "Sutura de ferida em região buco-maxilo-facial"
		},
		{
			codigo: 82001502,
			procedimento: "Tracionamento cirúrgico com finalidade ortodôntica"
		},
		{
			codigo: 82001510,
			procedimento: "Tratamento cirúrgico das fístulas buco nasal"
		},
		{
			codigo: 82001529,
			procedimento: "Tratamento cirúrgico das fístulas buco sinusal"
		},
		{
			codigo: 82001545,
			procedimento: "Tratamento cirúrgico de bridas constritivas da região buco-maxilo-facial"
		},
		{
			codigo: 82001553,
			procedimento: "Tratamento cirúrgico de hiperplasias de tecidos moles na região buco-maxilo-facial"
		},
		{
			codigo: 82001588,
			procedimento: "Tratamento cirúrgico de hiperplasias de tecidos ósseos/cartilaginosos na região buco-maxilo-facial"
		},
		{
			codigo: 82001596,
			procedimento: "Tratamento cirúrgico de tumores benignos de tecidos ósseos/cartilaginosos na região buco-maxilo-facial"
		},
		{
			codigo: 82001618,
			procedimento: "Tratamento cirúrgico dos tumores benignos de tecidos moles na região buco-maxilo-facial"
		},
		{
			codigo: 82001634,
			procedimento: "Tratamento Cirúrgico para tumores odontogênicos benignos – sem reconstrução"
		},
		{
			codigo: 82001642,
			procedimento: "Tratamento conservador de luxação da articulação têmporo-mandibular - ATM"
		},
		{
			codigo: 82001650,
			procedimento: "Tratamento de alveolite"
		},
		{
			codigo: 82001669,
			procedimento: "Tratamento odontológico regenerativo com enxerto de osso autógeno"
		},
		{
			codigo: 82001685,
			procedimento: "Tunelização"
		},
		{
			codigo: 82001707,
			procedimento: "Ulectomia"
		},
		{
			codigo: 82001715,
			procedimento: "Ulotomia"
		},
		{
			codigo: 82001723,
			procedimento: "Aplicação de laser pós cirúrgico"
		},
		{
			codigo: 82001731,
			procedimento: "Exodontia de semi-incluso/impactado supra numerário"
		},
		{
			codigo: 82001740,
			procedimento: "Exodontia de incluso/impactado supra numerário"
		},
		{
			codigo: 82001758,
			procedimento: "Marsupialização de cistos odontológicos"
		},
		{
			codigo: 82001766,
			procedimento: "Placa de contenção cirúrgica"
		},
		{
			codigo: 83000020,
			procedimento: "Coroa de acetato em dente decíduo"
		},
		{
			codigo: 83000046,
			procedimento: "Coroa de aço em dente decíduo"
		},
		{
			codigo: 83000062,
			procedimento: "Coroa de policarbonato em dente decíduo"
		},
		{
			codigo: 83000089,
			procedimento: "Exodontia simples de decíduo"
		},
		{
			codigo: 83000097,
			procedimento: "Mantenedor de espaço fixo"
		},
		{
			codigo: 83000100,
			procedimento: "Mantenedor de espaço removível"
		},
		{
			codigo: 83000127,
			procedimento: "Pulpotomia em dente decíduo"
		},
		{
			codigo: 83000135,
			procedimento: "Restauração atraumática em dente decíduo"
		},
		{
			codigo: 83000151,
			procedimento: "Tratamento endodôntico em dente decíduo"
		},
		{
			codigo: 84000015,
			procedimento: "Aparelho protetor bucal"
		},
		{
			codigo: 84000031,
			procedimento: "Aplicação de cariostático"
		},
		{
			codigo: 84000058,
			procedimento: "Aplicação de selante - técnica invasiva"
		},
		{
			codigo: 84000074,
			procedimento: "Aplicação de selante de fóssulas e fissuras"
		},
		{
			codigo: 84000090,
			procedimento: "Aplicação tópica de flúor"
		},
		{
			codigo: 84000112,
			procedimento: "Aplicação tópica de verniz fluoretado"
		},
		{
			codigo: 84000139,
			procedimento: "Atividade educativa em saúde bucal"
		},
		{
			codigo: 84000163,
			procedimento: "Controle de biofilme (placa bacteriana)"
		},
		{
			codigo: 84000171,
			procedimento: "Controle de cárie incipiente"
		},
		{
			codigo: 84000198,
			procedimento: "Profilaxia: polimento coronário"
		},
		{
			codigo: 84000201,
			procedimento: "Remineralização"
		},
		{
			codigo: 84000228,
			procedimento: "Teste de capacidade tampão da saliva"
		},
		{
			codigo: 84000236,
			procedimento: "Teste de contagem microbiológica"
		},
		{
			codigo: 84000244,
			procedimento: "Teste de fluxo salivar"
		},
		{
			codigo: 84000252,
			procedimento: "Teste de PH salivar"
		},
		{
			codigo: 85000787,
			procedimento: "Imobilização dentária em dentes decíduos"
		},
		{
			codigo: 85100013,
			procedimento: "Capeamento pulpar direto"
		},
		{
			codigo: 85100021,
			procedimento: "Clareamento dentário caseiro"
		},
		{
			codigo: 85100030,
			procedimento: "Clareamento dentário de consultório"
		},
		{
			codigo: 85100048,
			procedimento: "Colagem de fragmentos dentários"
		},
		{
			codigo: 85100056,
			procedimento: "Curativo de demora em endodontia"
		},
		{
			codigo: 85100064,
			procedimento: "Faceta direta em resina fotopolimerizável"
		},
		{
			codigo: 85100072,
			procedimento: "Placa de Acetato para Clareamento Caseiro"
		},
		{
			codigo: 85100080,
			procedimento: "Restauração atraumática em dente permanente"
		},
		{
			codigo: 85100099,
			procedimento: "Restauração de amálgama  - 1 face"
		},
		{
			codigo: 85100102,
			procedimento: "Restauração de amálgama - 2 faces"
		},
		{
			codigo: 85100110,
			procedimento: "Restauração de amálgama - 3 faces"
		},
		{
			codigo: 85100129,
			procedimento: "Restauração de amálgama - 4 faces"
		},
		{
			codigo: 85100137,
			procedimento: "Restauração em ionômero de vidro - 1 face"
		},
		{
			codigo: 85100145,
			procedimento: "Restauração em ionômero de vidro - 2 faces"
		},
		{
			codigo: 85100153,
			procedimento: "Restauração em ionômero de vidro - 3 faces"
		},
		{
			codigo: 85100161,
			procedimento: "Restauração em ionômero de vidro - 4 faces"
		},
		{
			codigo: 85100170,
			procedimento: "Restauração em resina (indireta) - Inlay"
		},
		{
			codigo: 85100188,
			procedimento: "Restauração em resina (indireta) - Onlay"
		},
		{
			codigo: 85100196,
			procedimento: "Restauração em resina fotopolimerizável  1 face"
		},
		{
			codigo: 85100200,
			procedimento: "Restauração em resina fotopolimerizável  2 faces"
		},
		{
			codigo: 85100218,
			procedimento: "Restauração em resina fotopolimerizável  3 faces"
		},
		{
			codigo: 85100226,
			procedimento: "Restauração em resina fotopolimerizável  4 faces"
		},
		{
			codigo: 85100234,
			procedimento: "Tratamento de fluorose - microabrasão"
		},
		{
			codigo: 85100242,
			procedimento: "Adequação do meio bucal"
		},
		{
			codigo: 85100250,
			procedimento: "Aplicação de laser terapêutico"
		},
		{
			codigo: 85100269,
			procedimento: "Dessensibilização dentinária"
		},
		{
			codigo: 85200018,
			procedimento: "Clareamento de dente desvitalizado"
		},
		{
			codigo: 85200026,
			procedimento: "Preparo para núcleo intrarradicular"
		},
		{
			codigo: 85200034,
			procedimento: "Pulpectomia"
		},
		{
			codigo: 85200042,
			procedimento: "Pulpotomia"
		},
		{
			codigo: 85200050,
			procedimento: "Remoção de corpo estranho intracanal"
		},
		{
			codigo: 85200069,
			procedimento: "Remoção de material obturador intracanal para retratamento endodôntico"
		},
		{
			codigo: 85200077,
			procedimento: "Remoção de núcleo intrarradicular"
		},
		{
			codigo: 85200085,
			procedimento: "Restauração temporária / tratamento expectante"
		},
		{
			codigo: 85200093,
			procedimento: "Retratamento endodôntico birradicular"
		},
		{
			codigo: 85200107,
			procedimento: "Retratamento endodôntico multirradicular"
		},
		{
			codigo: 85200115,
			procedimento: "Retratamento endodôntico unirradicular"
		},
		{
			codigo: 85200123,
			procedimento: "Tratamento de perfuração endodôntica"
		},
		{
			codigo: 85200131,
			procedimento: "Tratamento endodôndico de dente com rizogênese incompleta"
		},
		{
			codigo: 85200140,
			procedimento: "Tratamento endodôntico birradicular"
		},
		{
			codigo: 85200158,
			procedimento: "Tratamento endodôntico multirradicular"
		},
		{
			codigo: 85200166,
			procedimento: "Tratamento endodôntico unirradicular"
		},
		{
			codigo: 85200174,
			procedimento: "Curativo endodôntico em situação de urgência"
		},
		{
			codigo: 85200182,
			procedimento: "Curetagem apical"
		},
		{
			codigo: 85300012,
			procedimento: "Dessensibilização dentária"
		},
		{
			codigo: 85300020,
			procedimento: "Imobilização dentária em dentes permanentes"
		},
		{
			codigo: 85300039,
			procedimento: "Raspagem sub-gengival/alisamento radicular"
		},
		{
			codigo: 85300047,
			procedimento: "Raspagem supra-gengival"
		},
		{
			codigo: 85300055,
			procedimento: "Remoção dos fatores de retenção do Biofilme Dental (Placa Bacteriana)"
		},
		{
			codigo: 85300063,
			procedimento: "Tratamento de abscesso periodontal agudo"
		},
		{
			codigo: 85300071,
			procedimento: "Tratamento de gengivite necrosante aguda - GNA"
		},
		{
			codigo: 85300080,
			procedimento: "Tratamento de pericoronarite"
		},
		{
			codigo: 85300098,
			procedimento: "Manutenção periodontal"
		},
		{
			codigo: 85300101,
			procedimento: "Tracionamento de raiz residual"
		},
		{
			codigo: 85400017,
			procedimento: "Ajuste Oclusal por acréscimo"
		},
		{
			codigo: 85400025,
			procedimento: "Ajuste Oclusal por desgaste seletivo"
		},
		{
			codigo: 85400033,
			procedimento: "Conserto em prótese parcial removível (em consultório e em laboratório)"
		},
		{
			codigo: 85400041,
			procedimento: "Conserto em prótese parcial removível (exclusivamente em consultório)"
		},
		{
			codigo: 85400050,
			procedimento: "Conserto em prótese total (em consultório e em laboratório)"
		},
		{
			codigo: 85400068,
			procedimento: "Conserto em prótese total (exclusivamente em consultório)"
		},
		{
			codigo: 85400076,
			procedimento: "Coroa provisória com pino"
		},
		{
			codigo: 85400084,
			procedimento: "Coroa provisória sem pino"
		},
		{
			codigo: 85400092,
			procedimento: "Coroa total acrílica prensada"
		},
		{
			codigo: 85400106,
			procedimento: "Coroa total em cerâmica pura"
		},
		{
			codigo: 85400114,
			procedimento: "Coroa total em cerômero"
		},
		{
			codigo: 85400122,
			procedimento: "Coroa total livre de metal (metalfree) sobre implante - cerâmica"
		},
		{
			codigo: 85400130,
			procedimento: "Coroa total livre de metal (metalfree) sobre implante - cerômero"
		},
		{
			codigo: 85400149,
			procedimento: "Coroa total metálica"
		},
		{
			codigo: 85400157,
			procedimento: "Coroa total metalo cerâmica"
		},
		{
			codigo: 85400165,
			procedimento: "Coroa total metalo plástica – cerômero"
		},
		{
			codigo: 85400173,
			procedimento: "Coroa total metalo plástica – resina acrílica"
		},
		{
			codigo: 85400181,
			procedimento: "Faceta em cerâmica pura"
		},
		{
			codigo: 85400190,
			procedimento: "Faceta em cerômero"
		},
		{
			codigo: 85400203,
			procedimento: "Guia cirúrgico para prótese total imediata"
		},
		{
			codigo: 85400211,
			procedimento: "Núcleo de preenchimento"
		},
		{
			codigo: 85400220,
			procedimento: "Núcleo metálico fundido"
		},
		{
			codigo: 85400238,
			procedimento: "Onlay de Resina Indireta"
		},
		{
			codigo: 85400246,
			procedimento: "Órtese miorrelaxante (placa oclusal estabilizadora)"
		},
		{
			codigo: 85400254,
			procedimento: "Órtese reposicionadora (placa oclusal reposicionadora)"
		},
		{
			codigo: 85400262,
			procedimento: "Pino pré fabricado"
		},
		{
			codigo: 85400270,
			procedimento: "Placa oclusal resiliente"
		},
		{
			codigo: 85400289,
			procedimento: "Prótese fixa adesiva direta (provisória)"
		},
		{
			codigo: 85400297,
			procedimento: "Prótese fixa adesiva em cerômero livre de metal (metal free)"
		},
		{
			codigo: 85400300,
			procedimento: "Prótese fixa adesiva indireta em metalo cerâmica"
		},
		{
			codigo: 85400319,
			procedimento: "Prótese fixa adesiva indireta em metalo plástica"
		},
		{
			codigo: 85400327,
			procedimento: "Prótese parcial fixa em cerômero livre de metal (metal free)"
		},
		{
			codigo: 85400335,
			procedimento: "Prótese parcial fixa em metalo cerâmica"
		},
		{
			codigo: 85400343,
			procedimento: "Prótese parcial fixa em metalo plástica"
		},
		{
			codigo: 85400351,
			procedimento: "Prótese parcial fixa In Ceran livre de metal (metal free)"
		},
		{
			codigo: 85400360,
			procedimento: "Prótese parcial fixa provisória"
		},
		{
			codigo: 85400378,
			procedimento: "Prótese parcial removível com encaixes de precisão ou de semi precisão"
		},
		{
			codigo: 85400386,
			procedimento: "Prótese parcial removível com grampos bilateral"
		},
		{
			codigo: 85400394,
			procedimento: "Prótese parcial removível provisória em acrílico com ou sem grampos"
		},
		{
			codigo: 85400408,
			procedimento: "Prótese total"
		},
		{
			codigo: 85400416,
			procedimento: "Prótese total imediata"
		},
		{
			codigo: 85400424,
			procedimento: "Prótese total incolor"
		},
		{
			codigo: 85400432,
			procedimento: "Provisório para Faceta"
		},
		{
			codigo: 85400440,
			procedimento: "Provisório para Inlay/Onlay"
		},
		{
			codigo: 85400459,
			procedimento: "Provisório para Restauração metálica fundida"
		},
		{
			codigo: 85400467,
			procedimento: "Recimentação de trabalhos protéticos"
		},
		{
			codigo: 85400475,
			procedimento: "Reembasamento de coroa provisória"
		},
		{
			codigo: 85400483,
			procedimento: "Reembasamento de prótese total ou parcial - imediato (em consultório)"
		},
		{
			codigo: 85400491,
			procedimento: "Reembasamento de prótese total ou parcial - mediato (em laboratório)"
		},
		{
			codigo: 85400505,
			procedimento: "Remoção de trabalho protético"
		},
		{
			codigo: 85400513,
			procedimento: "Restauração em cerâmica pura - inlay"
		},
		{
			codigo: 85400521,
			procedimento: "Restauração em cerâmica pura - onlay"
		},
		{
			codigo: 85400530,
			procedimento: "Restauração em cerômero - onlay"
		},
		{
			codigo: 85400548,
			procedimento: "Restauração em cerômero - inlay"
		},
		{
			codigo: 85400556,
			procedimento: "Restauração metálica fundida"
		},
		{
			codigo: 85400564,
			procedimento: "Prótese total imediata sobre implantes"
		},
		{
			codigo: 85400572,
			procedimento: "Coroa 3/4 ou 4/5"
		},
		{
			codigo: 85400580,
			procedimento: "JIG ou Front plato - órtese reposicionadora"
		},
		{
			codigo: 85400599,
			procedimento: "Planejamento em prótese"
		},
		{
			codigo: 85400602,
			procedimento: "Ponto de solda"
		},
		{
			codigo: 85400610,
			procedimento: "Prótese total caracterizada"
		},
		{
			codigo: 85500011,
			procedimento: "Coroa provisória sobre implante"
		},
		{
			codigo: 85500020,
			procedimento: "Coroa provisória sobre implante com carga imediata"
		},
		{
			codigo: 85500038,
			procedimento: "Coroa total metalo cerâmica sobre implante"
		},
		{
			codigo: 85500046,
			procedimento: "Coroa total metalo plástica sobre implante – cerômero"
		},
		{
			codigo: 85500054,
			procedimento: "Coroa total metalo plástica sobre implante – resina acrílica"
		},
		{
			codigo: 85500062,
			procedimento: "Guia cirúrgico para implante"
		},
		{
			codigo: 85500070,
			procedimento: "Intermediário protético (para implantes)"
		},
		{
			codigo: 85500089,
			procedimento: "Manutenção de prótese sobre implantes"
		},
		{
			codigo: 85500097,
			procedimento: "Overdenture barra clipe ou o\"ring sobre dois implantes"
		},
		{
			codigo: 85500100,
			procedimento: "Overdenture barra clipe ou o\"ring sobre quatro ou mais implantes"
		},
		{
			codigo: 85500119,
			procedimento: "Overdenture barra clipe ou o\"ring sobre três implantes"
		},
		{
			codigo: 85500127,
			procedimento: "Prótese parcial fixa implanto suportada"
		},
		{
			codigo: 85500135,
			procedimento: "Prótese parcial fixa provisória em carga imediata"
		},
		{
			codigo: 85500143,
			procedimento: "Protocolo Branemark em carga imediata para 4 implantes - parte protética"
		},
		{
			codigo: 85500151,
			procedimento: "Protocolo Branemark em carga imediata para 5 implantes - parte protética"
		},
		{
			codigo: 85500160,
			procedimento: "Protocolo Branemark para 4 implantes"
		},
		{
			codigo: 85500178,
			procedimento: "Protocolo Branemark para 5 implantes"
		},
		{
			codigo: 85500186,
			procedimento: "Protocolo Branemark provisório para 4 implantes"
		},
		{
			codigo: 85500194,
			procedimento: "Protocolo Branemark provisório para 5 implantes"
		},
		{
			codigo: 85500208,
			procedimento: "Barra clipe"
		},
		{
			codigo: 85500216,
			procedimento: "Plasma rico em plaquetas (PRP)"
		},
		{
			codigo: 85500224,
			procedimento: "Tratamento de perimplantite por implante"
		},
		{
			codigo: 86000012,
			procedimento: "Aletas Gomes"
		},
		{
			codigo: 86000020,
			procedimento: "Aparelho de Klammt"
		},
		{
			codigo: 86000039,
			procedimento: "Aparelho de protração mandibular -  APM"
		},
		{
			codigo: 86000047,
			procedimento: "Aparelho de Thurow"
		},
		{
			codigo: 86000055,
			procedimento: "Aparelho extra-bucal"
		},
		{
			codigo: 86000063,
			procedimento: "Aparelho ortodôntico fixo estético"
		},
		{
			codigo: 86000080,
			procedimento: "Aparelho ortodôntico fixo estético parcial"
		},
		{
			codigo: 86000098,
			procedimento: "Aparelho ortodôntico fixo metálico"
		},
		{
			codigo: 86000110,
			procedimento: "Aparelho ortodôntico fixo metálico parcial"
		},
		{
			codigo: 86000128,
			procedimento: "Aparelho removível com alças bionator invertida ou de Escheler"
		},
		{
			codigo: 86000136,
			procedimento: "APM - Aparelho de Protração Mandibular"
		},
		{
			codigo: 86000144,
			procedimento: "Arco lingual"
		},
		{
			codigo: 86000152,
			procedimento: "Barra transpalatina fixa"
		},
		{
			codigo: 86000160,
			procedimento: "Barra transpalatina removível"
		},
		{
			codigo: 86000179,
			procedimento: "Bionator de Balters"
		},
		{
			codigo: 86000187,
			procedimento: "Blocos geminados de Clark – twinblock"
		},
		{
			codigo: 86000195,
			procedimento: "Botão de Nance"
		},
		{
			codigo: 86000209,
			procedimento: "Contenção fixa - por arcada"
		},
		{
			codigo: 86000225,
			procedimento: "Disjuntor palatino - Hirax"
		},
		{
			codigo: 86000233,
			procedimento: "Disjuntor palatino - Macnamara"
		},
		{
			codigo: 86000241,
			procedimento: "Distalizador com mola nitinol"
		},
		{
			codigo: 86000250,
			procedimento: "Distalizador de Hilgers"
		},
		{
			codigo: 86000268,
			procedimento: "Distalizador Distal Jet"
		},
		{
			codigo: 86000276,
			procedimento: "Distalizador Pendulo/Pendex"
		},
		{
			codigo: 86000284,
			procedimento: "Distalizador tipo Jones Jig"
		},
		{
			codigo: 86000292,
			procedimento: "Documentação eletromiográfica"
		},
		{
			codigo: 86000306,
			procedimento: "Gianelly"
		},
		{
			codigo: 86000314,
			procedimento: "Grade palatina fixa"
		},
		{
			codigo: 86000322,
			procedimento: "Grade palatina removível"
		},
		{
			codigo: 86000330,
			procedimento: "Herbst encapsulado"
		},
		{
			codigo: 86000357,
			procedimento: "Manutenção de aparelho ortodôntico - aparelho fixo"
		},
		{
			codigo: 86000365,
			procedimento: "Manutenção de aparelho ortodôntico - aparelho ortopédico"
		},
		{
			codigo: 86000373,
			procedimento: "Manutenção de aparelho ortodôntico - aparelho removível"
		},
		{
			codigo: 86000381,
			procedimento: "Máscara facial – Delaire e Tração Reversa"
		},
		{
			codigo: 86000390,
			procedimento: "Mentoneira"
		},
		{
			codigo: 86000403,
			procedimento: "Modelador elástico de Bimler"
		},
		{
			codigo: 86000411,
			procedimento: "Monobloco"
		},
		{
			codigo: 86000420,
			procedimento: "Obtenção de modelos gnatostáticos de Planas"
		},
		{
			codigo: 86000438,
			procedimento: "Pistas diretas de Planas - superior e inferior"
		},
		{
			codigo: 86000446,
			procedimento: "Pistas indiretas de Planas"
		},
		{
			codigo: 86000454,
			procedimento: "Placa de distalização de molares"
		},
		{
			codigo: 86000462,
			procedimento: "Placa de Hawley"
		},
		{
			codigo: 86000470,
			procedimento: "Placa de Hawley - com torno expansor"
		},
		{
			codigo: 86000489,
			procedimento: "Placa de mordida ortodôntica"
		},
		{
			codigo: 86000497,
			procedimento: "Placa de Schwarz"
		},
		{
			codigo: 86000500,
			procedimento: "Placa de verticalização de caninos"
		},
		{
			codigo: 86000519,
			procedimento: "Placa dupla de Sanders"
		},
		{
			codigo: 86000527,
			procedimento: "Placa encapsulada de Maurício"
		},
		{
			codigo: 86000535,
			procedimento: "Placa lábio-ativa"
		},
		{
			codigo: 86000543,
			procedimento: "Plano anterior fixo"
		},
		{
			codigo: 86000551,
			procedimento: "Plano inclinado"
		},
		{
			codigo: 86000560,
			procedimento: "Quadrihélice"
		},
		{
			codigo: 86000578,
			procedimento: "Regulador de função de Frankel"
		},
		{
			codigo: 86000586,
			procedimento: "Simões Network"
		},
		{
			codigo: 86000594,
			procedimento: "Splinter"
		},
		{
			codigo: 86000608,
			procedimento: "Placa de contenção ortodôntica"
		},
		{
			codigo: 86000616,
			procedimento: "Recolocação de mantenedor de espaço"
		},
		{
			codigo: 87000016,
			procedimento: "Colocação de aparelho ortodôntico removível"
		},
		{
			codigo: 87000024,
			procedimento: "Atividade educativa para pais e/ou cuidadores"
		},
		{
			codigo: 87000032,
			procedimento: "Condicionamento em odontologia para pacientes com necessidades especiais"
		},
		{
			codigo: 87000040,
			procedimento: "Coroa de acetato em dente permanente"
		},
		{
			codigo: 87000059,
			procedimento: "Coroa de aço em dente permanente"
		},
		{
			codigo: 87000067,
			procedimento: "Coroa de policarbonato em dente permanente"
		},
		{
			codigo: 87000148,
			procedimento: "Estabilização por meio de contenção física e/ou mecânica em pacientes com necessidades especiais em odontologia"
		},
		{
			codigo: 87000164,
			procedimento: "Sedação consciente com óxido nitroso e oxigênio em pacientes com necessidades especiais em odontologia"
		},
		{
			codigo: 87000180,
			procedimento: "Sedação medicamentosa ambulatorial em pacientes com necessidades especiais em odontologia"
		},
		{
			codigo: 87000199,
			procedimento: "Colocação de aparelho ortodôntico removível"
		}
	]

	export default tuss