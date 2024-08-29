export const fullAdmin = `<?xml version="1.0" encoding="UTF-8"?>

<mat:MessageAttributesTemplates xmlns:mat="http://www.axway.com/Schemas/2011/mat">
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_GRKGRANT_FLTGRKGRNT</mat:Name>
		<mat:Description>CLNID_GRKGRANT_FLTGRKGRNT</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="FirstLine Template Grant (Global)"/>
			<mat:Attribute name="SPS_LayoutID" value="FLTGRKGRNT"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="Fidelity"/>
			<mat:Attribute name="SPS_chkFirstLine" value="true"/>
			<mat:Attribute name="SPS_FileNamePattern" value="PSWGrantLoad_#ClientId#_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="spsgrkftp-prd.fmr.com|spsftpp"/>
			<mat:Attribute name="SPS_FilePath" value="NULL"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock: Grant (Global)"/>
			<mat:Attribute name="SPS_Sender" value="Client"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="YV0008P"/>
			<mat:Attribute name="SPS_FileGroupID" value="GRKGRANT"/>
			<mat:Attribute name="SPS_preMapFlag" value="false"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="false"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_BLCKMGMT_FLTBLK</mat:Name>
		<mat:Description>CLNID_BLCKMGMT_FLTBLK</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="Blackout-In PSW"/>
			<mat:Attribute name="SPS_LayoutID" value="FLTBLK"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="Fidelity"/>
			<mat:Attribute name="SPS_chkFirstLine" value="false"/>
			<mat:Attribute name="SPS_FileNamePattern" value="BLKOUT_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="true"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Blackout Management"/>
			<mat:Attribute name="SPS_Sender" value="Client"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="YV0008P"/>
			<mat:Attribute name="SPS_FileGroupID" value="BLCKMGMT"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="true"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_BLCKMGMT_FLTBLKOVR</mat:Name>
		<mat:Description>CLNID_BLCKMGMT_FLTBLKOVR</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="Blackout Override-In PSW"/>
			<mat:Attribute name="SPS_LayoutID" value="FLTBLKOVR"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="Fidelity"/>
			<mat:Attribute name="SPS_chkFirstLine" value="false"/>
			<mat:Attribute name="SPS_FileNamePattern" value="BLKOUT_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Blackout Management"/>
			<mat:Attribute name="SPS_Sender" value="Client"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="YV0008P"/>
			<mat:Attribute name="SPS_FileGroupID" value="BLCKMGMT"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="true"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_GRKDMR_GRKDMR</mat:Name>
		<mat:Description>CLNID_GRKDMR_GRKDMR</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="Global DMR"/>
			<mat:Attribute name="SPS_LayoutID" value="GRKDMR"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="Fidelity"/>
			<mat:Attribute name="SPS_chkFirstLine" value="true"/>
			<mat:Attribute name="SPS_FileNamePattern" value="PSWDMR_#ClientId#_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="spsgrkftp-prd.fmr.com|spsftpp"/>
			<mat:Attribute name="SPS_FilePath" value="NULL"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock: DMR (Global)"/>
			<mat:Attribute name="SPS_Sender" value="Client"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="YV0008P"/>
			<mat:Attribute name="SPS_FileGroupID" value="GRKDMR"/>
			<mat:Attribute name="SPS_preMapFlag" value="false"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="false"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_GRKDMR_GRKPTD</mat:Name>
		<mat:Description>CLNID_GRKDMR_GRKPTD</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="Global PTD"/>
			<mat:Attribute name="SPS_LayoutID" value="GRKPTD"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="Fidelity"/>
			<mat:Attribute name="SPS_chkFirstLine" value="true"/>
			<mat:Attribute name="SPS_FileNamePattern" value="PSWPTD_#ClientId#_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="spsgrkftp-prd.fmr.com|spsftpp"/>
			<mat:Attribute name="SPS_FilePath" value="NULL"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock: DMR (Global)"/>
			<mat:Attribute name="SPS_Sender" value="Client"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="YV0008P"/>
			<mat:Attribute name="SPS_FileGroupID" value="GRKDMR"/>
			<mat:Attribute name="SPS_preMapFlag" value="false"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="false"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_GBINDICTVE_GBPPTPSW</mat:Name>
		<mat:Description>CLNID_GBINDICTVE_GBPPTPSW</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="Global Indicative - Upload"/>
			<mat:Attribute name="SPS_LayoutID" value="GBPPTPSW"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="Fidelity"/>
			<mat:Attribute name="SPS_chkFirstLine" value="false"/>
			<mat:Attribute name="SPS_FileNamePattern" value="PSW_IFDP_#FidFileId#.txt"/>
			<mat:Attribute name="SPS_Destination" value="wi-integratedfeed-prd.gslb.fmr.com|Ifpprod|SPS"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock: Indicative (Global)"/>
			<mat:Attribute name="SPS_Sender" value="Client"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="YV0008P"/>
			<mat:Attribute name="SPS_FileGroupID" value="GBINDICTVE"/>
			<mat:Attribute name="SPS_preMapFlag" value="false"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="true"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
</mat:MessageAttributesTemplates>
`;

export const partialAdmin = `<?xml version="1.0" encoding="UTF-8"?>

<mat:MessageAttributesTemplates xmlns:mat="http://www.axway.com/Schemas/2011/mat">
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_GRANT_CTGNTAWD</mat:Name>
		<mat:Description>CLNID_GRANT_CTGNTAWD</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="Grant and Award"/>
			<mat:Attribute name="SPS_LayoutID" value="CTGNTAWD"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="false"/>
			<mat:Attribute name="SPS_FileNamePattern" value="GRANT_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="true"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Grant"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="GRANT"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="true"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_DEPOSIT_CTPURCH</mat:Name>
		<mat:Description>CLNID_DEPOSIT_CTPURCH</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="ESPP Deposit / Purchase"/>
			<mat:Attribute name="SPS_LayoutID" value="CTPURCH"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="false"/>
			<mat:Attribute name="SPS_FileNamePattern" value="PURCH_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="true"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Deposit and Transaction"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="DEPOSIT"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="true"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_DEPOSIT_FLTESPP</mat:Name>
		<mat:Description>CLNID_DEPOSIT_FLTESPP</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="First Line Template ESPP Purchase"/>
			<mat:Attribute name="SPS_LayoutID" value="FLTESPP"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="true"/>
			<mat:Attribute name="SPS_FileNamePattern" value="PURCH_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Deposit and Transaction"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="DEPOSIT"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="false"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_INDICTVE_FLTPPTDEL</mat:Name>
		<mat:Description>CLNID_INDICTVE_FLTPPTDEL</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="First Line Template Participant Deletion"/>
			<mat:Attribute name="SPS_LayoutID" value="FLTPPTDEL"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="true"/>
			<mat:Attribute name="SPS_FileNamePattern" value="PRTC_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Indicative"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="INDICTVE"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="false"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_GRANT_CTPERF</mat:Name>
		<mat:Description>CLNID_GRANT_CTPERF</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="RS Performance Plan Data"/>
			<mat:Attribute name="SPS_LayoutID" value="CTPERF"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="false"/>
			<mat:Attribute name="SPS_FileNamePattern" value="PERF_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="true"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Grant"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="GRANT"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="true"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_GRANT_CTVEST</mat:Name>
		<mat:Description>CLNID_GRANT_CTVEST</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="Grant &amp; Award Vesting"/>
			<mat:Attribute name="SPS_LayoutID" value="CTVEST"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="true"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="false"/>
			<mat:Attribute name="SPS_FileNamePattern" value="VST_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="true"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Grant"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="GRANT"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="true"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_DEPOSIT_CTRELHST</mat:Name>
		<mat:Description>CLNID_DEPOSIT_CTRELHST</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="RS Release Historical Transactions"/>
			<mat:Attribute name="SPS_LayoutID" value="CTRELHST"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="false"/>
			<mat:Attribute name="SPS_FileNamePattern" value="RELHST_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="true"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Deposit and Transaction"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="DEPOSIT"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="true"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_DEPOSIT_FLTREL</mat:Name>
		<mat:Description>CLNID_DEPOSIT_FLTREL</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="First Line Template RS Release"/>
			<mat:Attribute name="SPS_LayoutID" value="FLTREL"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="true"/>
			<mat:Attribute name="SPS_FileNamePattern" value="REL_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Deposit and Transaction"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="DEPOSIT"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="false"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_DEPOSIT_FLTRELHST</mat:Name>
		<mat:Description>CLNID_DEPOSIT_FLTRELHST</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="First Line Template RS Release History Only"/>
			<mat:Attribute name="SPS_LayoutID" value="FLTRELHST"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="true"/>
			<mat:Attribute name="SPS_FileNamePattern" value="RELHST_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Deposit and Transaction"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="DEPOSIT"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="false"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_BLCKMGMT_FLTBLKOVR</mat:Name>
		<mat:Description>CLNID_BLCKMGMT_FLTBLKOVR</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="Blackout Override-In PSW"/>
			<mat:Attribute name="SPS_LayoutID" value="FLTBLKOVR"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="false"/>
			<mat:Attribute name="SPS_FileNamePattern" value="BLKOUT_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Blackout Management"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="BLCKMGMT"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="true"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_FEEDBK_CTFBDDSP</mat:Name>
		<mat:Description>CLNID_FEEDBK_CTFBDDSP</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Outbound"/>
			<mat:Attribute name="SPS_LayoutName" value="ESPP Disqualifying Disposition Feedback"/>
			<mat:Attribute name="SPS_LayoutID" value="CTFBDDSP"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="false"/>
			<mat:Attribute name="SPS_FileNamePattern" value="#ClientId#_FEEDBK_DD_ESPP_#DATE:YYYYMMDDddhhss#.txt"/>
			<mat:Attribute name="SPS_Destination" value="Unknown"/>
			<mat:Attribute name="SPS_FilePath" value="outgoing/SPS_ODS_AUTOEX/EXT_CLIENT"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Feedback"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="FEEDBK"/>
			<mat:Attribute name="SPS_preMapFlag" value="false"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="false"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_FEEDBK_CTFBEXER</mat:Name>
		<mat:Description>CLNID_FEEDBK_CTFBEXER</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Outbound"/>
			<mat:Attribute name="SPS_LayoutName" value="Feedback File (SOP/SAR)"/>
			<mat:Attribute name="SPS_LayoutID" value="CTFBEXER"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="false"/>
			<mat:Attribute name="SPS_FileNamePattern" value="#ClientId#_FEEDBK_SOPSAR_#DATE:YYYYMMDDddhhss#.txt"/>
			<mat:Attribute name="SPS_Destination" value="Unknown"/>
			<mat:Attribute name="SPS_FilePath" value="outgoing/SPS_ODS_AUTOEX/EXT_CLIENT"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Feedback"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="FEEDBK"/>
			<mat:Attribute name="SPS_preMapFlag" value="false"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="false"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_TAX_CTPPTTAX</mat:Name>
		<mat:Description>CLNID_TAX_CTPPTTAX</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="Participant Tax"/>
			<mat:Attribute name="SPS_LayoutID" value="CTPPTTAX"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="false"/>
			<mat:Attribute name="SPS_FileNamePattern" value="PRTCTAX_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="true"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Tax"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="TAX"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="true"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_DEPOSIT_FLTDEP</mat:Name>
		<mat:Description>CLNID_DEPOSIT_FLTDEP</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="First Line Template Deposit Only"/>
			<mat:Attribute name="SPS_LayoutID" value="FLTDEP"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="true"/>
			<mat:Attribute name="SPS_FileNamePattern" value="DEPOSIT_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Deposit and Transaction"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="DEPOSIT"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="false"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_INDICTVE_FLTPPT</mat:Name>
		<mat:Description>CLNID_INDICTVE_FLTPPT</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="First Line Template - Participant"/>
			<mat:Attribute name="SPS_LayoutID" value="FLTPPT"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="true"/>
			<mat:Attribute name="SPS_FileNamePattern" value="PRTC_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Indicative"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="INDICTVE"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="false"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_TAX_FLTTAX</mat:Name>
		<mat:Description>CLNID_TAX_FLTTAX</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="First Line Template Participant Tax"/>
			<mat:Attribute name="SPS_LayoutID" value="FLTTAX"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="true"/>
			<mat:Attribute name="SPS_FileNamePattern" value="PRTCTAX_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Tax"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="TAX"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="false"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_FEEDBK_CTFBDDIS</mat:Name>
		<mat:Description>CLNID_FEEDBK_CTFBDDIS</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Outbound"/>
			<mat:Attribute name="SPS_LayoutName" value="ISO Disqualifying Disposition Feedback"/>
			<mat:Attribute name="SPS_LayoutID" value="CTFBDDIS"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="false"/>
			<mat:Attribute name="SPS_FileNamePattern" value="#ClientId#_FEEDBK_DD_ISO_#DATE:YYYYMMDDddhhss#.txt"/>
			<mat:Attribute name="SPS_Destination" value="Unknown"/>
			<mat:Attribute name="SPS_FilePath" value="outgoing/SPS_ODS_AUTOEX/EXT_CLIENT"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Feedback"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="FEEDBK"/>
			<mat:Attribute name="SPS_preMapFlag" value="false"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="false"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_FEEDBK_CTFBOGA</mat:Name>
		<mat:Description>CLNID_FEEDBK_CTFBOGA</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Outbound"/>
			<mat:Attribute name="SPS_LayoutName" value="Online Grant Acceptance Feedback"/>
			<mat:Attribute name="SPS_LayoutID" value="CTFBOGA"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="false"/>
			<mat:Attribute name="SPS_FileNamePattern" value="#ClientId#_FEEDBK_OGA_#DATE:YYYYMMDDddhhss#.txt"/>
			<mat:Attribute name="SPS_Destination" value="Unknown"/>
			<mat:Attribute name="SPS_FilePath" value="outgoing/SPS_ODS_AUTOEX/EXT_CLIENT"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Feedback"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="FEEDBK"/>
			<mat:Attribute name="SPS_preMapFlag" value="false"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="false"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_GRANT_FLTGNT</mat:Name>
		<mat:Description>CLNID_GRANT_FLTGNT</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="First Line Template Grant"/>
			<mat:Attribute name="SPS_LayoutID" value="FLTGNT"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="true"/>
			<mat:Attribute name="SPS_FileNamePattern" value="GRANT_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Grant"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="GRANT"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="false"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_DEPOSIT_CTEXER</mat:Name>
		<mat:Description>CLNID_DEPOSIT_CTEXER</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="Exercise Tax Feed / Exercise Verification"/>
			<mat:Attribute name="SPS_LayoutID" value="CTEXER"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="false"/>
			<mat:Attribute name="SPS_FileNamePattern" value="EXER_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="true"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Deposit and Transaction"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="DEPOSIT"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="true"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_GRANT_FLTGNTDEL</mat:Name>
		<mat:Description>CLNID_GRANT_FLTGNTDEL</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="First Line Template Grant Deletion"/>
			<mat:Attribute name="SPS_LayoutID" value="FLTGNTDEL"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="true"/>
			<mat:Attribute name="SPS_FileNamePattern" value="GRANT_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Grant"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="GRANT"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="false"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_FEEDBK_CTFBTXELC</mat:Name>
		<mat:Description>CLNID_FEEDBK_CTFBTXELC</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Outbound"/>
			<mat:Attribute name="SPS_LayoutName" value="Tax Payment Method Election Feedback"/>
			<mat:Attribute name="SPS_LayoutID" value="CTFBTXELC"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="false"/>
			<mat:Attribute name="SPS_FileNamePattern" value="#ClientId#_FEEDBK_TAX_ELEC_#DATE:YYYYMMDDddhhss#.txt"/>
			<mat:Attribute name="SPS_Destination" value="Unknown"/>
			<mat:Attribute name="SPS_FilePath" value="outgoing/SPS_ODS_AUTOEX/EXT_CLIENT"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Feedback"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="FEEDBK"/>
			<mat:Attribute name="SPS_preMapFlag" value="false"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="false"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_INDICTVE_CTPPT</mat:Name>
		<mat:Description>CLNID_INDICTVE_CTPPT</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="Participant"/>
			<mat:Attribute name="SPS_LayoutID" value="CTPPT"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="false"/>
			<mat:Attribute name="SPS_FileNamePattern" value="PRTC_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="true"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Indicative"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="INDICTVE"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="true"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_DEPOSIT_CTREL</mat:Name>
		<mat:Description>CLNID_DEPOSIT_CTREL</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="RS Release"/>
			<mat:Attribute name="SPS_LayoutID" value="CTREL"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="false"/>
			<mat:Attribute name="SPS_FileNamePattern" value="REL_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="true"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Deposit and Transaction"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="DEPOSIT"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="true"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_GRANT_FLTPPVST</mat:Name>
		<mat:Description>CLNID_GRANT_FLTPPVST</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="First Line Template Performance &amp; Vest"/>
			<mat:Attribute name="SPS_LayoutID" value="FLTPPVST"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="true"/>
			<mat:Attribute name="SPS_FileNamePattern" value="VST_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="false"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Grant"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="GRANT"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="false"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_BLCKMGMT_FLTBLK</mat:Name>
		<mat:Description>CLNID_BLCKMGMT_FLTBLK</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="Blackout-In PSW"/>
			<mat:Attribute name="SPS_LayoutID" value="FLTBLK"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="false"/>
			<mat:Attribute name="SPS_FileNamePattern" value="BLKOUT_#FidFileId#.csv"/>
			<mat:Attribute name="SPS_Destination" value="INFASPSODS-FTP.fmr.com|inffftpp"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="true"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock-Partial Admin: Blackout Management"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="XC1231P"/>
			<mat:Attribute name="SPS_FileGroupID" value="BLCKMGMT"/>
			<mat:Attribute name="SPS_preMapFlag" value="true"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="true"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
</mat:MessageAttributesTemplates>
`;

export const gpid = `<?xml version="1.0" encoding="UTF-8"?>

<mat:MessageAttributesTemplates xmlns:mat="http://www.axway.com/Schemas/2011/mat">
	<mat:MessageAttributesTemplate>
		<mat:Name>CLNID_GBINDICTVE_GBPPTTX</mat:Name>
		<mat:Description>CLNID_GBINDICTVE_GBPPTTX</mat:Description>
		<mat:MessageAttributes>
			<mat:Attribute name="SPS_ClientTicker" value="CLNID"/>
			<mat:Attribute name="SPS_RkSourceVersion" value="NULL"/>
			<mat:Attribute name="SPS_extCsv" value="true"/>
			<mat:Attribute name="SPS_Direction" value="Inbound"/>
			<mat:Attribute name="SPS_LayoutName" value="Global Indicative and Tax"/>
			<mat:Attribute name="SPS_LayoutID" value="GBPPTTX"/>
			<mat:Attribute name="SPS_extZip" value="false"/>
			<mat:Attribute name="SPS_postMapFlag" value="false"/>
			<mat:Attribute name="SPS_RkSource" value="EASi"/>
			<mat:Attribute name="SPS_chkFirstLine" value="false"/>
			<mat:Attribute name="SPS_FileNamePattern" value="GPID_FAST_FESCOID_GLOBAL.txt"/>
			<mat:Attribute name="SPS_Destination" value="wi-integratedfeed-prd.gslb.fmr.com|Ifpprod|SPS"/>
			<mat:Attribute name="SPS_FilePath" value="incoming/SPS_ODS_AUTOEX"/>
			<mat:Attribute name="SPS-DTE" value="true"/>
			<mat:Attribute name="SPS_extXml" value="false"/>
			<mat:Attribute name="SPS_chkFull" value="true"/>
			<mat:Attribute name="SPS_FileGroup" value="Stock: Indicative (Global)"/>
			<mat:Attribute name="SPS_Sender" value="Vendor"/>
			<mat:Attribute name="SPS_extTxt" value="true"/>
			<mat:Attribute name="SPS_ClientRoutingId" value="YV0008P"/>
			<mat:Attribute name="SPS_FileGroupID" value="GBINDICTVE"/>
			<mat:Attribute name="SPS_preMapFlag" value="false"/>
			<mat:Attribute name="SPS_chkChangesOnly" value="true"/>
		</mat:MessageAttributes>
	</mat:MessageAttributesTemplate>
</mat:MessageAttributesTemplates>
`;