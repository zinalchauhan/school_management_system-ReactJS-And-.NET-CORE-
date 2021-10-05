using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class noticeMaster_tableEntities
    {
        private int noticeIdPk = 0;
        private string noticeSubject = "";
        private string noticeDescription = "";
        private string noticeImage = "";
        private int fromUserIdFk = 0;
        private string toUserType = "";
        private int mediumIdFk = 0;
        private string mediumName = "";
        private string standards = "";
        private int isActive = 0;

    public int NoticeIdPk { get => noticeIdPk; set => noticeIdPk = value; }
    public string NoticeSubject { get => noticeSubject; set => noticeSubject = value; }
    public string NoticeDescription { get => noticeDescription; set => noticeDescription = value; }
    public string NoticeImage { get => noticeImage; set => noticeImage = value; }
    public int FromUserIdFk { get => fromUserIdFk; set => fromUserIdFk = value; }
    public string ToUserType { get => toUserType; set => toUserType = value; }
    public int MediumIdFk { get => mediumIdFk; set => mediumIdFk = value; }
    public string Standards { get => standards; set => standards = value; }
    public int IsActive { get => isActive; set => isActive = value; }
    public string MediumName { get => mediumName; set => mediumName = value; }
}

